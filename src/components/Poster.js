import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import {FaArrowLeft} from 'react-icons/fa'
import {IoCloseSharp} from 'react-icons/io5'
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
function Poster() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [signInshow, setsignInShow] = useState(false);
    const signInhandleClose = () => setsignInShow(false);
    const signInhandleShow = () => setsignInShow(true);
    return (
        <>
        <div className="poster">
            <div className="mobile-poster mt-4 mx-4 d-flex justify-content-between  d-lg-none">
                <h4><FaArrowLeft/></h4>
                <button className='join-btn' onClick={handleShow}>Join Group</button>
            </div>
            <Modal show={show}  size="lg"  onHide={handleClose} className="mobile-modalbody  modalbody d-sm-block d-md-block d-lg-none" >
                   
               
                <Modal.Body >
                    <div className=" sign-up d-flex   justify-content-between align-items-center ">
                        <h5>Create Account</h5>
                        <button className="close" onClick={handleClose}>
                         <IoCloseSharp />
                        </button>
                        
                    </div>
                    <div className="signup-form d-flex justify-content-between align-content-center">
                        <div>
                            <div className=" d-inline-flex">   
                                <input className="name" type="text" placeholder="First Name" />
                                <input className="name name2" type="text" placeholder="Last Name" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" /><br/>
                                <input type="password" placeholder="Password" /><br />
                                <input type="text" placeholder="Confirm Password" />
                            </div>
                            <div className="d-flex justify-content-between  align-items-center">
                            <button className="mobile-signup-btn">Create Account</button>
                            <p ><span onClick={signInhandleShow}> or,Sign In </span></p>
                            </div>
                            <button className='facebooksingup-btn'><span><BsFacebook /></span> Sign up with Facebook</button>
                            <button className='googlesingup-btn'><span><FcGoogle /></span> Sign up with Google</button>
                            <p className="mobile-terms text-center mx-4">By signing up, you agree to our Terms & conditions, Privacy policy</p>

                        </div>
                    </div>
                </Modal.Body>
                
                </Modal>


               
            <h2>Computer Engineering</h2>
            <p>142,765 Computer Engineers follow this</p>
        
        </div>
        </>
    )
}

export default Poster
