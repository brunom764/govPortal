import { Button, FormControl, FormErrorMessage, FormLabel, Select } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./schema";
import { States, Years } from "@/utils/enums";
import Result from "../Results";
import { useState } from "react";

export type FormValues = {
    state: States | string;
    year: Years | string;
  };
  

export default function CalculatorForm({onSubmitSuccessfully, dataInfo, setDataInfo}:
  {onSubmitSuccessfully: (data: FormValues) => void, 
    dataInfo: FormValues,
    setDataInfo: (data: FormValues) => void}){
    const [isVisible, setIsVisible] = useState(false);
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
          setIsVisible(true);
        } catch (error) {
          setError("root", { message: (error as Error).message });
        }
      }

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-wrap py-8">
            <FormControl isInvalid={!!errors.state} mb={8} mx={16}>
              <FormLabel fontSize="1.5rem">Região</FormLabel>
              <Select placeholder="Escolha a região"  className="text-black" h={32} {...register("state")}>
              {Object.values(States).map((state: States) => (
              <option key={state} value={state} >
                  {state}
              </option>
          ))} 
              </Select>
              <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.state} mb={8} mx={16}>
              <FormLabel fontSize="1.5rem">Período</FormLabel>
              <Select placeholder="Escolha o período"  h={32} className="text-black" {...register("year")}>
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
              px={16} py={8} mt={8} mx={16} fontSize="1.5rem" 
              isLoading={isSubmitting}
              loadingText="Calculando..."
            >
              Calcular
            </Button>
        </form>
        {isVisible && <Result data={dataInfo} />}
      </>
    )
}