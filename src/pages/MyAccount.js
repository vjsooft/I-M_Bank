import React from 'react'
import UserDtl from '../components/my-account/UserDtl'
import HeaderMenu from '../components/my-account/HeaderMenu'
import OfferSlider from '../components/my-account/OfferSlider'
import TabList from '../components/my-account/TabList'

function MyAccount() {
  return (
    <div className='container main-div-hight'>
      <UserDtl/>
      <HeaderMenu/>
      <OfferSlider/>
      <TabList/>
    </div>
  )
}

export default MyAccount
