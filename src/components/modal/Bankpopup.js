import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { MdCancel } from "react-icons/md"
const Bankpopup = ({ closeModal }) => {
    
    return (
        <>
        <Modal show={true}>
            <Modal.Body>
                <h1>Bankpopup popup</h1>
                <button className='btn btn-danger' onClick={() => closeModal(false)}>Cancel</button>
            </Modal.Body>
        </Modal>
    </>
    );
}

export default Bankpopup