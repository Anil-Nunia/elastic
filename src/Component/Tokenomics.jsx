import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Imgtk1 from '../assets/Image/png/imgtk1.png'
import Imgtk2 from '../assets/Image/png/imgtk2.png'
import Imgtk3 from '../assets/Image/png/imgtk3.png'
import Imgtk4 from '../assets/Image/png/imgtk4.png'
import Imgtk5 from '../assets/Image/png/imgtk5.png'
import Imgps from '../assets/Image/png/bgaftimg.png'
import Imgaft from '../assets/Image/png/imgbgafters.png'

const Tokenomics = () => {
  return (
    <div className=' overflow-x-hidden'>
      <Row className=''>
        <Col lg={6} className='pt-5 position-relative toka' data-aos="fade-down-right">
          <img src={Imgaft} alt="#" className='imgaft position-absolute'/>
          <div className='p-left pt-lg-5 mt-md-5 position-relative'>
            <p className='fs_lg fw-bold ff_Nua text-black text-capitalize'>EEFI Tokenomics</p>
            <p className='py-1 mb-3 fs_xs fw-medium ff_primary text-black mx-width-tk'>EEFI is the special rewards token of the protocol that is minted and distributed in a decentralized fashion. It produces amplified yield during uptrends and protects from downside action during downtrends.</p>
            <button className='btn_views text-white fs_xs fw-medium ff_primary'>View Contract Address</button>
            <p className='ff_Nua text-black fw-bold text-capitalize fs_smd pt-3 pb-3'>IBO TOKENOMICS</p>
            <p className='fw-bold ff_primary text-black fs_sm'>IBO Round 1 Price</p>
            <p className='fs_xs fw-semibold ff_primary color-blue'>1 EEFI = $12</p>
            <p className='fw-bold ff_primary text-black fs_sm'>IBO Round 2 Price</p>
            <p className='fs_xs fw-semibold ff_primary color-blue'>1 EEFI = $18</p>
            <p className='fw-bold ff_primary text-black fs_sm'>IBO Round 3 Price</p>
            <p className='fs_xs fw-semibold ff_primary color-blue'>1 EEFI = $26</p>
            <p className='fw-bold ff_primary text-black fs_sm'>TOTAL SUPPLY</p>
            <p className='fs_xs fw-semibold ff_primary text-black'>170,000</p>
          </div>
        </Col>
        <Col lg={6} className=' pt-5 bg_colorgd position-relative toka' data-aos="fade-down-left">
          <img src={Imgps} alt="#" className='imgps opacity-25 ' />
          <div className='p_right position-relative z-1 pt-md-5 mt-lg-5'>
            <div className='d-flex align-items-center'>
              <img src={Imgtk1} alt="#"/>
              <div className='d-flex flex-column'>
                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua'>Decentralized Yield</p>
                <p className='fs_xs fw-normal ff_primary text-white opacity-75'>Protocol’s native utility | rewards token</p>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <img src={Imgtk2} alt="#"/>
              <div className='d-flex flex-column'>
                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua'>Extra Value</p>
                <p className='fs_xs fw-normal ff_primary text-white opacity-75'>Can be highly deflationary during market uptrends</p>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <img src={Imgtk3} alt="#" />
              <div className='d-flex flex-column'>
                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua'>Smart Index</p>
                <p className='fs_xs fw-normal ff_primary text-white opacity-75'>Token can be viewed as an index of all strategy performance on the protocol</p>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <img src={Imgtk4} alt="#" />
              <div className='d-flex flex-column'>
                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua'>Social Coordination (E,E)</p>
                <p className='fs_xs fw-normal ff_primary text-white opacity-75'>Promotes hyper social coordination around all strategies on the protocol (E,E) (makes hedging fun and working together produces more benefits to all vault users)</p>
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <img src={Imgtk5} alt="#" />
              <div className='d-flex flex-column'>
                <p className='fs_smd fw-bold text-white text-capitalize ff_Nua'>Expansive Utility Dimensions</p>
                <p className='fs_xs fw-normal ff_primary text-white opacity-75'>EEFI’s utility will expand as more strategies are added to the protocol.</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

    </div >
  )
}

export default Tokenomics