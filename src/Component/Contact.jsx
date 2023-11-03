import React from 'react'
import { Container } from 'react-bootstrap'


const Contact = () => {
    return (
        <div className='bgimgcont '>
            <Container className='py-5'>
                <div className='d-flex justify-contact-center text-center flex-column py-4'>
                    <p className='text-capitalize text-white fs_lg fw-bold ff_Nua'>Contact Us</p>
                    <p className='text-capitalize text-white fs_xs opacity-0.75 fw-semibold ff_Primary'>Have a question or want to contribute? Reach out to us</p>
                </div>
                <div className='d-flex justify-content-center flex-column'>
                    <div className='d-flex justify-content-center gap-5'>
                        <input type="text " placeholder='First Name' className=' outline' />
                        <input type="text " placeholder='Last Name' className='outline' />
                    </div>
                    <div className='pt-4 d-flex justify-content-center gap-5'>
                        <input type="text " placeholder='Email' className='outline' />
                        <input type=" number " placeholder='Phone Number' className='outline' />
                    </div>
                    <div className='pt-5 d-flex justify-content-center'>
                        <input type="text " placeholder='Massage' className='outline' />
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='fs_esm fw-medium text-white ff-primary btn-submit my-5'>SUBMIT'</button>
                </div>
            </Container>
        </div>
    )
}

        
export default Contact