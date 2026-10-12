import React from 'react'

function UCCFormDataForm() {

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    console.log(e.target);
    const formData = new FormData(e.target); 
    formData.append("role","student")
    formData.set("password", 12345);
    formData.delete("phno");     //null 


    // console.log(formData.get("fullName"));
    // console.log(formData.get("email"));
    // console.log(formData.get("phno"));
    // console.log(formData.get("password"));
    // console.log(formData.get("dob"));
    // console.log(formData.get("Gender"));
    // console.log(formData.get("address"));
    // console.log(formData.get("role"));

    const data = {};
    for(let [key,value] of formData.entries()){
    // console.log(key,value)
    data[key]=value;
    }
    console.log(data);
    
  // fetch("/registration", {
  //   method:POST,
  //   headers:{
  //     "Content-Type": "application/json"
  //   },
  //   body: data
  // });
};

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
    <form encType="multipart/form-data" onSubmit={handleSubmit} className='bg-white flex flex-col md:flex-row justify-center items-stretch p-2'>
    {/* leftside */}
      <div className='bg-[crimson] flex flex-col justify-start items-center md:w-100'>
        <div className='bg-blue-800 h-50 w-50 rounded-full overflow-hidden md:mt-20'>
          <input  type='file' id='profileUpload' name="profileImage" hidden />
          <label htmlFor='profileUpload' className='cursor-pointer'>
            <img src='/avtar.png' alt='Profile Upload' className='w-full h-full'/>
          </label>
        </div>
        <h1>Upload Photo</h1>
      </div>
      {/* right side */}
      <div className=' bg-cyan-950 text-amber-50 md:w-100 p-2'>
      <div className='flex justify-center items-center'>
          <h1 className='font-bold text-2xl p-5'>Fill Your Details</h1>
        </div>
        <div className='space-y-4'>
          <div>
            <label htmlFor='fullname' className={Style.labelStyle}>Full Name</label>
            <input type='text' id='fullname' name='fullName' placeholder='Enter Full Name' className={Style.inputTypeStyle.text}/>
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
            <label htmlFor='address'>Address</label>
            <textarea id='address' name='address' placeholder='Enter Address' className={Style.inputTypeStyle.text}/>
          </div>
          <div className='flex justify-around items-center'>
            <input type='submit' className={Style.inputTypeStyle.submit}/>
            <input type='reset' className={Style.inputTypeStyle.reset}/>
          </div>  
        </div>
      </div>
    </form>
  )
}

export default UCCFormDataForm





