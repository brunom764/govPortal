
import Result from '@/components/Results'
import CalculatorForm, { FormValues} from '@/components/calculatorForm'
import { Box, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'


export default function Home() {
  const [dataInfo, setDataInfo] = useState<FormValues | null>(null)
  const onSubmitSuccessfully = (data: FormValues) => {
    setDataInfo(data);
  }

  return (
    <Box minH="100vh" backgroundColor="#053B50" p={8}>
      <Heading fontSize="5rem" color="#64CCC5" className='text-center' fontFamily="sans-serif">
        govPortal
      </Heading>
      <CalculatorForm onSubmitSuccessfully={onSubmitSuccessfully} />
      {dataInfo && <Result data={dataInfo} />}
    </Box>
  )
}
