import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({items}) {
  return (
    <Link to={`/restaurant-view/${items.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '100%' }}>
          <Card.Img height={'350px'} variant="top" src={items.photograph} />
          <Card.Body>
            <Card.Title className='text-center text-warning'>{items.name}</Card.Title>
            <hr/>
            <Row className='p-4'>
                <Col className='ms-4'>
                    <Card.Text>
                     {items.neighborhood}
                    </Card.Text>
                </Col>
                
                <Col className='ms-4'>
                    <Card.Text>
                    {items.cuisine_type}
                   </Card.Text>
                </Col>
            </Row>
             
          </Card.Body>
        </Card>
    </Link>
  )
}

export default RestCard