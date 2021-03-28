import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

const AddEmployee = (props) => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <h4>Add another?</h4>
          <Button onClick={() => setSubmitted(!submitted)}>Add</Button>
        </div>) : (
        <Form onSubmit={(e) => {props.onSubmit(e); setSubmitted(!submitted)}} >
          <FormGroup>
            <Input name="firstname" id="firstname" placeholder="First name" required/>
          </FormGroup>
          <FormGroup>
            <Input name="lastname" id="lastname" placeholder="Last name" required/>
          </FormGroup>
          <FormGroup>
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
      )}
    </>
  )
}

AddEmployee.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default AddEmployee