import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import {FaArrowLeft} from 'react-icons/fa'
import {IoCloseSharp} from 'react-icons/io5'
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import signup from '../Images/signup.jpg'

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
            <div className="mobile-poster mt-4 mx-4 d-flex d-lg-none justify-content-between  ">
                <h4><FaArrowLeft/></h4>
                <button className='join-btn' onClick={signInhandleShow}>Join Group</button>
            </div>
            <Modal show={show}  size="xl" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose} className="mobile-modalbody mt-4 modalbody mx-0" >
                   
               
                <Modal.Body >
                    <div className=" sign-up d-flex pt-3  justify-content-between align-items-center ">
                        <h5>Create Account</h5>
                        <button className="close" onClick={handleClose}>
                         <IoCloseSharp />
                        </button>
                        
                    </div>
                    <div className="signup-form mobile-signup-form d-flex justify-content-between align-content-center">
                        <div>
                            <div className=" d-flex">   
                                <input className="name" type="text" placeholder="First Name" />
                                <input className="name name2" type="text" placeholder="Last Name" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" /><br/>
                                <input type="password" placeholder="Password" /><br />
                                <input type="text" placeholder="Confirm Password" />
                            </div>
                            <div className="mobile-signup-link  justify-content-between  align-items-center py-3">
                            <button className="mobile-signup-btn">Create Account</button>
                            <p  onClick={signInhandleShow}> or,Sign In </p>
                            </div>
                            <button className='facebooksingup-btn'><span><BsFacebook /></span> Sign up with Facebook</button>
                            <button className='googlesingup-btn'><span><FcGoogle /></span> Sign up with Google</button>
                            <p className="mobile-terms text-center mt-3">By signing up, you agree to our Terms & conditions, Privacy policy</p>

                        </div>
                        <div>
                            <img src={signup} alt="" />
                        </div>
                    </div>
                </Modal.Body>
                
                </Modal>

                <Modal show={signInshow}  size="xl" aria-labelledby="contained-modal-title-vcenter" centered onHide={signInhandleClose} className="mobile-modalbody mt-0 modalbody mx-0" >
                   
               
                   <Modal.Body >
                       <div className=" sign-up d-flex pt-4 pb-4  justify-content-between align-items-center ">
                           <h5>Welcome back</h5>
                           <button className="close" onClick={signInhandleClose}>
                            <IoCloseSharp />
                           </button>
                           
                       </div>
                       <div className="signup-form mobile-signup-form d-flex justify-content-between align-content-center">
                           <div>
                               <div>
                                   <input type="email" placeholder="Email" /><br/>
                                   <input type="password" placeholder="Password" /><br />
                               </div>
                               <div className="mobile-signup-link justify-content-between  align-items-center pt-5 pb-4" >
                               <button className="mobile-signup-btn">Sign In</button>
                               <p  onClick={handleShow}> or ,  Create Account </p>
                               </div>
                               <button className='facebooksingup-btn mb-3'><span><BsFacebook /></span> Sign up with Facebook</button>
                               <button className='googlesingup-btn'><span><FcGoogle /></span> Sign up with Google</button>
                               <p className="mobile-terms text-center mt-3 pb-5">Forgot Password</p>
   
                           </div>
                           <div>
                               <img src={signup} alt="" />
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
