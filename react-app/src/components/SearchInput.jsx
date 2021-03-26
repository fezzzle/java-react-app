import React from 'react'
import { Container, Row, Col, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

const SearchInput = () => {
  return (
    <Container>
      <Row >
        <Col xl={{size: 6, offset: 3}}>
          <InputGroup>
            <Input />
            <InputGroupAddon addonType="prepend"><Button>Search</Button></InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchInput