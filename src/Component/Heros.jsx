import { useState } from 'react'
import React from 'react'
import Navlogos from '../assets/Image/png/navlogo.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Imgh1 from '../assets/Image/png/Imgh1s.png'
import Imgherosp from '../assets/Image/png/imgherospac.png'
import { Iconnav } from './Icon'
import { Iconcross } from './Icon'
import { Icondrop } from './Icon'

const Heros = () => {
    const [menu, setMenu] = useState(false);
    if (menu === true) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    };
    return (
        <div className='bgheroimg1s position-relative'>
            <span className='navicondot nav1dot position-absolute'></span>
            <span className='navicondot nav2dot position-absolute'></span>
            <span className='navicondot nav3dot position-absolute'></span>
            <span className='navicondot nav4dot position-absolute'></span>
            <span className='navicondot nav5dot position-absolute'></span>

            <Container>
                <div className='d-flex align-items-center justify-content-between py-3'>
                    <img src={Navlogos} alt="#" className='novlogos' />
                    <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                        <div className='d-lg-none crossIconset'
                            onClick={() => setMenu(false)}>
                            <h3 className='z-3'><span className='text-white fs_2xl fw-semibold'>&#x2715;</span></h3>
                        </div>
                        <ul className='mb-0 ps-0 d-flex align-items-center flex-column flex-lg-row gap-4'>
                            <li><Link to="#" className='ff_primary fs_xs fw-medium text-white aftr'>About</Link></li>
                            <li><Link to="#" className='ff_primary fs_xs fw-medium text-white aftr'>IBO Event</Link></li>
                            <li><Link to="#" className='ff_primary fs_xs fw-medium text-white aftr'>EEFI Tokenomics</Link></li>
                            <li><Link to="#" className='ff_primary fs_xs fw-medium text-white aftr'>Team</Link></li>
                            <li><Link to="#" className='ff_primary fs_xs fw-medium text-white aftr'>Partners</Link></li>
                            <li><Link to="#" className='ff_primary fs_xs fw-medium text-white aftr'>Roadmap</Link></li>
                            {/* <li><Link to="#" className='ff_tertiary fs_xs fw-medium text-white'>More</Link></li> */}
                            <span class="dropdown">
                                <span className='ff_tertiary fs_xs fw-medium text-white'>More  <Icondrop /></span>
                                <span class="dropdown-content">
                                    <span className='d-flex  flex-column'>
                                        <span className='drpdown'>Roadmap</span>
                                        <span className='drpdown'>Partner</span>
                                        <span className='drpdown'>Team</span>
                                   </span>
                                </span>
                            </span>
                        </ul>
                    </div>
                    <button onClick={() => setMenu(false)} className='btn_enter ff_primary fs_xs fw-medium '>Enter App</button>
                    <div className='d-lg-none z-3'>
                        <Link onClick={() => setMenu(true)}>
                            <Iconnav /></Link>
                    </div>
                </div>
                <Row className='pb-5 mb-xl-5'>
                    <Col lg={6} className='pt-xl-5' data-aos="fade-right">
                        <div className='pt-lg-5 mt-xl-5  text-center text-lg-start'>
                            <h1 className='text-white fw-medium fs_2xl build ff_Nua'>Building
                                elastic
                                Protocol</h1>
                            <p className='fw-normal fs_xs ff_primary text-white py-4 mt-1 ecos_lineheight'>An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditions</p>
                            <p className='text-dectorations fs_sm ff_primary fw-bold text-white'>Audited by Omniscia</p>
                        </div>
                    </Col>
                    <Col lg={6} className='d-flex justify-content-end' data-aos="fade-left">
                        <img src={Imgh1} alt="#" className='imgh1 d-none d-lg-block' />
                        <img src={Imgherosp} alt="#" className='d-lg-none w-100' />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Heros