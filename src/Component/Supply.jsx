import React from 'react'
import { Container } from 'react-bootstrap'

const Supply = () => {
    return (
        <div className='bgherosplyimg'>
            <Container className='py-5' data-aos="fade-up">
                <div className='d-flex  justify-content-center flex-column align-items-center pt-md-5 text-center text-md-start'>
                    <p className='fs_xl ff_secondary fw-bold text-white text-capitalize'>170k Total Starting Supply</p>
                    <p className='fs_xs ff_primary fw-medium text-white pt-2 pb-5'>Initial BONDing Offering (IBO)* Phases</p>
                </div>
               
                <div className='d-flex justify-content-center '>
                    <div className='d-flex align-items-center justify-content-between position-relative mxwidthc lowerline'>
                        <p className='fs_sm fw-normal ff_primary text-white text-upercase nbm'>Round 1</p>
                        <p className='fs_esm fw-medium text-white ff_primary nbm'>10,000 EEFI Bonds</p>
                        <p className='fs_md fw-normal ff_primary text-white nbm'>@ $12</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end loked fs_xs fw-normal text-white ff_secondary fslocked'> <p className='mt-3'>Vested (locked) for 1 Year</p></div>
                <div className='d-flex justify-content-center mt-3'>
                    <div className='d-flex align-items-center justify-content-between position-relative mxwidthc lowerline'>
                        <span className='fs_sm fw-normal ff_primary text-white text-upercase nbm'>Round 2</span>
                        <span className='fs_esm fw-medium text-white ff_primary nbm'>12,777 EEFI Bonds</span>
                        <p className='fs_md fw-normal ff_primary text-white nbm'>@ $18</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end loked fs_xs fw-normal text-white ff_secondary fslocked'> <p className='mt-3'>Vested (locked) for 2 Year</p></div>
                <div className='d-flex justify-content-center mt-3'>
                    <div className='d-flex align-items-center justify-content-between position-relative mxwidthc lowerline'>
                        <sanp className='fs_sm fw-normal ff_primary text-white text-upercase nbm'>Round 3</sanp>
                        <span className='fs_esm fw-medium text-white ff_primary nbm'>25,000 EEFI Bonds</span>
                        <p className='fs_md fw-normal ff_primary text-white nbm'>@ $26</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end loked fs_xs fw-normal text-white ff_secondary fslocked'> <p className='mt-3'>No vesting or lock up periods. Available at launch.</p></div>
                
                <div className='d-flex justify-content-center'>
                    <div className='d-flex align-items-center'> <p className='fs_esm fw-normal text-white ff_primary underc'>(47,777 or around </p> <p className='fs_md text-white ff_primary underc fw-normal px-2 mtop'>28% </p> <p className='fs_esm fw-normal text-white ff_primary underc '>of total starting supply is up for IBO)</p>
                    </div>
              </div>
                <div className='d-flex justify-content-center text-center'>
                    <p className='fs_xssm fw-normal ff_primary text-white opacity-75 mx_indiv'>Individuals who hold <span className='fs_xsm'>$EEFI</span> will also receive an airdrop of the protocol's governance token <span className='fs_xsm'>$EFT</span> ...learn more</p>
                </div>
            </Container>
        </div>
    )
}

export default Supply