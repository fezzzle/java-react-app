import React from 'react'
import { ListGroup, ListGroupItem, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap'

const EmployeeList = () => (
  <ListGroup>
    <ListGroupItem id="toggler">
        Employee: Martin P. Active: Yes
    </ListGroupItem>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias.
          <Button>Edit info</Button>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </ListGroup>
)

export default EmployeeList