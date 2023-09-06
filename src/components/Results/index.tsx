import { Box, Flex, Text } from "@chakra-ui/react";
import { FormValues } from "../calculatorForm";
import { ValuesType, values } from "@/utils/values";
import { States, Years } from "@/utils/enums";

export default function Result({data}: {data: FormValues}){

    function filterValues(values: ValuesType[], targetState: States | string, targetYear: Years | string):
     ValuesType[] {
        return values.filter((value) => value.state === targetState && value.year === targetYear);
      }
    const filteredResults:ValuesType[] = filterValues(values, data.state, data.year)

    return (
        <Box>
        <h1 className="text-center py-8 text-3xl">Resultado no ano {data.year} no {data.state}</h1>
        <Flex justify="space-around" wrap="wrap">
        <Box borderWidth={1} p={32} m={2} backgroundColor="#EEEEEE">
            <Text color="#176B87" as="h2" className="text-center pb-2 text-xl">Saúde</Text>
                <Text as="p" color="#176B87" p={2}>
                Despesas empenhadas: <b>R$ {filteredResults[0]?.data[0].expanseCommitted || 0}</b>
                </Text>
                <Text as="p" color="#176B87" p={2}>
                Despesas gastas: <b>R$ {filteredResults[0]?.data[1].expensePaied || 0}</b>
                </Text>
            </Box>
            <Box borderWidth={1} p={32} m={2} backgroundColor="#EEEEEE">
                <Text color="#176B87" as="h2" className="text-center pb-2 text-xl">Assistência social</Text>
                <Text as="p" color="#176B87" p={2}>
                    Despesas empenhadas: <b>R$ {filteredResults[0]?.data[1].expanseCommitted || 0}</b>
                </Text>
                <Text as="p" color="#176B87" p={2}>
                    Despesas gastas: <b>R$ {filteredResults[0]?.data[1].expensePaied || 0}</b>
                    </Text>
            </Box>
            <Box borderWidth={1} p={32} m={2}  backgroundColor="#EEEEEE">
            <Text color="#176B87" as="h2" className="text-center pb-2 text-xl">Previdência social</Text>
                <Text as="p" color="#176B87" p={2}>
                Despesas empenhadas: <b>R$ {filteredResults[0]?.data[2].expanseCommitted || 0}</b>
                    </Text>
                <Text as="p" color="#176B87" p={2}>
                Despesas gastas: <b>R$ {filteredResults[0]?.data[2].expensePaied || 0}</b>
                    </Text>
            </Box>
        </Flex>
        </Box>
    )
}