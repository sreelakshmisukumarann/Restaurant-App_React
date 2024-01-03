import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {

  const dispatch = useDispatch()
  return (
    <Navbar className="bg-body-dark" style={{color:'white'}}>
        <Container className='mt-3'>
          <Navbar.Brand href="#home" className='d-flex'>
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/004/609/419/non_2x/trendy-steaks-concepts-vector.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          <h5 className='ms-4'><span className='text-warning'>Food</span> Circle </h5>         
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by neighbourhood"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>dispatch(search(e.target.value))}
            />
            {/* <input type='text' className='form-control w-25' placeholder='search by neighbourhood'/><i class="fa-solid fa-magnifying-glass"></i> */}
            {/* <Button className='btn' variant="outline-warning">Search</Button> */}
          </Form>
        </Container>
      </Navbar>
  )
}

export default Header