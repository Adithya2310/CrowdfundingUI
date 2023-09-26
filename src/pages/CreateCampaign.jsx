import React, { useState } from 'react'
import { FormField,CustomButton } from '../components'
import { useStateContext } from '../context';

const CreateCampaign = () => {
  // const [campaigns,setCampaigns]=useState([]);
  const [formState,setFormState]=useState({
    Name:'',
    Title:'',
    Description:'',
    Target:'',
    DeadLine:'',
  });

  // to get the hook form the statecontext
  const {message,address,publishCampaign}=useStateContext();
  // console.log(message+address);
  // a function to update the form according change in the field
  const handleFormChange=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
    // console.log(e.target.name+":"+e.target.value);
    e.preventDefault();
    setFormState({...formState,[name]:value});
    // console.log(formState);
  }

  // a function to update the state when the form is submitted
  const handleFormSubmit=async (e)=> {
    // console.log(e);
    e.preventDefault();
    // console.log(formState);
    await publishCampaign(formState);
  }

  return (
    <div className='bg-[#2b2e2e] p-8 rounded-[10px] flex flex-col'>
    <div className=" tracking-wider bg-[#949494] text-white font-epilogue text-2xl rounded-[10px] px-10 py-3 mx-auto">
      Start Your Campaign
    </div>
    <form onSubmit={handleFormSubmit}>
    <div className='flex gap-1'>
        <FormField
          label="Name"
          isTextArea={false}
          placeholder="Enter your Name"
          handleChange={(e)=>{handleFormChange(e)}}
          value={formState.Name}
          
        />
        <FormField
          label="Title"
          isTextArea={false}
          placeholder="Enter your Title"
          handleChange={(e)=>{handleFormChange(e)}}
          value={formState.Title}
        />
      </div>
      <div>
        <FormField
          label="Description"
          isTextArea={true}
          placeholder="Write your story here"
          handleChange={(e)=>{handleFormChange(e)}}
          value={formState.Description}
        />
      </div>
      <div className='flex gap-1'>
      <FormField
          label="Target"
          placeholder="ETH"
          handleChange={(e)=>{handleFormChange(e)}}
          value={formState.Target}
        />
        <FormField
          label="DeadLine"
          inputType="date"
          handleChange={(e)=>{handleFormChange(e)}}
          value={formState.DeadLine}
        />
      </div>
      <div className='mx-auto flex justify-center mt-5'>
        <CustomButton
          name="Submit A Campaign"
          styles="bg-green-500 text-white rounded-[10px] mt-4 py-4 px-6"
          btnType="submit"
        />
      </div>
    </form>
    </div>
  )
}

export default CreateCampaign