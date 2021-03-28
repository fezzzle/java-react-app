import propTypes from 'prop-types'
import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'

// const EditEmployee = ({ employee }) => {
const EditEmployee = () => {
  return (
    <Form>
      <h1>Edit Employee Data</h1>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="firstname">firstname</Label>
            <Input type="text" name="firstname" id="firstname" placeholder="firstname" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastname">lastname</Label>
            <Input type="text" name="lastname" id="lastname" placeholder="EmployeeLastname" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="telephone">Telephone</Label>
        <Input type="text" name="telephone" id="telephone" placeholder="+37253000232"/>
      </FormGroup>
      <Row form>
        <FormGroup>
          <Label for="exampleDate">Date hired</Label>
          <Input
            type="date"
            name="date"
            id="hireDate"
            placeholder="date placeholder"
            required
          />
        </FormGroup>
      </Row>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />
          employed?
        </Label>
      </FormGroup>
      <Button>Save Employ Info</Button>
    </Form>
  )
}

EditEmployee.propTypes = {
  employee: propTypes.object.isRequired
}

export default EditEmployee
