import React from 'react'
import '../../themes/form.css'

const Form = () => {
  return (
    <div className='formDiv'>

        <h2 className='formHeader'>Report Problems, Ask Questions OR Leave a Feedback</h2>

        <form className='mainForm'>
          <div className='form-group '>
            <label>Name</label>
            <input
              className='name'
              type='Fullname' 
              name='Fullname'
             />
          </div>

          <div className='form-group'>
            <label>Message</label>
          <input
              className='message'
              type='Message' 
              name='Message'
            />
          </div>

          <button className='form-button'>Send</button>
        </form>
    </div>
  )
}

export default Form