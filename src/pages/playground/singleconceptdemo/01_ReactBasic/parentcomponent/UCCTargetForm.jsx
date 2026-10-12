import React from 'react'

function UCCTargetForm() {

  const handleSubmit = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    // console.log(e.target.elements);

    //Data collect  Manually
      // console.log(e.target.elements.fullName.value);
      // console.log(e.target.elements.email.value);
      // console.log(e.target.elements.phno.value);
      // console.log(e.target.elements.password.value);
      // console.log(e.target.elements.dob.value); 
      // console.log(e.target.elements.gender.value);
      // console.log(e.target.elements.address.value);
      // console.log(e.target.elements.profileImage.files);
      // console.log(e.target.elements.profileImage.files[0]);

      const data = {
        fullName: e.target.elements.fullName.value,
        email: e.target.elements.email.value,
        phno: e.target.elements.phno.value,
        password: e.target.elements.password.value,
        dob: e.target.elements.dob.value,
        gender: e.target.elements.gender.value,
        address: e.target.elements.address.value,
        profileImage: e.target.elements.profileImage.files[0],
      }
      console.log(data);

    //Print actualData of file.
      // const file = e.target.elements.profileImage.files[0];
      // const text = await file.text();
      // console.log(text);
      // const buffer = await file.arrayBuffer(); 
      // console.log(buffer);
      // const bytes = new Uint8Array(buffer);
      // console.log(bytes);

    // imagePreview
      // if (!file) return;              //Method 1
      // if (preview) {
      //   URL.revokeObjectURL(preview);
      // }
      // const imageUrl = URL.createObjectURL(file);
      // setPreview(imageUrl);

      // Base64                            //Method 1
      // const reader = new FileReader();
      // reader.onload = () => {
      //   console.log(reader.result);
      // setPreview(reader.result);
      // };
      // reader.readAsDataURL(file);

    fetch("/registration", {
      method:POST,
      headers:{
        "Content-Type": "application/json"
      },
      body: data
    });
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
            <label htmlFor='gender'> Choose Gender</label>
            <div className='flex justify-center items-center gap-5'>
              <label htmlFor='Male' className='inline'> Male</label>
                <input type='radio' id='Male' name='gender' value="Male"/>
              <label htmlFor='Female' className='inline'> Female</label>
                <input type='radio' id='Female' name='gender' value="Female" />
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

export default UCCTargetForm





