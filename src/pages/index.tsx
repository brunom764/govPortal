
import Result from '@/components/Results'
import CalculatorForm, { FormValues} from '@/components/calculatorForm'
import { Box, Heading } from '@chakra-ui/react'
import { useState } from 'react'


export default function Home() {
  const [dataInfo, setDataInfo] = useState<FormValues | null>(null)
  const onSubmitSuccessfully = (data: FormValues) => {
    setDataInfo(data);
  }
  return (
    <Box minH="100vh" backgroundColor="green" p={8}>
      <Heading fontSize="5rem" color="yellow" className='text-center'>govPortal</Heading>
      <CalculatorForm onSubmitSuccessfully={onSubmitSuccessfully} />
      {dataInfo && <Result state={dataInfo.state} year={dataInfo.year} />}
    </Box>
  )
}
