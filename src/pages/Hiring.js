import React, { useState } from 'react'
import Footer from '../components/Footer'
import { toast } from 'react-toastify';

function Hiring() {
  const [formData, setFormData] = useState({
    fullName: '',email: '', phoneNumber: '',state:'',country:'',city:'',address:'',qualification:'',experience:'',additionalInfo:''
  });

  // const handleChange = (e) => {
  //   const {type, name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleChange=(event)=>{
    const{type,name,value,checked}=event.target;
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]:type==="checkbox"?checked:value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const savedUserResponse = await fetch(
        `${process.env.REACT_APP_BASE_URL}/createTeacher`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        }
      );
  
      if (savedUserResponse.ok) {
        console.log("Form submitted successfully!");
        toast.success("Registered Successfully Our team will contact you soon")
        // Perform any necessary actions upon successful submission
      } else {
        console.log("Form submission failed with status:", savedUserResponse.status);
        toast.error("Some error occurred kindly check your device internet 😭")
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Some error occurred kindly check your device internet 😭")
    }

    // Perform form submission logic here
    console.log(formData);
    setFormData({
      fullName: '',email: '', phoneNumber: '',state:'',country:'',city:'',address:'',qualification:'',experience:'',additionalInfo:''
    });
  };
  return (
    <div>
    <div className="form-container mx-auto  ">
      <h2>Register for Teaching</h2>
      <form className="enrollment-form" onSubmit={handleSubmit}>
        <div className="form-group"> 
          <label htmlFor="fullName" className="required">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        <div className=" form-group formcss  flex relative flex-row gap-10">
          <div className='flex flex-col w-[50%] formcsstext'>
                <label htmlFor="email" className="required" >Email Address</label>
                <input
                className='w-full'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
                />
          </div>
          <div className='flex flex-col w-[50%] formcsstext'>
          <label htmlFor="phoneNumber" className="required">Phone Number</label>
        
          <input
            type="number"
            id=" phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
          </div>
        </div>
        
        <div className=" flex relative formcss  flex-row gap-10">
          <div className='flex flex-col w-[50%] formcsstext '>
                <label htmlFor="address" className="required">Address</label>
                <input
                className='w-full'
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
                />
          </div>
          <div className='flex flex-col w-[50%] formcsstext'>
          <label htmlFor="city" className="required">City</label>
        
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City Name"
            required
          />
          </div>
        </div>
        <br></br>
        <div className=" flex relative formcss  flex-row gap-10">
          <div className='flex flex-col w-[50%] formcsstext '>
                <label htmlFor="state" className="required">State</label>
                <input
                className='w-full'
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
                required
                />
          </div>
          <div className='flex flex-col w-[50%] formcsstext'>
          <label htmlFor="country" className="required">Country</label>
        
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter Country Name"
            required
          />
          </div>
        </div>

        <br></br>


        <div className="form-group"> 
          <label htmlFor="qualification" className="required">Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Enter your qualification"
            required
          />
        </div>
       
        <div className="form-group">
            <label htmlFor="experience" className="required">Experience</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Enter your experience"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalInfo" >Additional info</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Enter your additional information"
              
            />
          </div>





        

        <button type="submit" >Submit</button>
      </form>
     
    </div>
     <Footer/>
     </div>
  )
}

export default Hiring