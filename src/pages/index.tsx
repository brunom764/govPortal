import Result from '@/components/Results'
import CalculatorForm, { FormValues} from '@/components/calculatorForm'
import { States, Years } from '@/utils/enums'
import { Box, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'


export default function Home() {
  const [dataInfo, setDataInfo] = useState<FormValues>({state: States.AC, year: Years.Dezoito})
  const onSubmitSuccessfully = (data: FormValues) => {
    setDataInfo(data);
  }

  useEffect (() => {
    console.log(dataInfo)
  }, [dataInfo])

  return (
    <Box minH="100vh" backgroundColor="#053B50" p={8}>
      <Heading fontSize="4rem" color="#64CCC5" className='text-center bg-black bg-opacity-50'
       fontFamily="sans-serif" py={4}>
        govPortal
      </Heading>
      <Heading fontSize="1.5rem" color="#64CCC5" pb={8} className='text-center bg-black bg-opacity-50'>
        O portal de gastos públicos
      </Heading>
      <CalculatorForm onSubmitSuccessfully={onSubmitSuccessfully} dataInfo={dataInfo} setDataInfo={setDataInfo} />
    </Box>
  )
}
