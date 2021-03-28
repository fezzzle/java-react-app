import PropTypes from 'prop-types'
import React from 'react'
import { ListGroup, ListGroupItem, UncontrolledCollapse, Button, CardBody, Card, Container, Row, Col, NavLink  } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'

const EmployeeList = ({ employees, deleteRecords }) => {
  return (
    <Container>
      <ListGroup>
        {employees && employees.map((employee, index) => (
          <div key={employee.id}>
            <ListGroupItem id={`listToggler-${index}`}>
                Employee: {employee.firstname} {employee.firstname} Active: {employee.active ? 'Active': 'Not Active'}
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
                        <NavLink tag={RRNavLink} to={`editemployee/${employee.id}`} exact>
                          <Button>Edit info</Button>
                        </NavLink>
                      </Col>
                    </Row>
                  </Container>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </div>
        ))
        }     
        <Row>
          <Col lg={{size: 12, offset: 5}} style={{marginTop: '1rem'}}>
            <Button onClick={deleteRecords}>Delete all records</Button>
          </Col>
        </Row>   
      </ListGroup>
    </Container>
  )
}

EmployeeList.propTypes = {
  // employees: PropTypes.array.isRequired,
  employees: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteRecords: PropTypes.func.isRequired
}

export default EmployeeList