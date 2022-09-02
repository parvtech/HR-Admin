import React from 'react'
import Form from 'react-bootstrap/Form';

const WebContents = () => {
  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <div className='container-fluid' >
        <div className='mb-5'>
          <div className='row '>
            <div className='col h1bold  pt-4'><h2>Web Contents </h2></div>
          </div>
          <div className='b3medium '><h4 >Dashboard<span className='text-muted'> / Web Contents </span></h4>
          </div>
        </div>
        <div className='mt-5'>
          <Form.Select aria-label="Default select example">
            <option>Header Logo<img /></option>

          </Form.Select>
        </div>
      </div>
    </div >
  )
}

export default WebContents