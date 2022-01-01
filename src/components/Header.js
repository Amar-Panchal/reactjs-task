import { Modal } from 'react-bootstrap';
import React,{useState} from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import {MdGroupAdd} from 'react-icons/md';
import {BsFacebook} from 'react-icons/bs'
import signup from '../Images/signup.jpg'
import {FcGoogle} from 'react-icons/fc'
import {IoCloseSharp} from 'react-icons/io5'
import {GoTriangleDown} from 'react-icons/go'
import { Link } from 'react-router-dom';
function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [signInshow, setsignInShow] = useState(false);
    const signInhandleClose = () => setsignInShow(false);
    const signInhandleShow = () => setsignInShow(true);
    return (
        <>
        <div className="Header container d-lg-flex d-md-flex justify-content-between align-items-center d-sm-none">
            <div className=" row1 d-flex justify-content-evenly">
                <Link to="/" className="active">All Posts(32)</Link>
                <Link to="#">Article</Link>
                <Link to="#">Event</Link>
                <Link to="#">Education</Link>
                <Link to="#">Job</Link>
            </div>
            <div className="row2">
                <div >
                <button className="post-btn">Write a Post<span> <IoMdArrowDropdown /></span> </button>
                <button className="join-btn" onClick={handleShow}><span><MdGroupAdd /></span> Join Group</button>
                </div>

            </div>
            
            <Modal show={show}  size="xl" aria-labelledby="contained-modal-title-vcenter" centered  onHide={handleClose} className="modalbody" >
                    <button className="close-btn" onClick={handleClose}>
                    <IoCloseSharp />
                    </button>
                <Modal.Header >
                
                <Modal.Title className="modaltitle mx-auto">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=" sign-up d-lg-flex  d-md-block justify-content-between align-items-center ">
                        <h5>Create Account</h5>
                        <p>Already have an account?<span  onClick={signInhandleShow}> Sign In </span></p>
                    </div>
                    <div className="signup-form d-flex justify-content-between align-items-center pb-3">
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


                <Modal show={signInshow}  size="xl" aria-labelledby="contained-modal-title-vcenter" centered onHide={signInhandleClose} className="modalbody " >
                    <button className="close-btn" onClick={signInhandleClose}>
                    <IoCloseSharp />
                    </button>
                <Modal.Header >
                
                <Modal.Title className="modaltitle mx-auto">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=" sign-up d-lg-flex d-md-block ml-3 justify-content-between align-items-center ">
                        <h5>Sign In</h5>
                        <p>Don’t have an account yet?<span  onClick={handleShow}> Create new for free!</span></p>
                    </div>
                    <div className="signup-form d-flex justify-content-between align-items-center pb-5">
                        <div>
                            <div>
                                <input type="email" placeholder="Email" /><br/>
                                <input type="password" placeholder="Password" /><br />
                            </div>
                            <button className="signup-btn">Sign In</button>
                            <button className='facebooksingup-btn'><span><BsFacebook /></span> Sign In with Facebook</button>
                            <button className='googlesingup-btn'><span><FcGoogle /></span> Sign In with Google</button>

                        </div>
                        <div>
                            <img src={signup} alt="" />
                        </div>
                    </div>
                </Modal.Body>
                
                </Modal>


        </div>  
        <div className="mobile-header  container mt-4 justify-content-between align-content-center d-lg-none d-md-none">
            <h6>Posts(368)</h6>
            <div className="btn-group">
                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter:All <span><GoTriangleDown/></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button class="dropdown-item" type="button">Article</button></li>
                        <li><button class="dropdown-item" type="button">Event</button></li>
                        <li><button class="dropdown-item" type="button">Eduction</button></li>
                        <li><button class="dropdown-item" type="button">Job</button></li>

                    </ul>
            </div>
        </div>
        </>
    )
}

export default Header
