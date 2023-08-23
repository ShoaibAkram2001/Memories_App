import React, { useState } from 'react';
import '../styles/AppForm.css'


function AppForm() {
 const [postData,setPostData]=useState({
   title:'',
   message:'',
   creator:'',
   tags:'',
   selectedFile:'',

 });

  return (
    <div className='AppForm_Container'>
    <h3>Creating a Memory</h3>
    <form>
        <input type='text' placeholder='Creator' required onChange={(e)=>setPostData({...postData, creator :e.target.value})} />
        <input type='text' placeholder='Title'  required onChange={(e)=>setPostData({...postData,Title:e.target.value})} />
        <input type='text' className='message' placeholder='Message'   required  onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
        <input type='text' placeholder='Tags' required  onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>
        
        <input type='file' onChange={(e)=>setPostData({...postData,selectedFile:e.target.value})}/>

        <input className=' submit btn'type='submit' value={'Submit'}  />
        <input className='clear btn'type='reset' value={'Clear'} />
    </form>
    </div>
  )
}

export default AppForm
