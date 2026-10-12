import React, { useState } from 'react'

function ControlledComponent() {

  const [inputData, setInputData] = useState({});
  const Style ={
      inputTypeStyle:{
      text:"border border-amber-100 outline-none rounded-xl w-full px-4 py-2",
      color:"block rounded-full overflow-hidden w-12 h-12 cursor-pointer",
      range:"block",
      submit:"p-4 mb-5 bg-[green] rounded-xl w-25",
      reset:"p-4 mb-5 bg-[yellow] rounded-xl w-25"
      },
      labelStyle: "block mb-1"
  } 

  return (
    <div className='bg-white flex justify-center item-center gap-5 p-2 rounded-4xl'>
        <form className='bg-white flex flex-col justify-center item-center gap-5 border p-2 rounded'>
            <div>
                <div className='border-2 border-black bg-black w-50 h-50 rounded-full overflow-hidden'>
                    <img src='/avtar.png' className='h-full w-full'/>
                </div>                
            </div>
            <div>
              <div>
            <label htmlFor='fullname' className={Style.labelStyle}>Full Name</label>
            <input type='text' id='fullname' name='fullName' placeholder='Enter Full Name' className={Style.inputTypeStyle.text}/>
          </div>
          <div>
            <label htmlFor='fullname' className={Style.labelStyle}>Profile Photo</label>
            <input type='file' capture="user" id='fullname' name='fullName' placeholder='Enter Full Name' className={Style.inputTypeStyle.text}/>
          </div>
          <div>
            <label htmlFor='email' className='block'>Enter Email</label>
            <input type='email' id='email' name='email' placeholder='Email' className={Style.inputTypeStyle.text}/>
          </div>
          <div>
            <label htmlFor='phno' className='block'>Enter Phone Number</label>
            <input type='tel' id='phno' name='phno' placeholder='Phone Number' className={Style.inputTypeStyle.text}/>
          </div>
          <div>
            <label htmlFor='password' className='block'>Enter Password</label>
            <input type='password' id='password' name='password' placeholder='Password' className={Style.inputTypeStyle.text}/>
          </div>
          <div>
            <label htmlFor='dob'>Select DOB</label>
            <input type='date' id='dob' name='dob' placeholder='Age' className={Style.inputTypeStyle.text}/>
          </div>

          <div>
            <label htmlFor='fullname'> Choose Gender</label>
            <div className='flex justify-center items-center gap-5'>
              <label htmlFor='Male' className='inline'> Male</label>
                <input type='radio' id='Male' name='Gender' value="Male"/>
              <label htmlFor='fullname' className='inline'> Female</label>
                <input type='radio' id='fullname' name='Gender' value="Female" />
            </div>
          </div>
          <div>
            <label htmlFor='fullname'>Specialization</label>
            <select name='Specialization' className='block bg-[blue] text-center w-full' >
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Software Development">Software Development</option>
              <option value="Backend Dewelopment">Backend Dewelopment</option>
            </select>
          </div>
          <div className='space-y-4 gap-5'>
            <label htmlFor='fullname'>Notifications Preferences</label>
            <div className='flex justify-start items-center gap-3'>
              <label htmlFor='Male' className='inline'>Email alerts</label>
                <input type='checkbox' id='Male' name='Notifications' value="Email alerts"/>
              <label htmlFor='fullname' className='inline'>SMS</label>
                <input type='checkbox' id='fullname' name='Notifications' value="SMS" />
              <label htmlFor='Male' className='inline'>WhatsApp</label>
                <input type='checkbox' id='Male' name='Notifications' value="WhatsApp"/>
            </div>
          </div>
          <div>
            <label htmlFor='color'>Choose Favorite Color</label>
            <input type='color' id='color' name='color'placeholder='Country' className={Style.inputTypeStyle.color}/>
          </div>
          <div>
            <label htmlFor='Experience'>Experience</label>
            <input type='range' min="0" max="100" id='Experience' name='Experience' placeholder='Experience' className={Style.inputTypeStyle.range}/>
          </div>
          <div>
            <label htmlFor='address'>Address</label>
            <textarea id='address' name='address' placeholder='Enter Address' className={Style.inputTypeStyle.text}/>
          </div>
          <div className='flex justify-around items-center'>
            <input type='submit' className={Style.inputTypeStyle.submit}/>
            <input type='reset' className={Style.inputTypeStyle.reset}/>
          </div>
            </div>
        </form>
    </div>
  )
}

export default ControlledComponent