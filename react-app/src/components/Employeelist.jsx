import PropTypes from 'prop-types'
import React from 'react'
import { ListGroup, ListGroupItem, UncontrolledCollapse, Button, CardBody, Card, Container, Row, Col, NavLink  } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'

const EmployeeList = ({ employees }) => {
  return (
    <ListGroup>
      {employees.map((employee, index) => (
        <div key={employee.id}>
          <ListGroupItem id={`listToggler-${index}`}>
              Employee: {employee.firstname} Active: {employee.active}
          </ListGroupItem>
          <UncontrolledCollapse toggler={`listToggler-${index}`}>
            <Card>
              <CardBody>
                <Container>
                  <Row>
                      Employee: {employee.firstname} {employee.lastname}
                  </Row>
                  <Row>
                      Telephone: {employee.telephone}
                  </Row>
                  <Row>
                      Email: {employee.email}
                  </Row>
                  <Row>
                      Hired on: {employee.hireDate}
                  </Row>
                  <Row>
                      Active: {employee.active ? 'Active' : 'Not Active'}
                  </Row>
                  <Row>
                    <Col lg={{ size: 12, offset: 5}}>
                      <NavLink tag={RRNavLink} to="/editemployee" exact>
                        <Button>Edit info</Button>
                      </NavLink>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      ))}
    </ListGroup>)
}

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
}

export default EmployeeList