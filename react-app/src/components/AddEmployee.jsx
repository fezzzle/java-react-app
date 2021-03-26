import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const AddEmployee = () => {
  return (
    <Form>
      <FormGroup>
        {/* <Label for="firstname">Employees first name</Label> */}
        <Input name="firstname" id="firstname" placeholder="First name" />
      </FormGroup>
      <FormGroup>
        {/* <Label for="lastname">Employees last name</Label> */}
        <Input name="lastname" id="lastname" placeholder="Last name" />
      </FormGroup>
      <FormGroup>
        {/* <Label for="examplePassword">Password</Label> */}
        <Input type="email" name="email" id="email" placeholder="example@email.com" />
      </FormGroup>
      <FormGroup>
        {/* <Label for="examplePassword">Password</Label> */}
        <Input type="phone" name="phone" id="phone" placeholder="+372530000" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Date hired</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />
          Still employed?
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default AddEmployee