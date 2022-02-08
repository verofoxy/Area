import { Input , Text} from '@chakra-ui/react'
import React from 'react';

export default function Inputt() {
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)
  
    return (
      <>
        <Text mb='8px'>Value: {value}</Text>
        <Input
          value={value}
          onChange={handleChange}
          placeholder='Here is a sample placeholder'
          size='sm'
        />
      </>
    )
  }