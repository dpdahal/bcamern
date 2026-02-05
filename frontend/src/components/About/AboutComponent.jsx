import React from 'react'
import FooterComponents from '../../layouts/FooterComponents'
import HeaderComponents from '../../layouts/HeaderComponents'

function AboutComponent() {
  return (
    <React.Fragment>
      <HeaderComponents />
      <div className="container">
      <h1>About page</h1>
      </div>
      <FooterComponents />

    </React.Fragment>
  )
}

export default AboutComponent