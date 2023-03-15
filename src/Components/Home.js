import React, { useState } from 'react'
import { Nav, Tab } from 'react-bootstrap';
import "./scss/_home.scss";
function Home() {
    const [activeTab, setActiveTab] = useState('button1');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }
    return (
        <>
            <div className='hero-section'>
                <div className="main-container">
                    <div className='row text-white'>
                        <div className="col-12 col-md-6 hero-desc p-5">
                            <h1 className='mb-4'>Book Your Next Flight with Us Today .</h1>
                            <p>
                                Let us take care of the details while you sit back, relax, and enjoy the journey. Our team of dedicated travel specialists are available 24/7
                            </p>
                        </div>
                        <div className="col-12 col-md-6 px-0 hero-form py-4">
                            <Tab.Container defaultActiveKey={activeTab}>
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="button1" onClick={() => handleTabClick('button1')}>
                                            Button 1
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="button2" onClick={() => handleTabClick('button2')}>
                                            Button 2
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="button1">
                                        <div>
                                            <form>
                                                <div className="row">
                                                    <div className="col">
                                                        <input type="text" placeholder='Fullname' required />
                                                    </div>
                                                    <div className="col">
                                                        <input type="number" min={1} required /> <br />
                                                        <input type="number" min={0} required />
                                                    </div>
                                                </div>
                                                <div className="row my-3">
                                                    <div className="col">
                                                        <input className='mb-2' type="text" required /> <br />
                                                        <input type="text" required />
                                                    </div>
                                                </div>

                                                <div className='mt-4'>
                                                    <input className='me-5' type="text" placeholder='checkin' onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"} required />
                                                    <input type="text" placeholder='checkout' onFocus={(e) => e.target.type = "date"} onBlur={(e) => e.target.type = "text"} required />
                                                </div>
                                                <div className='mt-3'>
                                                    <button type="submit">Submit</button>
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
                    </div>
                </div>
            </div>

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


        </>
    )
}

export default Home