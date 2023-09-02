import { Box, Flex } from "@chakra-ui/react";
import { FormValues } from "../calculatorForm";

export default function Result(data: FormValues){
    return (
        <Box>
        <h1 className="text-center py-8 text-3xl">Resultado no ano {data.year}</h1>
        <Flex justify="space-around">
            <Box borderWidth={1} p={8}>
                <h2 className="text-center pb-2 text-xl">Assistencia social</h2>
                <p>Despesas empenhadas: {data.state}</p>
                <p>Despesas gastas: {data.state}</p>
            </Box>
            <Box borderWidth={1} p={8}>
                <h2 className="text-center pb-2 text-xl">Previdencia social</h2>
                <p>Despesas empenhadas: {data.state}</p>
                <p>Despesas gastas: {data.state}</p>
            </Box>
            <Box borderWidth={1} p={8}>
                <h2 className="text-center pb-2 text-xl">Saúde</h2>
                <p>Despesas empenhadas: {data.state}</p>
                <p>Despesas gastas: {data.state}</p>
            </Box>
            

        </Flex>
        </Box>
    )
}