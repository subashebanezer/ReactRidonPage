import React from 'react'
import './pagenotfound.css';

const PageNotFound = () => {
    return (
        <div id="wrapper" className=' container'>
            <div className="row d-flex align-items-center ">
                <div className="col-lg-6 container2">
                    <img src="https://i.imgur.com/qIufhof.png" alt='404' className='w-100' />
                    <div className='text-center h1 errors' >404</div>
                </div>
                <div id="info" className='col-lg-6'>
                    <h1 className='text-center'>404</h1>
                    <h3 className='text-center'>This page could not be found</h3>
                </div>
            </div>
        </div >
    )
}

export default PageNotFound;