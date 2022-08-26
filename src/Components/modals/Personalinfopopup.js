import React from 'react'
import { Modal } from 'react-bootstrap'
import './Personalinfopopup.css'

function Personalinfopopup({ closeModal }) {
    return (
        <>
        <div className='mt-5 pt-5'>
            <Modal className='pt-5 mt-5' style={{paddingTop: '30px'}} show={true} >
               <Modal.Header>Header</Modal.Header>
               <Modal.Body>Hello there 🙋‍♂️
                    <div>
                    <form>
                    <div className='mb-2'>
                    <input required={true} name="name" type="text" className="form-control" placeholder='Name'/>
                </div>
                <div className='mb-2'>
                    <input required={true} name="photo" type="text" className="form-control" placeholder='Photo URL'/>
                </div>
                <div className='mb-2'>
                    <input required={true} name="mobile"  type="number" className="form-control" placeholder='Mobile Number'/>
                </div>
                <div className='mb-2'>
                    <input required={true} name="email" type="email" className="form-control" placeholder='Email'/>
                </div>
                <div className='mb-2'>
                    <input required={true} name="company" type="text" className="form-control" placeholder='Company'/>
                </div>

                </form>
                    </div>
               </Modal.Body>
               <Modal.Footer>
                   <button onClick={() => closeModal(false)} className='btn btn-primary'>Cancel</button>
               </Modal.Footer>
            </Modal>
          </div>
        </>
    )
}

export default Personalinfopopup