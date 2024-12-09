import React, { useState } from 'react'
import data from '../json-file/data.json'

function PreferredAirlineModal(props) {
    const [show, setShow] = useState(true);
    
    const selectPrefAirli =(id)=>{
      props.setSelectedAirline(id)
      setShow(false)
    }
    
  return (
  
<div className={show ? "cus-preferred-airline-modal modal fade show" : "cus-preferred-airline-modal modal "} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Choose your preferred airline</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShow(!show)}></button>
      </div>
      <div className="modal-body">
        <ul className="list-group">
            {
                data.selectedPreferredAirline.map((item)=>(
                    <li key={item.id} className="list-group-item" onClick={()=> selectPrefAirli(item.selectedAirlineCode)}>
                        <span><img src={item.airlineImg} /></span>
                        <span>{item.airline_name}</span>
                    </li>
                ))

            } 
        </ul>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn" data-bs-dismiss="modal" onClick={() => setShow(!show)}>  Other airlines
        </button>
      </div>
    </div>
  </div>
</div>
  
  )
}

export default PreferredAirlineModal
