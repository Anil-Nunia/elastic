import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Img1t from '../assets/Image/png/img1t.png'
import Img2t from '../assets/Image/png/img2t.png'
import Img3t from '../assets/Image/png/img3t.png'
import { Linet } from './Icon'
import { Icon1t } from './Icon'
import { Icon2t } from './Icon'
import { Icon3t } from './Icon'
const Team = () => {
    return (
        <div>
            <div className='bgheroteamimg'></div>
            <Container className='mtp-team'>
                <div className='d-flex justify-content-center'><p className='fs_lg fw-bold text-white text-captalize ff_Nua'>our Team</p></div>
                <Row className='mt-5 pt-lg-3 align-items-center justify-content-center'>
                    <Col sm={10} md={6} lg={4} data-aos="flip-left"
                        data-aos-easing="ease-out-cubic">
                        <div className='card_t d-flex justify-content-center align-items-center flex-column'>
                            <img src={Img1t} alt="#" className=' w-100' />
                            <p className='fs_smd fw-medium text-black text-captalize ff_primary mb-0 mt-3'>Davoice</p>
                            <p className='fs_xs fw-normal text-black text-captalize ff_primary mb-3'>co-founder</p>
                            <div className='d-flex align-items-center'>
                               <span className='icon1team'> <Icon1t/></span>
                                <span className='mx-3'> <Linet /></span>
                                <span className='icon1team'><Icon2t /></span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={10} md={6} lg={4} className='pt-4 pt-md-0' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic">
                        <div className='card_t d-flex justify-content-center align-items-center flex-column'>
                            <img src={Img2t} alt="#" className='w-100' />
                            <p className='fs_smd fw-medium text-black text-captalize ff_primary mb-0 mt-3'>Davoice</p>
                            <p className='fs_xs fw-normal text-black text-captalize ff_primary mb-3'>co-founder</p>
                            <div className='d-flex align-items-center'>
                                <span className='icon1team'><Icon1t/></span>
                                <span className='mx-3'> <Linet /></span>
                                <span className='icon1team'> <Icon2t/></span>
                                <span className='mx-3'> <Linet /></span>
                                <span className='icon1team'> <Icon3t/></span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={10} md={6} lg={4} className='pt-4 pt-lg-0' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic">
                        <div className='card_t d-flex justify-content-center align-items-center flex-column'>
                            <img src={Img3t} alt="#" className='w-100' />
                            <p className='fs_smd fw-medium text-black text-captalize ff_primary mb-0 mt-3'>Davoice</p>
                            <p className='fs_xs fw-normal text-black text-captalize ff_primary mb-3'>co-founder</p>
                            <div className='d-flex align-items-center'>
                                <span className='icon1team'><Icon1t/></span>
                                <span className='mx-3'> <Linet /></span>
                                <span className='icon1team'><Icon2t/></span>
                                <span className='mx-3'> <Linet /></span>
                                <span className='icon1team'><Icon3t/></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team