/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React from 'react'
import { ListGroup, ListGroupItem, UncontrolledCollapse, Button, CardBody, Card, Container, Row, Col, NavLink  } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faPhone, faSquare, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

const EmployeeList = ({ employees, deleteRecords }) => {
  return (
    <div>
      <Container>
        <ListGroup>
          {employees && employees.map((employee, index) => (
            <div key={employee.id}>
              <ListGroupItem id={`listToggler-${index}`}>
                <Row>
                  <Col>
                    <span className="fa-layers fa-2x">
                      <FontAwesomeIcon icon={faSquare} color="green"/>
                      <FontAwesomeIcon icon={faUser} inverse transform="shrink-6"/>
                    </span>
                    {employee.firstname} {employee.lastname}
                  </Col>
                Is employee still active? 
                  <Col>
                    {
                      employee.active 
                        ? 
                        <span className="fa-layers fa-2x">
                          <FontAwesomeIcon icon={faSquare} color="green"/>
                          <FontAwesomeIcon icon={faCheck} inverse transform="shrink-6"/>
                        </span>
                        : 
                        <span className="fa-layers fa-2x">
                          <FontAwesomeIcon icon={faSquare} color="red"/>
                          <FontAwesomeIcon icon={faTimes} inverse transform="shrink-6"/>
                        </span>
                    }
                  </Col>
                </Row>
              </ListGroupItem>
              <UncontrolledCollapse toggler={`listToggler-${index}`}>
                <Card>
                  <CardBody>
                    <Container>
                      <Row>
                        <span className="fa-layers fa-2x">
                          <FontAwesomeIcon icon={faSquare} color="green"/>
                          <FontAwesomeIcon icon={faUser} inverse transform="shrink-6"/>
                        </span>
                        &nbsp;
                        {employee.firstname} {employee.lastname}
                      </Row>
                      <Row>
                        <span className="fa-layers fa-2x">
                          <FontAwesomeIcon icon={faSquare} color="green"/>
                          <FontAwesomeIcon icon={faPhone} inverse transform="shrink-6"/>
                        </span>
                        &nbsp;
                        {employee.telephone}
                      </Row>
                      <Row>
                        <span className="fa-layers fa-2x">
                          <FontAwesomeIcon icon={faSquare} color="green"/>
                          <FontAwesomeIcon icon={faEnvelope} inverse transform="shrink-6"/>
                        </span>
                        &nbsp;
                        {employee.email}
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
    </div>
  )
}

EmployeeList.propTypes = {
  // employees: PropTypes.array.isRequired,
  // employees: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteRecords: PropTypes.func.isRequired
}

export default EmployeeList