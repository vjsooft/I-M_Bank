import React, {useEffect, useState} from 'react'
import AirlineBreadcrumb from '../components/flight/AirlineBreadcrumb'
import AirlineFilter from '../components/flight/AirlineFilter'
import AirlineModifySearch from '../components/flight/AirlineModifySearch'
import LoaderFlight from '../components/flight/LoaderFlight'
// import { useSelector } from 'react-redux'

import AirlineResultData from '../components/flight/AirlineResultData'

function SearchingFlights() {
  // const airlineData = useSelector((state)=>state)
  // console.log('======airlineData======',airlineData);
  
  const [loader, setLoader] = useState(true)
  const [airlineFilterActive, setAirlineFilterActive] = useState(false)
  const [modifySearchActive, setModifySearch] = useState(false)
  const [airlineReload, setAirlineReload] = useState (false)

  useEffect(()=>{},[airlineFilterActive])
  useEffect(()=>{},[modifySearchActive])

  const updateModifySearch = ()=>{
    setLoader(true)
    setTimeout(()=>{
      
      setLoader(false)
    },5000)
    setAirlineReload(true)
    
    
  }
  return (
    <>
    
    {
      loader ? <LoaderFlight /> : null
    } 

    <div className={airlineFilterActive ? 'container mt-space cus-filter-active' : modifySearchActive ? 'container mt-space cus-search-active' : 'container mt-space'}>
      <AirlineBreadcrumb/>
      <div className='cus-box-shadow'>
        <div className='d-flex align-items-center justify-content-between'>
          <span onClick={()=> setAirlineFilterActive(!airlineFilterActive)}>Filter <i className="fa fa-filter" aria-hidden="true"></i></span>
          <span></span>
          <span onClick={()=> setModifySearch(!modifySearchActive)}> Modify Search <i className="fa fa-search" aria-hidden="true"></i></span>
        </div>
        <AirlineFilter closeModal={setAirlineFilterActive} />
        <AirlineModifySearch closeModal={setModifySearch} updateModifySearch={updateModifySearch}/>
        <AirlineResultData popupLoader={setLoader} airlineReload={airlineReload}/>
      </div>
    </div>
    </>
  
  )
}

export default SearchingFlights
