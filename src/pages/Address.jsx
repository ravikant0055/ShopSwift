import React from "react";
import "./Address.css";
import { useForm } from "react-hook-form";

const Address = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const formSubmit = (data) => {
    console.log(data);
  };

  const validateMobileNumber = (value) => {
    const isValid = /^\d{10}$/.test(value);
    return isValid || "Please enter a 10-digit mobile number.";
  };

  const validatePinCode = (value) => {
    const isValid = /^\d{6}$/.test(value);
    return isValid || "Please enter a correct PinCode.";
  };
  return (
    <>

        <div className="addressTitle">
            USER ADDRESS
        </div>
        <hr style={{marginLeft:"30%", marginRight:"30%"}}/>

      <div className="mainClass">
        <form
          className="formAddress"
          onSubmit={handleSubmit(formSubmit)}
          noValidate
        >
          <div className="addName">
            <div className="firtName">
              <input
                type="text"
                id="name"
                placeholder="First Name*"
                {...register("fname", { required: "First Name is Required" })}
              />
              <p className="error">{errors.fname?.message}</p>
            </div>
            <div className="lastname">
              <input
                type="text"
                id="name"
                placeholder="Last Name*"
                {...register("lname", { required: "Last Name is Required" })}
              />
              <p className="error">{errors.lname?.message}</p>
            </div>
          </div>

          <input
            type="email"
            id="email"
            placeholder="Email Address*"
            {...register("email", { required: "Email is Required" })}
          />
          <p className="error">{errors.email?.message}</p>
          <div className="mob-pin">
            <div className="mobno">
              <input
                type="number"
                id="contactno"
                placeholder="Contact Number*"
                {...register("contactno", {
                  required: "Contact Number is Required",
                  validate: validateMobileNumber,
                })}
              />
              <p className="error">{errors.contactno?.message}</p>
            </div>
            <div className="pincode">
              <input
                type="number"
                id="PinCode"
                placeholder="Pin code*"
                {...register("pincode", {
                  required: "Pin Code is Required",
                  validate: validatePinCode,
                })}
              />
              <p className="error">{errors.pincode?.message}</p>
            </div>
          </div>

          <input
            type="text"
            id="HNo"
            placeholder="House Number*"
            {...register("hno", { required: "House number is Required" })}
          />
          <p className="error">{errors.hno?.message}</p>

          <div className="town-city">
            <div className="town">
              <input
                type="text"
                id="town"
                placeholder="Town*"
                {...register("town", { required: "Town name is Required" })}
              />
              <p className="error">{errors.town?.message}</p>
            </div>
            <div className="city">
              <input
                type="text"
                id="city"
                placeholder="City*"
                {...register("city", { required: "City name is Required" })}
              />
              <p className="error">{errors.city?.message}</p>
            </div>
          </div>
          <input
            type="text"
            id="state"
            placeholder="State*"
            {...register("state", { required: "State name is Required" })}
          />
          <p className="error">{errors.state?.message}</p>

          <div className="checkboxLabel">
            <input
              type="checkbox"
              id="defaultAddress"
              {...register("defaultAddress")}
            />
            <label htmlFor="defaultAddress">Make default address</label>
          </div>

          <button className="addressButton" type="submit">
            Add Address
          </button>
        </form>
      </div>
    </>
  );
};

export default Address;
