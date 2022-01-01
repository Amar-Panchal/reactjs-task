import React from 'react';
import {GoLocation} from 'react-icons/go'
import {RiPencilFill,RiCalendarEventFill} from 'react-icons/ri'
import {BiInfoCircle , BiShoppingBag,BiLike} from 'react-icons/bi';
import {BsThreeDots,BsShareFill ,BsEye} from 'react-icons/bs'
import userimg1 from '../Images/userimg1.jpg'
import userimg2 from '../Images/userimg2.jpg'
import userimg3 from '../Images/userimg3.jpg'
import userimg4 from '../Images/userimg4.jpg'
import first from '../Images/first-blog.jpg'
import second from '../Images/second-blog.jpg'
import third from '../Images/third-blog.jpg'
import grouppic1 from '../Images/grouppic1.jpg'
import grouppic2 from '../Images/grouppic2.jpg'
import grouppic3 from '../Images/grouppic3.jpg'
import grouppic4 from '../Images/grouppic4.jpg'

function Blog() {
    
    return (
        <>
        <div className=" Blog container d-flex justify-content-between">
            <div className="row1">
                <div className="Card1">
                    <img src={first} alt=""/>
                    <h5><span>✍️</span>Article</h5>
                    <div className="d-flex align-items-start justify-content-between">
                    <h4>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                    <div class="btn-group">
                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                    <BsThreeDots/>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button class="dropdown-item" type="button">Edit</button></li>
                        <li><button class="dropdown-item" type="button">Report</button></li>
                        <li><button class="dropdown-item" type="button">Option 3</button></li>
                    </ul>
                    </div>
                    </div>
                    <p className="desc">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className="blog-user d-flex align-content-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-between">
                            <img src={userimg1} alt="bloguser"/>
                            <h5>Sarthak Kamra</h5>
                        </div>
                        <div className="  d-flex align-items-center justify-content-between">
                            <span className="eye-icon "><BsEye /></span>
                            <h6 >1.4k views</h6>
                            <span className="share-icon"><BsShareFill/></span>
                        </div>
                    </div>
                </div>

                <div className="Card1">
                    <img src={second} alt=""/>
                    <h5><span>🔬</span>Education</h5>
                    <div className="d-flex align-items-start justify-content-between">
                    <h4>Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
                    <div class="btn-group">
                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                    <BsThreeDots/>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button class="dropdown-item" type="button">Edit</button></li>
                        <li><button class="dropdown-item" type="button">Report</button></li>
                        <li><button class="dropdown-item" type="button">Option 3</button></li>
                    </ul>
                    </div>
                    </div>
                    <p className="desc">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className="blog-user d-flex align-content-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-between">
                            <img src={userimg2} alt="bloguser"/>
                            <h5>Sarah West</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="eye-icon "><BsEye /></span>
                            <h6 className="">1.4k views</h6>
                            <span className="share-icon"><BsShareFill/></span>
                        </div>
                    </div>
                </div>

              <div className="Card1 cardnum3">
                    <img src={third} alt=""/>
                    <h5><span>📅</span>Meetup</h5>
                    <div className="d-flex align-items-start justify-content-between">
                    <h4>Finance & Investment Elite Social Mixer @Lujiazui</h4>
                    <div class="btn-group">
                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                    <BsThreeDots/>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button class="dropdown-item" type="button">Edit</button></li>
                        <li><button class="dropdown-item" type="button">Report</button></li>
                        <li><button class="dropdown-item" type="button">Option 3</button></li>
                    </ul>
                    </div>
                    </div>
                    <div className=" d-flex">
                        <h6 className="card-date"><RiCalendarEventFill/> Fri, 12 Oct, 2018</h6>
                        <h6><GoLocation/> Ahmedabad, India</h6>
                    </div>
                    <button className="vist-btn ">Visit Website</button>
                    <div className="blog-user d-flex align-content-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-between">
                            <img src={userimg3} alt="bloguser"/>
                            <h5>Ronal Jones</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="eye-icon"><BsEye /></span>
                            <h6>1.4k views</h6>
                            <span className="share-icon"><BsShareFill/></span>
                        </div>
                    </div>
                </div>
                

                <div className="Card1 cardnum4">
                    <h5><span>👜</span>Job</h5>
                    <div className="d-flex align-items-start justify-content-between">
                    <h4>Software Developer</h4>
                    <div class="btn-group">
                    <button className="icon" data-bs-toggle="dropdown" aria-expanded="false">
                    <BsThreeDots/>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button class="dropdown-item" type="button">Edit</button></li>
                        <li><button class="dropdown-item" type="button">Report</button></li>
                        <li><button class="dropdown-item" type="button">Option 3</button></li>
                    </ul>
                    </div>
                    </div>
                    <div className=" d-flex">
                        <h6 className="card-job"><BiShoppingBag/> Innovaccer Analytics Private Ltd.</h6>
                        <h6><GoLocation/> Noida, India</h6>
                    </div>
                    <button className="apply-btn">Apply on Timesjobs </button>
                    <div className="blog-user d-flex align-content-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-between">
                            <img src={userimg4} alt="bloguser"/>
                            <h5>Joseph Gray</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="eye-icon"><BsEye /></span>
                            <h6>1.4k views</h6>
                            <span className="share-icon"><BsShareFill/></span>
                        </div>
                    </div>
                </div> 

            </div>
            <div className="row2">
                <h5>
                    <span className="location-icon"><GoLocation/></span> Noida, India <span className="pencil-icon"><RiPencilFill /></span>
                </h5>
                <div className="d-flex">
                <p className="icon"><BiInfoCircle/></p>
                <p >
                Your location will help us serve better <br /> and extend a personalised experience.
                </p>
                </div>
                <div className="groupsName">
                <h4><span><BiLike/></span>RECOMMENDED GROUPS</h4>
                    <div className=" group d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                        <img src={grouppic1} alt="" />
                        <h6>Leisure</h6>
                        </div>
                        <button className="followed" >Followed</button>
                    </div>
                    <div className=" group d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                        <img src={grouppic2} alt="" />
                        <h6>Activism</h6>
                        </div>
                        <button className="follow" >Follow</button>
                    </div>
                    <div className=" group d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                        <img src={grouppic3} alt="" />
                        <h6>MBA</h6>
                        </div>
                        <button className="follow">Follow</button>   
                 </div>
                    <div className=" group d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                        <img src={grouppic4} alt="" />
                        <h6>Philosophy</h6>
                        </div>
                        <button className="follow"  >Follow</button>
                    </div>
                    <p className="read-more">See More...</p>
                </div>
            </div>
        </div>  
        
        </>
    )
}

export default Blog
