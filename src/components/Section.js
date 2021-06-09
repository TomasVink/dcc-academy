import React from 'react'

const Section = ({ title, children }) => (
  <section id='scroll'>
    <div className='container px-4 my-5'>
      <div className='row gx-5'>
        <div className='col-lg-4 order-lg-1'>
          <h2 className='display-5'>{title}</h2>
        </div>
        <div className='col-lg-8 order-lg-2'>{children}</div>
      </div>
    </div>
  </section>
)

export default Section
