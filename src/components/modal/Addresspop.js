import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { MdCancel } from "react-icons/md"
const Addresspop = ({ closeModal }) => {
    
    return (
        <>
        <Modal show={true}>
            <Modal.Body>
                <h1>Address popup</h1>
                <button onClick={() => closeModal(false)}>Cancel</button>
            </Modal.Body>
        </Modal>
    </>
    );
}

export default Addresspop