/* eslint react/prop-types: 0 */
import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const AddEmployee = (props) => {
  console.log('PROPS ARE: ', props)
  return (
    <Form onSubmit={props.onSubmit}>
      <FormGroup>
        {/* <Label for="firstname">Employees first name</Label> */}
        <Input name="firstname" id="firstname" placeholder="First name" required/>
      </FormGroup>
      <FormGroup>
        {/* <Label for="lastname">Employees last name</Label> */}
        <Input name="lastname" id="lastname" placeholder="Last name" required/>
      </FormGroup>
      <FormGroup>
        {/* <Label for="examplePassword">Password</Label> */}
        <Input type="email" name="email" id="email" placeholder="example@email.com" required/>
      </FormGroup>
      <FormGroup>
        <Input name="phone" id="telephone" placeholder="+372530000" required/>
      </FormGroup>
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
      <Button>Submit</Button>
    </Form>
  )
}

export default AddEmployee