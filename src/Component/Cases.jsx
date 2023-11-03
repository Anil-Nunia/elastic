import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cardimg1 from '../assets/Image/png/cardimg1.png'
import Cardimg2 from '../assets/Image/png/cardimg2.png'
import Cardimg3 from '../assets/Image/png/cardimg3.png'
import Cardimg4 from '../assets/Image/png/cardimg4.png'
import Cardimg5 from '../assets/Image/png/cardimg5.png'
import Cardimg6 from '../assets/Image/png/cardimg6.png'
import Cardimg7 from '../assets/Image/png/cardimg7.png'
import Cardimg8 from '../assets/Image/png/cardimg8.png'
import Cardimg9 from '../assets/Image/png/cardimg9.png'


import Card1img from '../assets/Image/png/card1img.png'
import Card2img from '../assets/Image/png/card2img.png'
import Card3img from '../assets/Image/png/card3img.png'
import Card4img from '../assets/Image/png/card4img.png'
import Card5img from '../assets/Image/png/card5img.png'
import Card6img from '../assets/Image/png/card6img.png'
import Card7img from '../assets/Image/png/card7img.png'
import Card8img from '../assets/Image/png/card8img.png'
import Card9img from '../assets/Image/png/card9img.png'


import Img1icon from '../assets/Image/png/img1icon.png'
import Img2icon from '../assets/Image/png/img2icon.png'
import Img3icon from '../assets/Image/png/img3icon.png'
import Img4icon from '../assets/Image/png/img4icon.png'
const Cases = () => {
    return (
        <div>
            <Container className='py-5'>
                <div className='d-flex justify-content-center pt-md-5' data-aos="zoom-in">
                    <p className='fw-bold fs_lg ff-Nua text-capitalize text_colorblue text-center text-md-start'>Future Use Cases (Strategies)</p>
                </div>
                <div className='d-flex justify-content-center text-center mb-4' data-aos="zoom-in">
                    <p className='fs_xs fw-normal text-black opacity-0.75 ff_primary max-widths'>Elastic Protocol will continue to pioneer an expanding ecosystem of yield strategies that will cater to DeFi users across a range of blockchains, communities, and interests. Each will help in generating sustainable yield and expanding the utility of the native utility token $EEFI. Here is some of what we are planning and looking into:</p>
                </div>
                <Row className='py-3 align-items-center justify-content-center'>
                    <Col md={6} lg={4} data-aos="zoom-in-down">
                        <div className='card-main overflow-hidden'>
                            <div> <img src={Cardimg1} alt="#" className='card1img' /></div>
                            <div className='card1s'>
                                <img src={Card1img} alt="#" className='card2img'/>
                                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua my-1'>REAL YIELD</p>
                                <p className=' fw-normal text-white opacity-75 ff_primary mb-0 mb-unset font_16'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                <p className=' fw-normal text-white opacity-75 ff_primary font_16 mb-0 pb-2'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                <p className='fs_esm fw-semibold text-white ff_primary mb-0 pb-2'>Platforms: </p>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <img className='mx_width1ss' src={Img1icon} alt="#" />
                                    <span className='px-2 mx-1'>
                                        <img className='mx_width1ss' src={Img2icon} alt="#" /></span>
                                        <img className='mx_width1ss' src={Img3icon} alt="#" />
                                    <span className='ps-2 ms-1'>
                                        <img className='mx_width1ss' src={Img4icon} alt="#" /></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className='my-4 my-md-0' data-aos="zoom-in-down">
                        <div className='card-main'>
                            <img src={Cardimg2} alt="#" className='w-100' />
                            <div className='card1s'>
                                <img src={Card2img} alt="#" className='card2img' />
                                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua my-1'>REAL YIELD</p>
                                <p className=' fw-normal text-white opacity-75 ff_primary mb-0 mb-unset font_16'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 pb-2'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                <p className='fs_esm fw-semibold text-white ff_primary mb-0 pb-2'>Platforms: </p>
                                <div className='d-flex justify-content-between'>
                                    <img className='mx_width1ss' src={Img1icon} alt="#" />
                                    <span className='px-2 mx-1'> <img className='mx_width1ss' src={Img2icon} alt="#" /></span>
                                    <img className='mx_width1ss' src={Img3icon} alt="#" />
                                    <span className='ps-2 ms-1'> <img className='mx_width1ss' src={Img4icon} alt="#" /></span>
                                </div>
                            </div>
                        </div>
                      </Col>
                    <Col md={6} lg={4} className='my-md-4 my-lg-0' data-aos="zoom-in-down">
                        <div className='card-main'>
                            <img src={Cardimg3} alt="#" className='w-100' />
                            <div className='card1s'>
                                <img src={Card3img} alt="#" className='card2img' />
                                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua my-1'>REAL YIELD</p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 mb-unset'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 pb-2'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                <p className='fs_esm fw-semibold text-white ff_primary mb-0 pb-2'>Platforms: </p>
                                <div className='d-flex justify-content-between'>
                                    <img className='mx_width1ss' src={Img1icon} alt="#" />
                                    <span className='px-2 mx-1'> <img className='mx_width1ss' src={Img2icon} alt="#" /></span>
                                    <img className='mx_width1ss' src={Img3icon} alt="#" />
                                    <span className='ps-2 ms-1'> <img className='mx_width1ss' src={Img4icon} alt="#" /></span>
                                </div>
                            </div>
                        </div>
                      </Col>
                    <Col md={6} lg={4} className='my-4 py-lg-2' data-aos="zoom-in-down">
                        <div className='card-main'>
                            <img src={Cardimg4} alt="#" className='w-100' />
                            <div className='card1s'>
                                <img src={Card4img} alt="#" className='card2img' />
                                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua my-1'>REAL YIELD</p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 mb-unset'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 pb-2'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                <p className='fs_esm fw-semibold text-white ff_primary mb-0 pb-2'>Platforms: </p>
                                <div className='d-flex justify-content-between'>
                                    <img className='mx_width1ss' src={Img1icon} alt="#" />
                                    <span className='px-2 mx-1'> <img className='mx_width1ss' src={Img2icon} alt="#" /></span>
                                    <img className='mx_width1ss' src={Img3icon} alt="#" />
                                    <span className='ps-2 ms-1'> <img className='mx_width1ss' src={Img4icon} alt="#" /></span>
                                </div>
                            </div>
                        </div>
                      </Col>
                    <Col md={6} lg={4} className='my-lg-4 py-lg-2' data-aos="zoom-in-down">
                        <div className='card-main'>
                            <img src={Cardimg5} alt="#" className='w-100' />
                            <div className='card1s'>
                                <img src={Card5img} alt="#" className='card2img' />
                                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua my-1'>REAL YIELD</p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 mb-unset'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 pb-2'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                <p className='fs_esm fw-semibold text-white ff_primary mb-0 pb-2'>Platforms: </p>
                                <div className='d-flex justify-content-between'>
                                    <img className='mx_width1ss' src={Img1icon} alt="#" />
                                    <span className='px-2 mx-1'> <img className='mx_width1ss' src={Img2icon} alt="#" /></span>
                                    <img className='mx_width1ss' src={Img3icon} alt="#" />
                                    <span className='ps-2 ms-1'> <img className='mx_width1ss' src={Img4icon} alt="#" /></span>
                                </div>
                            </div>
                        </div>
                      </Col>
                    <Col md={6} lg={4} className='my-4 my-md-0 py-lg-2' data-aos="zoom-in-down">
                        <div className='card-main'>
                            <img src={Cardimg6} alt="#" className='w-100' />
                            <div className='card1s'>
                                <img src={Card6img} alt="#" className='card2img' />
                                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua my-1'>REAL YIELD</p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 mb-unset'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 pb-2'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                <p className='fs_esm fw-semibold text-white ff_primary mb-0 pb-2'>Platforms: </p>
                                <div className='d-flex justify-content-between'>
                                    <img className='mx_width1ss' src={Img1icon} alt="#" />
                                    <span className='px-2 mx-1'> <img className='mx_width1ss' src={Img2icon} alt="#" /></span>
                                    <img className='mx_width1ss' src={Img3icon} alt="#" />
                                    <span className='ps-2 ms-1'> <img className='mx_width1ss' src={Img4icon} alt="#" /></span>
                                </div>
                            </div>
                        </div>
                      </Col>
                    <Col md={6} lg={4} data-aos="zoom-in-down">
                        <div className='card-main'>
                            <img src={Cardimg7} alt="#" className='w-100' />
                            <div className='card1s'>
                                <img src={Card7img} alt="#" className='card2img' />
                                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua my-1'>REAL YIELD</p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 mb-unset'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 pb-2'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                <p className='fs_esm fw-semibold text-white ff_primary mb-0 pb-2'>Platforms: </p>
                                <div className='d-flex justify-content-between'>
                                    <img className='mx_width1ss' src={Img1icon} alt="#" />
                                    <span className='px-2 mx-1'> <img className='mx_width1ss' src={Img2icon} alt="#" /></span>
                                    <img className='mx_width1ss' src={Img3icon} alt="#" />
                                    <span className='ps-2 ms-1'> <img className='mx_width1ss' src={Img4icon} alt="#" /></span>
                                </div>
                            </div>
                        </div>
                      </Col>
                    <Col md={6} lg={4} className='my-4 my-lg-0' data-aos="zoom-in-down">
                        <div className='card-main'>
                            <img src={Cardimg8} alt="#" className='w-100' />
                            <div className='card1s'>
                                <img src={Card8img} alt="#" className='card2img' />
                                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua my-1'>REAL YIELD</p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 mb-unset'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 pb-2'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                <p className='fs_esm fw-semibold text-white ff_primary mb-0 pb-2'>Platforms: </p>
                                <div className='d-flex justify-content-between'>
                                    <img className='mx_width1ss' src={Img1icon} alt="#" />
                                    <span className='px-2 mx-1'> <img className='mx_width1ss' src={Img2icon} alt="#" /></span>
                                    <img className='mx_width1ss' src={Img3icon} alt="#" />
                                    <span className='ps-2 ms-1'> <img className='mx_width1ss' src={Img4icon} alt="#" /></span>
                                </div>
                            </div>
                        </div>
                      </Col>
                    <Col md={6} lg={4} data-aos="zoom-in-down">
                        <div className='card-main'>
                            <img src={Cardimg9} alt="#" className='w-100' />
                            <div className='card1s'>
                                <img src={Card9img} alt="#" className='card2img' />
                                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua my-1'>REAL YIELD</p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 mb-unset'>These are strategies that will explore other Real Yield ecosystems outside of Olympus DAO. For example GMX - the leading leverage platform that </p>
                                <p className='font_16 fw-normal text-white opacity-75 ff_primary mb-0 pb-2'>distributes 100% of fees. We are also looking at Vela Exchange, Jones DAO and many others on Arbitrum.</p>
                                <p className='fs_esm fw-semibold text-white ff_primary mb-0 pb-2'>Platforms: </p>
                                <div className='d-flex justify-content-between'>
                                    <img className='mx_width1ss' src={Img1icon} alt="#" />
                                    <span className='px-2 mx-1'> <img className='mx_width1ss' src={Img2icon} alt="#" /></span>
                                    <img className='mx_width1ss' src={Img3icon} alt="#" />
                                    <span className='ps-2 ms-1'> <img className='mx_width1ss' src={Img4icon} alt="#" /></span>
                                </div>
                            </div>
                        </div>
                      </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cases