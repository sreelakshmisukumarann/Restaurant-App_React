import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'

function Home() {

  const allRes = useSelector((state)=>state.restaurantSlice.allRestaurant)
  console.log(allRes);

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRestaurant())
  },[])
  return (
   <Row>
    {allRes?.length>0?
      allRes.map((restaurant)=>(
        <Col className='px-5 py-3' sm={6} md={4}>
        <RestCard items={restaurant}/>
        
    </Col>
      ))
    : <p className='text-danger fw-bolder'>No restaurant available</p>}
   </Row>
  )
}

export default Home