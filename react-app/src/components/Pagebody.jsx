import React from 'react'
import { SearchInput } from '.'
import { EmployeeListContainer } from '../containers'
import { Container, Row, Col } from 'reactstrap'

const Body = () => {
  return (
    <Container>
      <Row >
        <Col xl={{size: 6, offset: 3}}>
          <SearchInput />
        </Col>
      </Row>
      <EmployeeListContainer />
    </Container>
  )
}

export default Body