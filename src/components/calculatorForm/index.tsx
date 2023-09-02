import { Button, FormControl, FormErrorMessage, FormLabel, Select } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./schema";
import { States, Years } from "@/utils/enums";

export type FormValues = {
    state: States | string;
    year: Years | string;
  };
  

export default function CalculatorForm({onSubmitSuccessfully}:
  {onSubmitSuccessfully: (data: FormValues) => void}){
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
      } = useForm<FormValues>({
        resolver: yupResolver(schema),
      });
    
      async function onSubmit(data: FormValues) {
        try {
          onSubmitSuccessfully(data);
        } catch (error) {
          setError("root", { message: (error as Error).message });
        }
      }


    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center">
          <FormControl isInvalid={!!errors.state} my={8} mx={16}>
            <FormLabel fontSize="1.5rem">Estado</FormLabel>
            <Select placeholder="Escolha o estado"  className="text-black" h={32} {...register("state")}>
            {Object.values(States).map((state: States) => (
            <option key={state} value={state} >
                {state}
            </option>
        ))} 
            </Select>
            <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.state} my={8} mx={16}>
            <FormLabel fontSize="1.5rem">Ano</FormLabel>
            <Select placeholder="Escolha o ano"  h={32} className="text-black" {...register("year")}>
            {Object.values(Years).map((year: Years) => (
            <option key={year} value={year}>
                {year}
            </option>
        ))} 
            </Select>
            <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            borderWidth={1}
            p={8} my={8} mx={16} fontSize="1.5rem" 
            isLoading={isSubmitting}
            loadingText="Calculando..."
          >
            Calcular
          </Button>
      </form>
    )
}