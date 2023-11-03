import React from 'react'
import { Container } from 'react-bootstrap'
import Footrimg from '../assets/Image/png/footrimg.png'
import { Icon1ft } from './Icon'
import { Icon2ft } from './Icon'
import { Icon3ft } from './Icon'
import { Icon4ft } from './Icon'
import { Icon5ft } from './Icon'
import { Icon6ft } from './Icon'
import { Icon7ft } from './Icon'
import { Icon8ft } from './Icon'
import { Icon9ft } from './Icon'
const Footer = () => {
  return (
      <div>
          <Container className='py-5'>
              <div className='d-flex justify-content-center mt-4'>
                  <img src={Footrimg} alt="#" />
              </div>
              <div className='d-flex justify-content-center pt-2'>
                  <p className='ff_primary fs_xs fw-noraml color_blue'>Join Our Community</p>
              </div>
              <ul className='ps-0 gap-4 d-flex align-items-center flex-column flex-lg-row justify-content-center'>
                  <span className='d-flex align-items-center gap-4'>
                      <li className='fs_xs fw-normal ff_primary opct'>About</li>
                      <li className='fs_xs fw-normal ff_primary opct'>IBO Event</li>
                      <li className='fs_xs fw-normal ff_primary opct'>EEFI Tokenomics</li>
                 </span>
                  <span className='d-flex align-items-center gap-4'>
                      <li className='fs_xs fw-normal ff_primary opct'>Team</li>
                      <li className='fs_xs fw-normal ff_primary opct'>Roadmap</li>
                      <li className='fs_xs fw-normal ff_primary opct'>Partners</li>
                      <li className='fs_xs fw-normal ff_primary opct'>Contact Us</li>
                </span>
              </ul>
              <div className='d-flex align-items-center flex-column flex-lg-row justify-content-center gap-4'>
                  <div className='d-flex align-items-center gap-4'>
                      <span className='iconftrs'><Icon1ft /></span>
                      <span className='iconftrs'><Icon2ft /></span>
                      <span className='iconftrs'><Icon3ft /></span>
                 </div>
                  <div className='d-flex align-items-center gap-4'>
                      <span className='iconftrs'><Icon4ft /></span>
                      <span className='iconftrs'><Icon5ft /></span>
                      <span className='iconftrs'><Icon6ft /></span>
                 </div>
                  <div className='d-flex align-items-center gap-4'>
                      <span className='iconftrs'><Icon7ft /></span>
                      <span className='iconftrs'><Icon8ft /></span>
                      <span className='iconftrs'><Icon9ft /></span>
                 </div>
              </div>
          </Container>

          <div className='bg_color'>
              <Container className='d-flex align-items-center justify-content-between'>
                  <p className='fx_xsm fw-normal text-black opacity-75 ff_primary pt-3'>@Copyright 2023</p>
                  <p className='fx_xsm fw-normal text-black opacity-75 ff_primary pt-3'>Privacy policy</p>
              </Container>
          </div>
    </div>
  )
}

export default Footer