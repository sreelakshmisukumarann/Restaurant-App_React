import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {

  const {id} = useParams()
  console.log(id);

  const restaurant = useSelector((state)=>state.restaurantSlice.allRestaurant)
  console.log(restaurant);

  const seletedRestaurant = restaurant.find(item=> item.id == id)
  console.log(seletedRestaurant);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       
         <Row className='mt-5 mb-5'>
            <Col md={1}></Col>
            <Col md={3}>
                <img width={'100%'} src={seletedRestaurant.photograph} alt="" />
            </Col>
            <Col md={7} className='px-5'>
                <hr/>
                <h4 className='text-center'><span className='text-warning'>Restaurant</span> Details</h4>
                <hr/>

                <ListGroup>
                            <ListGroup.Item><h4 className='text-center p-4'>{seletedRestaurant.name}</h4></ListGroup.Item>
                            <ListGroup.Item><p>Neighbourhood: {seletedRestaurant.neighborhood}</p></ListGroup.Item>
                            <ListGroup.Item><p>Cuisie-type: {seletedRestaurant.cuisine_type}</p></ListGroup.Item>
                            <ListGroup.Item><p>Address: {seletedRestaurant.address}</p></ListGroup.Item>
                            <ListGroup.Item className='text-center p-3 mb-2'>
                               
                                  <Button onClick={handleShow} className='btn btn-warning me-4'>Operating hours</Button>
                                  <Modal
                                  show={show}
                                  onHide={handleClose}
                                  backdrop="static"
                                  keyboard={false}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                        <ListGroup>
                                          <ListGroup.Item>Monday : {seletedRestaurant.operating_hours.Monday}</ListGroup.Item>
                                          <ListGroup.Item>Tuesday : {seletedRestaurant.operating_hours.Tuesday}</ListGroup.Item>
                                          <ListGroup.Item>Wednesday : {seletedRestaurant.operating_hours.Wednesday}</ListGroup.Item>
                                          <ListGroup.Item>Thursday : {seletedRestaurant.operating_hours.Thursday}</ListGroup.Item>
                                          <ListGroup.Item>Friday : {seletedRestaurant.operating_hours.Friday}</ListGroup.Item>
                                          <ListGroup.Item>Saterday : {seletedRestaurant.operating_hours.Saturday}</ListGroup.Item>
                                          <ListGroup.Item>Sunday : {seletedRestaurant.operating_hours.Sunday}</ListGroup.Item>
                                
                                      </ListGroup>
                                  </Modal.Body> 
                                  
                                        </Modal>
                              <RestReview restreview={seletedRestaurant.reviews}/>
                                              
                                      </ListGroup.Item>
                                  </ListGroup>
                <hr/>
            </Col>
            <Col md={1}></Col>
         </Row>
    </>
   
  )
}

export default RestView