import React from "react";

function AirlineFilter(props) {
  return (
    <div className="filter-modal">
      <h1 className="d-flex align-items-center justify-content-between">
        Filter
        <span onClick={() => props.closeModal()}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
      </h1>
      <h4><span class="checkData">I&M Milele Points</span></h4>
      <h4><span class="checkData">Airlines </span></h4>
      <h4><span class="checkData">Stops</span></h4>
      <h4><span class="checkData">Departure time</span></h4>
      <h4><span class="checkData">Arrival time</span></h4>
    </div>
  );
}

export default AirlineFilter;
