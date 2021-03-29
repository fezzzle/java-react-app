import propTypes from 'prop-types'
import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'

// eslint-disable-next-line react/prop-types
const EditEmployee = ({ employee, onSubmit }) => {
  const [firstname, setFirstname] = useState(employee.firstname)
  const [lastname, setLastname] = useState(employee.lastname)
  const [email, setEmail] = useState(employee.email)
  const [telephone, setTelephone] = useState(employee.telephone)
  const [date, setDate] = useState(employee.hireDate)
  const [checked, setChecked] = useState(employee.active)
  
  return (
    <Container>
      <Form onSubmit={(e) => onSubmit(e, checked)}>
        <h1>Edit Employee Data</h1>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="firstname">firstname</Label>
              <Input 
                type="text" 
                name="firstname" 
                id="firstname" 
                value={`${firstname}`} 
                onChange={() => setFirstname(document.getElementById('firstname').value)} 
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastname">lastname</Label>
              <Input 
                type="text" 
                name="lastname" 
                id="lastname" 
                value={`${lastname}`} onChange={() => setLastname(document.getElementById('lastname').value)} 
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input 
            type="email" 
            name="email" 
            id="exampleEmail" 
            value={`${email}`} onChange={() => setEmail(document.getElementById('email').value)} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="telephone">Telephone</Label>
          <Input 
            type="text" 
            name="telephone" 
            id="telephone" 
            value={`${telephone}`} onChange={() => setTelephone(document.getElementById('telephone').value)}
          />
        </FormGroup>
        <Row form>
          <FormGroup>
            <Label for="exampleDate">Date hired</Label>
            <Input
              type="date"
              name="date"
              id="hireDate"
              value={`${date}`} onChange={() => setDate(document.getElementById('hireDate').value)}
              required
            />
          </FormGroup>
        </Row>
        <FormGroup check>
          <Label check>
            {/* {employee.active ? (<Input type="checkbox" checked/>) : (<Input type="checkbox" />)} */}
            <Input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
          employed?
          </Label>
        </FormGroup>
        <Button>Save Employ Info</Button>
      </Form>
    </Container>
  )
}


EditEmployee.propTypes = {
  employee: propTypes.object.isRequired
}

export default EditEmployee
