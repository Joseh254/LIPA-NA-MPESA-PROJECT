import React from 'react'
import { useFormik } from 'formik'
import './app.css'

function App() {
  const formik = useFormik({
    initialValues:{name:"", amount:""},
    onSubmit:async function (values) {
      console.log(formik.values);
      
    },
    validate:function(values){
      const errors = {};
      if (!values.name){errors.name = "name is required"}
      if(!values.amount){errors.amount = "amount is required"}
    }
  })
  return (
    <div className='app'>
      
      <form onSubmit={formik.handleSubmit}> 
        <p>Lipa na Mpesa</p>
        <div className="inputs">
          <label>Name</label>
          <input type="text" 
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Enter your Name'
          />
        </div>
        <div className="inputs">
          <label>Amount </label>
          
          <input type="number"
          name='amount'
          value={formik.values.amount}
          placeholder='Enter Amount in Ksh'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          />
        </div>
        <div className="inputs">
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App