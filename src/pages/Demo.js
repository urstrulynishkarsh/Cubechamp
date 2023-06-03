import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { toast } from 'react-toastify';
// import { Await } from 'react-router-dom';

function Demo() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    email: '',
    phoneNumber: '',
    age: '',
    country: '',
    experience: '',
  });

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const savedUserResponse = await fetch(`${process.env.REACT_APP_BASE_URL}/createUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData }),
      });

      if (savedUserResponse.ok) {
        console.log('Form submitted successfully!');
        toast.success('Registered Successfully! Our team will contact you soon.');
        // Perform any necessary actions upon successful submission
      } else {
        console.log('Form submission failed with status:', savedUserResponse.status);
        toast.error('Some error occurred. Kindly check your device internet 😭');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Some error occurred. Kindly check your device internet 😭');
    }

    // Perform form submission logic here
    console.log(formData);
    setFormData({
      parentName: '',
      childName: '',
      email: '',
      phoneNumber: '',
      age: '',
      country: '',
      experience: '',
    });
  };

  useEffect(() => {
    handleSubmit();
  }, [formData]);

      return (
        <div>
        <div className="form-container mx-auto  ">
          <h2>Register for Free Trail Class</h2>
          <form className="enrollment-form" onSubmit={handleSubmit}>
            <div className="form-group"> 
              <label htmlFor="parentName" className="required">Parent's Name</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                placeholder="Enter parent's name"
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="childName" className="required">Child's Name</label>
              <input
                type="text"
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                placeholder="Enter child's name"
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
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
              </div>
            </div>
    
            <div className=" flex relative formcss flex-row gap-10">
              <div className='flex flex-col w-[50%] formcsstext '>
                    <label htmlFor="age" className="required">Age</label>
                    <input
                    className='w-full'
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter your Age"
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
    
           <fieldset className="mt-5  form-group">
            <legend className='form-group text-[16px] font-medium required' >Kids Prior Experience</legend>
            
            <div className='flex textofchoice lg:gap-10 w-[100px] lining sm:200px sm:gap-x-4 '>
            <input onChange={handleChange}  type="radio"  name="experience"
                    value="Knows to solve rubik's cube"
                    id="Knows to solve rubik's cube"
                    checked={formData.experience === "Knows to solve rubik's cube" }/>
            <label  htmlFor="Knows to solve rubik's cube">Knows to solve rubik's cube </label>
            </div>
          
          <div className='flex textofchoice  lg:gap-10 w-[100px] lining sm:200px sm:gap-x-4 ' >
            <input onChange={handleChange} type="radio"  name="experience"
                    id="Don't know to solve rubik's cube"
                    value="Don't know to solve rubik's cube"
                    checked={formData.experience ==="Don't know to solve rubik's cube"}/>
            <label   htmlFor="Don't know to solve rubik's cube">Don't know to solve rubik's cube</label>
            </div>
            {/* <div className='flex textofchoice lg:gap-10 w-[100px] lining'>
            <input onChange={handleChange} type="radio"  name="experience"
                    value="Played Tournaments (Intermediate)"
                    checked={
                      formData.experience=== 'Played Tournaments (Intermediate)'
                    } id="Played Tournaments (Intermediate)" />
            <label    htmlFor="Played Tournaments (Intermediate)">Played Tournaments (Intermediate)</label>
            </div> */}
            </fieldset> 
    
    
    
    
    
            
    
            <button type="submit">Submit</button>
          </form>
         
        </div>
         <Footer/>
         </div>
  )
}

export default Demo