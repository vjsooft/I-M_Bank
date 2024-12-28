import React, {useState} from "react";
import Loader from "../../share-components/Loader";
import moment from 'moment';
import { useSelector } from "react-redux";

function LoaderFlight() {
  const flightData = useSelector((state)=> state.flightBookingForm.formData);
  
  const [show, setShow] = useState(true);
  const originLocation = flightData.originLocation
  const destinationlocation = flightData.destinationlocation
  const departureDate = moment(flightData.departureDate).format('dddd, D MMM, YYYY');
  const returnDate = moment(flightData.returnDate).format('dddd, D MMM, YYYY');
  const regex = /\(([^)]+)\)/;
  const result = originLocation.match(regex);
  const result2 = destinationlocation.match(regex);
  const finalOriginLocation = result ? result[1] : '';
  const finalDestinationlocation = result2 ? result2[1] : '';
  
  return (
    <div className={show ? "cus-airline-modal modal fade show" : "cus-airline-modal modal "} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <p className="text-center">Loading your flight search results ...</p>
            <Loader/>
            <ul className="text-center">
              {
                flightData.tripCategory === "roundtrip" ?
                <>
                  <li className="item">
                    <span>{finalOriginLocation}</span>
                    <span className="arrow"></span>
                    <span className="cityName">{finalDestinationlocation}</span>
                    <span>{departureDate}</span>
                  </li>
                  <li className="item">
                      <span>{finalDestinationlocation}</span>
                      <span className="arrow"></span>
                      <span className="cityName">{finalOriginLocation}</span>
                      <span>{returnDate}</span>
                  </li>
                  <li><strong>Passenger(s):</strong> {flightData.adt} Adult(s) | <strong>Class:</strong> {flightData.cabin}</li>
                </> :
                <>
                  <li className="item">
                    <span>{finalOriginLocation}</span>
                    <span className="arrow"></span>
                    <span>{finalDestinationlocation}</span>
                    <span className="arrow"></span>
                    <span>{departureDate}</span>
                  </li>
                  <li><strong>Passenger(s):</strong> {flightData.adt} Adult(s) | <strong>Class:</strong> {flightData.cabin}</li>
                </>
              }
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoaderFlight;
