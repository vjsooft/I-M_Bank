import React, { useEffect, useState } from "react";
import data from '../json-file/data.json';
import airlineData from '../json-file/preferredAirline.json';
import PreferredAirlineModal from "../modals/PreferredAirline-Modal";
import DatePicker from "react-datepicker";  
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css"; 
import AirlineName from '../json-file/airportName.json'
import { useDispatch } from "react-redux";
import { setFlightFormData } from "../redux/Action";

function Flights() {
  const navigate = useNavigate(); 
  const [selectedAirline, setSelectedAirline] = useState();
  const [flightField, SetFlightField] = useState({
    tripCategory: "roundtrip",
    preferedAirline: "",
    originLocation: "",
    destinationlocation: "",
    cabin: "economy",
    departureDate: null,       
    returnDate: null,   
    adt: 1,
    cnn: 0,
    inf: 0,
    stop: ""
  });
  const [errors, setErrors] = useState({});
  const [fromLocation, setFromLocation] = useState(false);
  const [toLocation, setToLocation] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    SetFlightField((prevData) => ({
      ...prevData,
      preferedAirline:selectedAirline
    }));
  },[selectedAirline])

  const handelChange = (e) => {
    const { name, value } = e.target;
    if(e.target.name === 'originLocation'){
      const filter = AirlineName.filter((airport)=>{
        return(
          airport.countryName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
          airport.cityName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
          airport.airportName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
          airport.iataCode.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        )
      })
      setFromLocation(filter)
    }
    if(e.target.name === 'destinationlocation'){
      const filter = AirlineName.filter((airport)=>{
        return(
          airport.countryName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
          airport.cityName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
          airport.airportName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
          airport.iataCode.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        )
      })
      setToLocation(filter)
    }
  
   

    SetFlightField((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const setFromDesination=(airportName, cityName)=>{
    
    SetFlightField((prevData) => ({
      ...prevData,
      originLocation:`${airportName} (${cityName})`,
    }));
    setFromLocation(false)
  }
  const setToDesination=(destinationName, destinationCity)=>{
    SetFlightField((prevData) => ({
      ...prevData,
      destinationlocation:`${destinationName} (${destinationCity})`
    }));
    setToLocation(false)
  }

  const handleDateChange = (name, date) => {
    SetFlightField((prevData) => ({
      ...prevData,
      [name]: date,
    }));
  };
  const validate = () => {
    const newError = {};
    
    if (!flightField.originLocation) {
      newError.originLocation = "Enter your origin location";
    }
    
    if (!flightField.destinationlocation) {
      newError.destinationlocation = "Enter your destination location";
    }

    if (!flightField.departureDate) {
      newError.departureDate = "Please select a departure date.";
    }

    if (flightField.tripCategory === "roundtrip" && !flightField.returnDate) {
      newError.returnDate = "Please select a return date.";
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (!validationErrors) {
      return; 
    } else {
      setErrors({});
      // setLoader(true)
      dispatch(setFlightFormData(flightField));
      navigate("/SearchingFlights");
      // setLoader(false)
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 outer-bg-box">
            <div className="flight-book-form" id="flightBookingPage">
              <h1>Book a flight</h1>
              <form className="row" onSubmit={handleSubmit}>
                <div className="form-group cus-select-arrow">
                  <label htmlFor="tripCategory">Flight type</label>
                  <select
                    className="form-control"
                    name="tripCategory"
                    onChange={handelChange}
                    value={flightField.tripCategory}
                  >
                    {data.tripCategory.map((airline) => (
                      <option key={airline.id} value={airline.value}>
                        {airline.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group cus-select-arrow">
                  <label htmlFor="preferedAirline">Select preferred Airline</label>
                  <select
                    className="form-control"
                    name="preferedAirline"
                    onChange={handelChange}
                    value={flightField.preferedAirline}
                  >
                    <option value="">No preference</option>
                    {airlineData.map((airline) => (
                      <option key={airline.id} value={airline.selectedAirlineCode}>
                        {airline.airline_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="originLocation">Flying from</label>
                  <input
                    type="text"
                    name="originLocation"
                    className={errors.originLocation ? 'form-control error' : "form-control"}
                    value={flightField.originLocation}
                    onChange={handelChange}
                    autoComplete='off'
                  />
                  
                  {
                  fromLocation ?
                        <ul className="airport-name">
                        {
                          fromLocation?.map((item)=>(
                            <li className="item" key={item.iataCode} onClick={()=>setFromDesination(item.airportName,item.cityName)}>{item.airportName}</li>
                          ))
                        }
                        </ul> 
                    : null
                  }
                
                  {errors.originLocation && (
                    <span style={{ color: "red" }}>{errors.originLocation}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="destinationlocation">Flying to</label>
                  <input
                    type="text"
                    name="destinationlocation"
                    className={errors.destinationlocation ? 'form-control error' : "form-control"}
                    value={flightField.destinationlocation}
                    onChange={handelChange}
                    autoComplete='off'
                  />
                   {
                    toLocation ?
                          <ul className="airport-name">
                          {
                            toLocation?.map((item)=>(
                              <li className="item" key={item.iataCode} onClick={()=>setToDesination(item.airportName, item.cityName)}>{item.airportName}</li>
                            ))
                          }
                          </ul> 
                      : null
                  }
                  {errors.destinationlocation && (
                    <span style={{ color: "red" }}>{errors.destinationlocation}</span>
                  )}
                </div>
                <div className="form-group cus-select-arrow">
                  <label htmlFor="cabin">Cabin</label>
                  <select className="form-control" name="cabin" onChange={handelChange}>
                    {data.cabinClass.map((cabinClass) => (
                        <option key={cabinClass.id} value={cabinClass.value} defaultValue={cabinClass.id === 1}>
                          {cabinClass.name}
                        </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="departureDateTime">Departure Date</label>
                  <DatePicker
                    selected={flightField.departureDate}
                    onChange={(date) => handleDateChange("departureDate", date)}
                    className={`form-control ${errors.departureDate ? 'form-control d-icon error' : "form-control d-icon"}`}
                    dateFormat="yyyy-MM-dd"
                    minDate={new Date()}
                    showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  />
                   {errors.departureDate && (
                    <span style={{ color: "red" }}>{errors.departureDate}</span>
                  )}
                </div>

                {flightField.tripCategory === "roundtrip" && (
                  <div className="form-group">
                    <label>Return Date</label>
                    <DatePicker
                      selected={flightField.returnDate}
                      onChange={(date) => handleDateChange("returnDate", date)}
                      className={`form-control ${errors.returnDate ? 'form-control d-icon error' : "form-control d-icon"}`}
                      dateFormat="yyyy-MM-dd"
                      minDate={flightField.departureDate || new Date()}
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                    />
                     {errors.returnDate && (
                    <span style={{ color: "red" }}>{errors.returnDate}</span>
                  )}
                  
                  </div>
                )}

                <div className="form-group cus-select-arrow">
                    <label htmlFor="adt">Adult (18-64)</label>
                    <select className="form-control" name="adt" onChange={handelChange}>
                      {data.adtVal.map((airlineAdt) => (
                          <option key={airlineAdt.id} value={airlineAdt.value}>
                          {airlineAdt.value}
                          </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group cus-select-arrow">
                    <label htmlFor="cnn">Child (2-11 years)</label>
                    <select className="form-control" name="cnn" onChange={handelChange}>
                      {data.infVal.map((airlineCnn) => (
                          <option key={airlineCnn.id} value={airlineCnn.value}>
                          {airlineCnn.value}
                          </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group cus-select-arrow">
                    <label htmlFor="inf">Infant (0-2 years) </label>
                    <select className="form-control" name="inf" onChange={handelChange}>
                      {data.infVal.map((airlineInf) => (
                          <option key={airlineInf.id} value={airlineInf.value}>
                          {airlineInf.value}
                          </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group cus-select-arrow">
                    <label htmlFor="stop">Stops </label>
                    <select className="form-control" name="stop" onChange={handelChange}>
                      <option value="">No preference</option>
                      {data.flightStop.map((airlineStop) => (
                          <option key={airlineStop.id} value={airlineStop.value}>
                          {airlineStop.name}
                          </option>
                      ))}
                    </select>
                  </div>

                <div className="form-group">
                  <button type="submit" className="btn cus-default-btn">Search flights</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <PreferredAirlineModal setSelectedAirline={setSelectedAirline} />
      {/* {
        loader ? <LoaderFlight flightField={flightField}/> : null
      } */}
      
    </>
  );
}

export default Flights;
