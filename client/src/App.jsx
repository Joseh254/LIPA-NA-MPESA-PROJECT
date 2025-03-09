import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { API_URL } from "../utills/Config";
import "./app.css";

function App() {
  const [loading, SetIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const formik = useFormik({
    initialValues: { phone: "", amount: "" },
    onSubmit: async function (values) {
      console.log("Sending data:", values);
      try {
        SetIsLoading(true)
       const response= await axios.post(`${API_URL}api/stkPush`, {
          phoneNumber: String(values.phone), 
          amount: String(values.amount),
        }, {
          headers: { "Content-Type": "application/json" },
        });
        
        
        console.log(response);
        alert("Payment request sent successfully!");
      } catch (error) {
        
        console.error("Error submitting form:", error);
     
      }finally{SetIsLoading(false)}
    },
    validate: function (values) {
      const errors = {};
      if (!values.phone) {
        errors.phone = "Phone is required";
      } else if (!/^2547\d{8}$/.test(values.phone)) {
        errors.phone = "Enter a valid Safaricom number (e.g., 2547123....)";
      }
      if (!values.amount) {
        errors.amount = "Amount is required";
      } else if (values.amount < 1) {
        errors.amount = "Amount must be at least 1 Ksh";
      }
      return errors;
    },
  });

  return (
    <div className="app">
      <form onSubmit={formik.handleSubmit}>
        <p>Lipa na Mpesa</p>
        <div className="inputs">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your phone number"
          />
          {formik.touched.phone && formik.errors.phone && <p className="errors">{formik.errors.phone}</p>}
        </div>
        <div className="inputs">
          <label>Amount </label>
          <input
            type="number"
            name="amount"
            value={formik.values.amount}
            placeholder="Enter Amount in Ksh"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min="1"
          />
          {formik.touched.amount && formik.errors.amount && <p className="errors">{formik.errors.amount}</p>}
        </div>
        <div className="inputs">
          <button type="submit" disabled={loading}>{loading? "Loading..":"Submit"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
