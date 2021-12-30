import { Modal } from 'react-bootstrap';
import React,{useState} from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import index from '../Images/index.png';
import {MdGroupAdd} from 'react-icons/md';
import {BsFacebook} from 'react-icons/bs'
import signup from '../Images/signup.jpg'
import {FcGoogle} from 'react-icons/fc'
import {IoCloseSharp,IoTriangleSharp} from 'react-icons/io5'
import {FaSquareFull,FaCircle}  from 'react-icons/fa';
function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [signInshow, setsignInShow] = useState(false);
    const signInhandleClose = () => setsignInShow(false);
    const signInhandleShow = () => setsignInShow(true);
    return (
        <>
        <div className="Navbar d-lg-flex ds d-md-none d-sm-none">
        <div className="row1">
            <h3>
                <span>ATG.</span>W<img src={index} alt=""/>RLD
            </h3>
        </div>
        <div className="row2">
        <input type="text" placeholder="🔍   Search for your favourite groups in ATG"/>
        </div>
        <div className="row3">
            <h3>
                Create account.<span onClick={handleShow}> It's free!</span><IoMdArrowDropdown/>
            </h3>
        </div>
        <Modal show={show}  size="lg"  onHide={handleClose} className="modalbody d-sm-none d-md-block d-lg-block" >
                    <button className="close-btn" onClick={handleClose}>
                    <IoCloseSharp />
                    </button>
                <Modal.Header >
                
                <Modal.Title className="modaltitle ">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=" sign-up d-lg-flex  d-md-block justify-content-between align-items-center ">
                        <h5>Create Account</h5>
                        <p>Already have an account?<span  onClick={signInhandleShow}> Sign In </span></p>
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
                            <button className="signup-btn">Create Account</button>
                            <button className='facebooksingup-btn'><span><BsFacebook /></span> Sign up with Facebook</button>
                            <button className='googlesingup-btn'><span><FcGoogle /></span> Sign up with Google</button>

                        </div>
                        <div>
                            <img src={signup} alt="" />
                            <p className="terms">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </Modal.Body>
                
                </Modal>


                <Modal show={signInshow}  size="lg" onHide={signInhandleClose} className="modalbody  d-sm-none  d-md-block d-lg-block" >
                    <button className="close-btn" onClick={signInhandleClose}>
                    <IoCloseSharp />
                    </button>
                <Modal.Header >
                
                <Modal.Title className="modaltitle">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=" sign-up d-lg-flex d-md-block ml-3 justify-content-between align-items-center ">
                        <h5>Sign In</h5>
                        <p>Don’t have an account yet?<span  onClick={handleShow}> Create new for free!</span></p>
                    </div>
                    <div className="signup-form d-flex justify-content-between align-content-center">
                        <div>
                        <input  type="email" placeholder="Email" />
                        <input  type="password" placeholder="Password" />  
                        <button className="signup-btn">Sign In</button>
                        <button className='facebooksingup-btn'><span><BsFacebook /></span> Sign In with Facebook</button>
                        <button className='googlesingup-btn'><span><FcGoogle /></span> Sign In with Google</button>
                        <h6 className="forgot-password text-center">Forgot Password?</h6>
                        </div>
                        <div>
                            <img src={signup} alt="" />
                        </div>
                    </div>
                </Modal.Body>
                
                </Modal>

        </div>  
        <div className="mobile-navbar d-lg-none ">
            
            <p><FaSquareFull/><span><FaCircle/></span><span><IoTriangleSharp/></span></p>
            
        </div>
        </>
    )
}

export default Navbar
