import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Icon1p } from './Icon'
import { Icon2p } from './Icon'
import { Icon3p } from './Icon'
import { Icon4p } from './Icon'
import { Icon5p } from './Icon'
import { Icon6p } from './Icon'
const Partners = () => {
  return (
      <div>
          <Container className='py-5'>
              <div className='d-flex justify-content-center py-5'>
                  <p className='fs_lg fw-bold text-capitalize ff_nua txt_blu'>Ecosystem Partners</p>
              </div>
              <Row className=' align-items-center'>
                  <Col md={6} lg={4} data-aos="flip-up">
                      <div className='cardp crd1p'>
                          <Icon1p/>
                      </div>
                  </Col>
                  <Col md={6} lg={4} className='pt-4 py-md-0' data-aos="flip-down">
                      <div className='cardp crd2p'>
                          <Icon2p />
                      </div>
                  </Col>
                  <Col md={6} lg={4} className='mt-4 mt-lg-0' data-aos="flip-up">
                      <div className='cardp crd3p'>
                          <Icon3p />
                      </div>
                  </Col>
                  <Col md={6} lg={4} className='mt-4 pt-lg-3' data-aos="flip-up">
                      <div className='cardp crd4p'>
                          <Icon4p />
                      </div>
                  </Col>
                  <Col md={6} lg={4} className='mt-4 pt-lg-3' data-aos="flip-down">
                      <div className='cardp crd5p'>
                          <Icon5p />
                      </div>
                  </Col>
                  <Col md={6} lg={4} className='mt-4 pt-lg-3' data-aos="flip-up">
                      <div className='cardp crd6p'>
                          <Icon6p />
                      </div>
                  </Col>
              </Row>
              <div className='d-flex justify-content-center py-5 my-3'>
                  <p className='fs_xs fw-semibold ff_primary txt-colorm btn-more'>More To Be Announced</p>
              </div>
          </Container>
    </div>
  )
}

export default Partners