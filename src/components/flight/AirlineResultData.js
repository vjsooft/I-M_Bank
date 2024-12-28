import React, { useEffect, useState } from "react";
import FlightSearch from "../../json-file/flightSearch.json";
import { useSelector } from "react-redux";
import moment from "moment";

function AirlineResultData({ popupLoader, airlineReload }) {
  const flightData = useSelector((state) => state.flightBookingForm.formData);
  const [airlineShow, setAirlineShow] = useState();
  const originLocation = flightData.originLocation;
  const destinationlocation = flightData.destinationlocation;
  const departureDate = moment(flightData.departureDate).format("Y-M-D");
  const returnDate = moment(flightData.returnDate).format("Y-M-D");
  const regex = /\(([^)]+)\)/;
  const result = originLocation.match(regex);
  const result2 = destinationlocation.match(regex);
  const finalOriginLocation = result ? result[1] : "";
  const finalDestinationlocation = result2 ? result2[1] : "";

  const airlineFilter = FlightSearch.filter((airlineResultData) => {
    return (
      airlineResultData.route.departure_city
        .toLocaleLowerCase()
        .includes(finalOriginLocation.toLocaleLowerCase()) &&
      airlineResultData.route.arrival_city
        .toLocaleLowerCase()
        .includes(finalDestinationlocation.toLocaleLowerCase()) &&
      moment(airlineResultData.departure.time)
        .format("Y-M-D")
        .includes(departureDate)
    );
  });
  useEffect(() => {
    if (airlineReload) {
      setAirlineShow(airlineFilter);
      console.log("==============airlineReload===========", airlineReload);
    }
  },[airlineReload]);

  useEffect(() => {
    setTimeout(() => {
      popupLoader(false);
    }, 1000);
    setAirlineShow(airlineFilter);
  }, [popupLoader]);

  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          {
            airlineShow?.length ?
            <div className="filtersec">{airlineShow?.length} flight(s) found</div> :
            null
          }
        </div>
        {
          airlineShow?.length ?
          airlineShow?.map((airlines) => (
            <div className="col-sm-12">
              <div className="flightWayResultOuter d-flex">
                <img src={airlines.logo_url} className="img-fluid" />
                <span className="text-center">
                  <div>{moment(airlines.departure.time).format("hh:mm A")}</div>
                  <div>{airlines.airline}</div>
                  <div>
                    {moment(airlines.departure.time).format("ddd DD, MMM YYYY")}
                  </div>
                  <div>{airlines.route.departure_city}</div>
                  <div>( {airlines.route.departure_airport} )</div>
                </span>
                <span className="text-center">
                  <div>{airlines.duration}</div>
                  <div>{airlines.stops === 0 ? "NONSTOP" : null}</div>
                </span>
                <span className="text-center">
                  <div>{moment(airlines.arrival.time).format("hh:mm A")}</div>
                  <div>{airlines.airline}</div>
                  <div>
                    {moment(airlines.arrival.time).format("ddd DD, MMM YYYY")}
                  </div>
                  <div>{airlines.route.arrival_city}</div>
                  <div>( {airlines.route.arrival_airport} )</div>
                </span>
                <span className="text-center">
                  <button className="btn cus-default-btn">select</button>
                  <div>{airlines.price.amount}</div>
                  <div>I&M Milele Points</div>
                </span>
              </div>
            </div>
          )) :
          <p className="text-center mt-3 mb-3">No record found</p>
        }
      </div>
    </div>
  );
}

export default AirlineResultData;
