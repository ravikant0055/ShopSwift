import React from 'react'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
function Layout({children}) {
  return (
    <div className='layout__wrapper'>
        <div className='layout__content'>
          <div className='layout__sidebar  sticky top-0 z-50'>
            <Navbar />
          </div>
          <div className='layout__body'>
          {children}
          </div>
          <div className='layout__footer'>
            {/* <Footer /> */}
          </div>
        </div>
    </div>
  )
}

export default Layout