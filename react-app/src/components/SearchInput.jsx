import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

const SearchInput = () => {
  return (
    <InputGroup>
      <Input />
      <InputGroupAddon addonType="prepend"><Button>Search</Button></InputGroupAddon>
    </InputGroup>
  )
}

export default SearchInput