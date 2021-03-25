import React from 'react'
import { ListGroup, ListGroupItem, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap'

const EmployeeList = () => (
  <ListGroup>
    <ListGroupItem id="toggler">
        Employee:  Active: 
    </ListGroupItem>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          <Button>Edit info</Button>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </ListGroup>
)

export default EmployeeList