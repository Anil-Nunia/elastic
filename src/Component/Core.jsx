import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Imgsample from '../assets/Image/png/img$AMPL.png'
import Imagcardslider from '../assets/Image/png/imgcardslidr.png'
import { Iconsld } from './Icon'
import Slider from 'react-slick'
import Clouds from '../assets/Image/png/Clouds.png'

const Core = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className='position-relative'>
                <img src={Clouds} alt="#" className='clouds' />
            <div className='bgheroimgslider pb-5'>
                <Container className='z-1 position-relative py-3 pb-lg-5'>
                    <div className='d-flex flex-column justify-content-center text-center pt-5'>
                        <h3 className='text-white fw-bold fs_lg ff_Nua text-uppercase'>Core Strategies</h3>
                        <div className='d-flex text center justify-content-center'>
                            <p className='fs_xs fw-normal text-white ff_primary opacity-75 py-4 maxwidth_our'>Our initial strategies use powerful burgeoning trends like Real Yield, Rebase, and others to generate cutting-edged yield innovations. These yield strategies stretch beyond the drought in stable coins and set the value for our native protocol token $EEFI. Check them out!'</p>
                        </div>
                    </div>
                    <Slider {...settings} className='pb-3'>
                        <Row className='pt-4 mt-2  d-flex'>
                                <Col lg={6} className='d-flex justify-content-center' data-aos="fade-down-right">
                                <div className='position-relative'>
                                    <img src={Imgsample} alt="#" className='position-absolute imgsample' />
                                    <img src={Imagcardslider} alt="#" />
                                </div>
                            </Col>
                                <Col lg={6} className='d-flex  flex-column justify-content-center mt-5 mt-lg-0' data-aos="fade-down-left">
                                <p className='fw-normal fs_md ff_Nua text-white text-capitalize'>Elastic Vault</p>
                                <span className='d-flex align-items-center pt-3 mt-1'>
                                    <p className='text-white fw-medium ff_primary fs_sm1s mb-0 pe-1'>Deposit Token</p>
                                    <Iconsld />
                                </span>
                                <p className='fs_xs fw-normal ff_primary smpl pt-3 my-1'> $AMPL</p>
                                <p className='fs_sm1s fw-medium ff_primary text-white'>Flagship Hedging Strategy</p>
                                <p className='fs_xs fw-normal ff_primary smpl mx_widththis '>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className='fs_xs fw-normal ff_primary smpl mx_widththis'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                            </Col>
                        </Row>
                        <Row className='pt-4 mt-2  d-flex'>
                                <Col lg={6} className='d-flex justify-content-center' data-aos="fade-down-right">
                                <div className='position-relative'>
                                    <img src={Imgsample} alt="#" className='position-absolute imgsample' />
                                    <img src={Imagcardslider} alt="#" />
                                </div>
                            </Col>
                                <Col lg={6} className='d-flex  flex-column justify-content-center mt-5 mt-lg-0' data-aos="fade-down-left">
                                <p className='fw-normal fs_md ff_Nua text-white text-capitalize'>Elastic Vault</p>
                                <span className='d-flex align-items-center pt-3 mt-1'>
                                    <p className='text-white fw-medium ff_primary fs_sm1s mb-0 pe-1'>Deposit Token</p>
                                    <Iconsld />
                                </span>
                                <p className='fs_xs fw-normal ff_primary smpl pt-3 my-1'> $AMPL</p>
                                <p className='fs_sm1s fw-medium ff_primary text-white'>Flagship Hedging Strategy</p>
                                <p className='fs_xs fw-normal ff_primary smpl mx_widththis '>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className='fs_xs fw-normal ff_primary smpl mx_widththis'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                            </Col>
                        </Row>
                        <Row className='pt-4 mt-2  d-flex'>
                                <Col lg={6} className='d-flex justify-content-center' data-aos="fade-down-right">
                                <div className='position-relative'>
                                    <img src={Imgsample} alt="#" className='position-absolute imgsample' />
                                    <img src={Imagcardslider} alt="#" />
                                </div>
                            </Col>
                                <Col lg={6} className='d-flex  flex-column justify-content-center mt-5 mt-lg-0' data-aos="fade-down-left">
                                <p className='fw-normal fs_md ff_Nua text-white text-capitalize'>Elastic Vault</p>
                                <span className='d-flex align-items-center pt-3 mt-1'>
                                    <p className='text-white fw-medium ff_primary fs_sm1s mb-0 pe-1'>Deposit Token</p>
                                    <Iconsld />
                                </span>
                                <p className='fs_xs fw-normal ff_primary smpl pt-3 my-1'> $AMPL</p>
                                <p className='fs_sm1s fw-medium ff_primary text-white'>Flagship Hedging Strategy</p>
                                <p className='fs_xs fw-normal ff_primary smpl mx_widththis '>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className='fs_xs fw-normal ff_primary smpl mx_widththis'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                            </Col>
                        </Row>
                        <Row className='pt-4 mt-2  d-flex'>
                                <Col lg={6} className='d-flex justify-content-center' data-aos="fade-down-right">
                                <div className='position-relative'>
                                    <img src={Imgsample} alt="#" className='position-absolute imgsample' />
                                    <img src={Imagcardslider} alt="#" />
                                </div>
                            </Col>
                                <Col lg={6} className='d-flex  flex-column justify-content-center mt-5 mt-lg-0' data-aos="fade-down-left">
                                <p className='fw-normal fs_md ff_Nua text-white text-capitalize'>Elastic Vault</p>
                                <span className='d-flex align-items-center pt-3 mt-1'>
                                    <p className='text-white fw-medium ff_primary fs_sm1s mb-0 pe-1'>Deposit Token</p>
                                    <Iconsld />
                                </span>
                                <p className='fs_xs fw-normal ff_primary smpl pt-3 my-1'> $AMPL</p>
                                <p className='fs_sm1s fw-medium ff_primary text-white'>Flagship Hedging Strategy</p>
                                <p className='fs_xs fw-normal ff_primary smpl mx_widththis '>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className='fs_xs fw-normal ff_primary smpl mx_widththis'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                            </Col>
                        </Row>
                        <Row className='pt-4 mt-2  d-flex'>
                                <Col lg={6} className='d-flex justify-content-center' data-aos="fade-down-right">
                                <div className='position-relative'>
                                    <img src={Imgsample} alt="#" className='position-absolute imgsample' />
                                    <img src={Imagcardslider} alt="#" />
                                </div>
                            </Col>
                                <Col lg={6} className='d-flex  flex-column justify-content-center mt-5 mt-lg-0' data-aos="fade-down-left">
                                <p className='fw-normal fs_md ff_Nua text-white text-capitalize'>Elastic Vault</p>
                                <span className='d-flex align-items-center pt-3 mt-1'>
                                    <p className='text-white fw-medium ff_primary fs_sm1s mb-0 pe-1'>Deposit Token</p>
                                    <Iconsld />
                                </span>
                                <p className='fs_xs fw-normal ff_primary smpl pt-3 my-1'> $AMPL</p>
                                <p className='fs_sm1s fw-medium ff_primary text-white'>Flagship Hedging Strategy</p>
                                <p className='fs_xs fw-normal ff_primary smpl mx_widththis '>This one-of-a-kind strategy combines the benefits of Rebase’s force multiplier effect and Real Yield’s sustainability.</p>
                                <p className='fs_xs fw-normal ff_primary smpl mx_widththis'>Helps users to protect against downtrends and amplify yield rewards during market up trends.</p>
                            </Col>
                        </Row>
                    </Slider>
                </Container>
            </div>

            </div>
        </>
    )
}

export default Core