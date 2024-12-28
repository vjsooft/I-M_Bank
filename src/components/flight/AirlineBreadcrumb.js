import React, { useState } from "react";
import Data from '../../json-file/data.json'

function AirlineBreadcrumb() {
    const [isActive, setIsActive] =useState('select-flight')

  return (
    <div>
        <ul className="tab-menu search-pg">
            {
                Data.airlineSelectedPage.map((item)=>(
                    <li key={item.id} className={item.active == isActive ? 'active' : null}>
                        <span className="ind-number">{item.id}</span> <span>{item.name}</span>
                    </li>
                ))
            }
        </ul>
    </div>
  );
}

export default AirlineBreadcrumb;
