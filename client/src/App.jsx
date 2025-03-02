import React from 'react'
import './app.css'

function App() {
  return (
    <div className='app'>
      
      <form> 
        <p>Lipa na Mpesa</p>
        <div className="inputs">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="inputs">
          <label>Amount</label>
          <input type="text" />
        </div>
        <div className="inputs">
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App