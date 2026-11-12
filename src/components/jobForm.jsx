import React, { useState } from 'react'
const emptyForm = {
    company: "",
    role: "",
    status: "applied",
    appliedOn: "",
    location: "",
}
function validate(values){
    const netErrors={};
    if(!values.company.trim()){
        netErrors.company="Company is Provide"
    }
    if(!values.role.trim()){
        netErrors.role="role is not provide"
    }
     if(!values.appliedOn.trim()){
        netErrors.appliedOn="applied is not provide"
    }
    return netErrors;
}

const jobForm = ({onSave,editingJob,onCancel}) => {
    const [form,setForm]=useState(emptyForm);
    const [erros,setErrors]=useState({});
    const [loadedJobId,setLoadedJobId]=useState(null);
    const currentJobId=editingJob?.id ?? null
    if(currentJobId !== loadedJobId){
        setLoadedJobId(currentJobId);
        setForm(
            editingJob?{
                company: editingJob.company ?? "",
                role: editingJob.role ?? "",
                status: editingJob.status ?? "applied",
                appliedOn: editingJob.appliedOn ?? "",
                location: editingJob.location ?? ""
            }
            : emptyForm
        );
        setErrors({});
    }
    function handleChange(event){
        const{name,value}=event.target;
        setForm((current)=>({
          ...current,
          [name]:value  
        }));
        setErrors((current)=>({
            ...current,
            [name]:""
        }));
    }
    
 async function handleSubmit(event) {
  event.preventDefault()

  const nextErrors = validate(form)
  setErrors(nextErrors)

  if (Object.keys(nextErrors).length > 0) {
    return
  }

   const payload={
    company: form.company.trim(),
    role: form.role.trim(),
    status: form.status,
    appliedOn: form.appliedOn,
    location: form.location.trim()
  }
  try {
    await onSave(payload)
    setForm({...emptyForm});
    setErrors({});
  } catch (error) {
    
  }
}

    function handleCancel(){
        setForm(emptyForm);
        setErrors({});
        setLoadedJobId(null);
        onCancel();
    }
    
   return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="company">Company*</label>
        <input
         id='company'
         name='company'
         value={form.company}
         onChange={handleChange}
         placeholder='enter your company name'
         />
         {erros.company && (
            <p>{erros.company}</p>
         )}
          <label htmlFor="role">Role*</label>
        <input
         id='role'
         name='role'
         value={form.role}
         onChange={handleChange}
         placeholder='enter your company name'
         />
         {erros.role && (
            <p>{erros.role}</p>
         )}
          <label htmlFor="status">Status*</label>
        <input
         id='status'
         name='status'
         value={form.status}
         onChange={handleChange}
         placeholder='enter your company name'
         />
         {erros.status && (
            <p>{erros.status}</p>
         )}
         <label htmlFor="appliedOn">AppliedOn*</label>
        <input
        type='date'
         id='appliedOn'
         name='appliedOn'
         value={form.appliedOn}
         onChange={handleChange}
         placeholder=''
         />
         {erros.appliedOn && (
            <p>{erros.appliedOn}</p>
         )}
         <label htmlFor="location">Location*</label>
        <input
         id='location'
         name='location'
         value={form.location}
         onChange={handleChange}
         placeholder=''
         />
         {erros.location && (
            <p>{erros.location}</p>
         )}
        <div className="">
            <button type='submit'>{editingJob? "Save Job":"Add Job"}</button>
            {editingJob && (
                <button type='button'onClick={handleCancel}>Cancel</button>
            )}
        </div>
    </form>
  )
}

export default jobForm