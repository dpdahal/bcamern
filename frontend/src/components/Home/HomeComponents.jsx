import React from 'react'
import HeaderComponents from '../../layouts/HeaderComponents'
import FooterComponents from '../../layouts/FooterComponents'

function HomeComponents() {
  return (
    <React.Fragment>
      <HeaderComponents />
      <div className="container">
      <h1>Home page</h1>
      </div>
      <FooterComponents />
    </React.Fragment>
  )
}

export default HomeComponents