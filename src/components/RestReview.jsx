import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function RestReview({restreview}) {
    const [open, setOpen] = useState(false);
  return (
    <>
        <button onClick={() => setOpen(!open)} className='btn btn-warning'>Click here to see Review</button>

        <Collapse in={open}>
            <div id="example-collapse-text">
                <div className='my-2'>
                    <hr/>
                    {restreview?.length>0?
                    restreview.map((item)=>(<div className='mt-5'>
                    <h4>Name and date : {item.name} {item.date}</h4>
                    <h4>Rating :{item.rating}</h4>
                    <p>Description :{item.comments}</p>
                </div>))
                    :<p>nothing</p>}
                </div>
            </div>
        </Collapse>
    </>
  )
}

export default RestReview