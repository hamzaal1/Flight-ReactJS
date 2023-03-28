import React, { useState } from 'react'
import { Nav, Tab } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./scss/_home.scss";
function Home() {
    const [activeTab, setActiveTab] = useState('button1');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }
    return (
        <>
            {/* Hero section Start */}
            <div className='hero-section'>
                <div className="main-container">
                    <div className='row text-white justfiy-content-center align-items-center'>
                        <div className="col-12 col-md-7 hero-desc p-5">
                            <h1 className='mb-4'>Book Your Next Flight with Us Today .</h1>
                            <p>
                                Let us take care of the details while you sit back, relax, and enjoy the journey. Our team of dedicated travel specialists are available 24/7
                            </p>
                        </div>
                        <div className={`col-12 col-md-5 px-0 hero-form pb-3 ${activeTab == 'button2' ? 'short-hero' : ''}`}>
                            <Tab.Container defaultActiveKey={activeTab}>
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="button1" onClick={() => handleTabClick('button1')}>
                                            <i class='bx bxs-plane-alt'></i> <br />
                                            Check Availability
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="button2" onClick={() => handleTabClick('button2')}>
                                            <i class='bx bx-check-circle'></i> <br />
                                            Check in <br /> Flight
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="button1">
                                        <div className='px-4  mt-4'>
                                            <form>
                                                <div class="row mb-3">
                                                    <div class="col-sm-6 col-md-5">
                                                        <div class="form-group">
                                                            <span class="form-label">From</span>
                                                            <input class="form-control text-dark" type="text" required />
                                                        </div>
                                                    </div>
                                                    <i class='bx bxs-plane-alt col-md-2 mt-3'></i>
                                                    <div class="col-sm-6 col-md-5">
                                                        <div class="form-group">
                                                            <span class="form-label">To</span>
                                                            <input class="form-control text-dark" type="text" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-3">
                                                    <div class="col-sm-6 col-md-12">
                                                        <div class="form-group">
                                                            <span class="form-label">Pick Up date</span>
                                                            <input class="form-control text-dark" type="date" required />
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                                <div class="row mb-5">
                                                    <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <span class="form-label">Adults</span>
                                                            <select class="form-control">
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                            </select>
                                                            <span class="select-arrow"></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <span class="form-label">Children</span>
                                                            <select class="form-control">
                                                                <option>0</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                            <span class="select-arrow"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-btn mb-4">
                                                    <button class="submit-btn btn">
                                                        <NavLink to='/flights'>
                                                            Check availability

                                                        </NavLink>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="button2">
                                        <div>
                                            This is the content for Button 2
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div >
                </div >
            </div >
            {/* Hero section end */}


            {/* <!-- About Us Section Begin --> */}
            <section className="about-section py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="about-text">
                                <div className="section-title">
                                    <span>About Us</span>
                                    <h2>Intercontinental LA <br />Westlake Hotel</h2>
                                </div>
                                <p className="f-para">Sona.com is a leading online accommodation site. We’re passionate about
                                    travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41
                                    languages.</p>
                                <p className="s-para">So when it comes to booking the perfect hotel, vacation rental, resort,
                                    apartment, guest house, or tree house, we’ve got you covered.</p>
                                <a href="#" className="primary-btn about-btn">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-pic mt-5 mt-md-0">
                                <img src="/images/about.jpg" alt="" srcset="" />
                                <img className='float-img' src="/images/about-1.jpg" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About Us Section End --> */}



            {/* <!-- Services Section End --> */}
            <section className="services-section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>What We Do</span>
                                <h2>Discover Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className="flaticon-036-parking"></i>
                                <h4>Travel Plan</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className="flaticon-033-dinner"></i>
                                <h4>Catering Service</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className="flaticon-026-bed"></i>
                                <h4>Babysitting</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className="flaticon-024-towel"></i>
                                <h4>Laundry</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className="flaticon-044-clock-1"></i>
                                <h4>Hire Driver</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <i className="flaticon-012-cocktail"></i>
                                <h4>Bar & Drink</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Services Section End --> */}

            {/*  footer start */}
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-text">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="ft-about">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src="images/logo.png" alt="" />
                                        </Link>
                                    </div>
                                    <p className='mt-5'>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                                    <div className="fa-social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-tripadvisor"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="ft-contact">
                                    <h6>Contact Us</h6>
                                    <ul className='p-0'>
                                        <li> 345 67890</li>
                                        <li>info.colorlib@gmail.com</li>
                                        <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="ft-newslatter">
                                    <h6>New latest</h6>
                                    <p>Get the latest updates and offers.</p>
                                    <form action="#" className="fn-form">
                                        <input type="text" placeholder="Email" />
                                        <button type="submit"><i className="fa fa-send"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-option">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-7 ">
                                <ul className='ps-0 ms-0 '>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Environmental Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*  footer end */}
        </>
    )
}

export default Home