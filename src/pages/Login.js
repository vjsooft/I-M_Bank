import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [logStatus, SetLogStatus]= useState(true);
  const [loginField, SetLoginField] = useState({
    memberid: "",
    memberpwd: "",
  });
  const [errors, setErrors] = useState({
    memberid: "",
    memberpwd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetLoginField({
      ...loginField,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!loginField.memberid) {
      newErrors.memberid = "Enter your member id";
    }
    if (!loginField.memberpwd) {
      newErrors.memberpwd = "Enter your password";
    } else if (loginField.memberpwd.length < 6) {
      newErrors.memberpwd = "Password must be at least 6 characters";
    }
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // 
    } else {
      console.log("Form data submitted:", loginField);
      setErrors({});
      if(logStatus){
        navigate("/myaccount");
      }
    }
  };

  return (
    <div className="container main-div-hight">
      <div className="row">
        <div className="col">
          <div className="login-content">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center">Login</h1>
              <div className="mb-3">
                <label htmlFor="text" className="form-label">Enter I&M A/C no./Username</label>
                <input type="text"
                  className="form-control"
                  id="memberid" name="memberid"
                  value={loginField.memberid}
                  onChange={handleChange}
                  onBlur={validate}
                />
                {errors.memberid && (
                  <span style={{ color: "red" }}>{errors.memberid}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Enter password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="memberpwd"
                  name="memberpwd"
                  value={loginField.memberpwd}
                  onChange={handleChange}
                  onBlur={validate}
                />
                   {errors.memberpwd && (<span style={{ color: "red" }}>{errors.memberpwd}</span>)}
              </div>
              <button type="submit" className="btn cus-btn">Submit </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
