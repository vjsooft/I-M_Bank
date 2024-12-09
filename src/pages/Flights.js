import React, {useState} from "react";
import data from '../json-file/data.json'
import airlineData from '../json-file/preferredAirline.json'
import PreferredAirlineModal from "../modals/PreferredAirline-Modal";
import DatePicker from "react-datepicker";  
import { useNavigate } from "react-router-dom";
  
import "react-datepicker/dist/react-datepicker.css"; 

function Flights() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(); 
  const [rDate, setRDate] = useState();  
  const [selectedAirline, setSelectedAirline] = useState()
  const [flightField, SetFlightField] =useState({
    tripCategory:"roundtrip",
    prefered_airline:"",
    originlocation:"",
    destinationlocation:"",
    cabin:"economy",
    departuredatetime:"",
    returningdatetime:"",
    adt:1,
    cnn:0,
    inf:0,
    stop:""
  })
  const [errors, setErrors] = useState({
    // tripCategory:"",
    originlocation:"",
    destinationlocation:"",
    departuredatetime:"",
    // returningdatetime:"",
    // prefered_airline:"",
    // cabin:"",
    // adt:"",
    // cnn:"",
    // inf:"",
    // stop:""
  });
  const dateToday = new Date();

  const handelChange =(e)=>{
    const {name, value} = e.target
    
    SetFlightField({
      ...flightField,
      [name]:value
    })
  }
  const validate =()=>{
    const newError = {}
    if(!flightField.originlocation){
      newError.originlocation = "Enter your origin location"

    }
    if(!newError.destinationlocation){
      newError.destinationlocation = "Enter your destination location"
    }
    if(!newError.departuredatetime){
      newError.departuredatetime = "Select your date"
    }
    // if(!newError.departuredatetime){
    //   newError.departuredatetime = "Select your date"
    // }
    return newError;
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const dataToSend = {
      ...flightField,
      departuredatetime : startDate,
      returningdatetime:rDate,
      prefered_airline: flightField.prefered_airline ? flightField.prefered_airline :selectedAirline  

    };
    if (!validate()) {
      return; 
    } else{
   console.log("Form data submitted:", dataToSend);
      setErrors({});
      navigate("/SearchingFlights");
    }
  
    // console.log("Form data submitted:68", dataToSend);
    // const validationErrors = validate();
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   // 
    // } else {
    //   // console.log("Form data submitted:", flightField);
    //   setErrors({});
    //   // if(logStatus){
    //   //   navigate("/myaccount");
    //   // }
    // }
   
  }
  
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 outer-bg-box">
          <div className="flight-book-form" id="flightBookingPage">
            <h1>book a flight</h1>
            <form className="row" onSubmit={handleSubmit}>
              <div className="form-group cus-select-arrow">
                <label htmlFor="tripCategory">Flight type</label>
                <select className="form-control" name="tripCategory" onChange={handelChange}>
                  {data.tripCategory.map((airline) => (
                      <option key={airline.id} value={airline.value} selected={airline.id === 2}>
                      {airline.name}
                      </option>
                  ))}
                </select>
              </div>
              <div className="form-group cus-select-arrow">
                <label htmlFor="prefered_airline">select preferred Airline</label>
                <select className="form-control" name="prefered_airline" onChange={handelChange}>
                  <option value="">No preference</option>
                  {airlineData.map((airline) => (
                      <option key={airline.id} value={airline.selectedAirlineCode} selected={airline.selectedAirlineCode==selectedAirline}>
                        {airline.airline_name}
                      </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="originlocation">Flying from</label>
                <input
                  type="text"
                  name="originlocation"
                  className={errors.originlocation ? 'form-control error' : "form-control"}
                  value={flightField.originlocation}
                  onChange={handelChange}
                />
                 {errors.originlocation && (
                  <span style={{ color: "red" }}>{errors.originlocation}</span>
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
                />
                {errors.destinationlocation && (
                  <span style={{ color: "red" }}>{errors.destinationlocation}</span>
                )}
              </div>
              <div className="form-group cus-select-arrow">
                <label htmlFor="cabin">Cabin</label>
                <select className="form-control" name="cabin" onChange={handelChange}>
                  {data.cabinClass.map((cabinClass) => (
                      <option key={cabinClass.id} value={cabinClass.value} selected={cabinClass.id == 1}>
                        {cabinClass.name}
                      </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="departuredatetime"> Departure Date</label>
                <DatePicker 
                className={errors.departuredatetime ? 'form-control d-icon error' : "form-control d-icon"}
                name="departuredatetime" 
                id="departuredatetime" 
                selected={startDate} 
                onChange={(date) =>  setStartDate(date)} 
                value={startDate}
                dateFormat='yyyy-MM-dd'
                minDate={dateToday}
                autocomplete="off"
                // selectsRange
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                />  
                {errors.departuredatetime && (
                  <span style={{ color: "red" }}>{errors.departuredatetime}</span>
                )}
              </div>
              {
                flightField.tripCategory == "roundtrip" ?
                <div className="form-group">
                <label htmlFor="returningdatetime">Return Date</label>
                <DatePicker 
                className="form-control d-icon" 
                name="returningdatetime" 
                id="returningdatetime" 
                selected={rDate} 
                onChange={(date) =>  setRDate(date)} 
                value={rDate}
                autocomplete="off"
                dateFormat='yyyy-MM-dd'
                minDate={dateToday}
                autoComplete={false}
                // selectsRange
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                />  
                {errors.returningdatetime && (
                  <span style={{ color: "red" }}>{errors.returningdatetime}</span>
                )}
              </div> : null
              }
              
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
    <PreferredAirlineModal  setSelectedAirline={setSelectedAirline}/>
    </>
  );
}

export default Flights;
