import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import './Personalinfopopup.css'

function Personalinfopopup({ closeModal, data}) {

    let [update, setUpdate] =useState({
        personalInfo : {
            uan: '',
            tel: '',
            natioanlity : '',
        }
    })

    useEffect(() => {
        async function myData(){
            let response = await data;
            console.log(response)
        }
        myData();
    })

    let updateInput = (event) => {
        setUpdate({
            [event.target.name] : event.target.value
        })
    }
    let submitForm = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }

    return (
        <>
        <div className='mt-5 pt-5'>
        <Modal className='pt-5 mt-5' style={{paddingTop: '30px'}} show={true} >
        <Modal.Header>Header</Modal.Header>
        <Modal.Body>Hello there 🙋‍♂️
        <pre>{JSON.stringify(data)}</pre>
                    <div>
                    <form onSubmit={submitForm}>
                    <div className='mb-2'>
                    <input required={true} name="uan" onChange={updateInput} value={data.uan} type="text" className="form-control" placeholder='UAN'/>
                </div>
                <div className='mb-2'>
                    <input required={true} name="tel" onChange={updateInput} value={data.tel} type="text" className="form-control" placeholder='Telephone'/>
                </div>
                 <div className='mb-2'>
                    <input required={true} name="natioanlity" onChange={updateInput} value={data.natioanlity} type="text" className="form-control" placeholder='Nationality'/>
                </div>
                <div className='mb-2'>
                   <button type='submit' className='btn btn-success'>Submit</button>  
                </div>
                <div className='mb-2'>
                   <button onClick={() => closeModal(false)} className='btn btn-primary'>Cancel</button>  
                </div>

                </form>
                    </div>
               </Modal.Body>
               <Modal.Footer>
               </Modal.Footer>
            </Modal>
          </div>
        </>
    )
}

export default Personalinfopopup