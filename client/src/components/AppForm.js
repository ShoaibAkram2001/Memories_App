import React, { useState } from 'react';
import '../styles/AppForm.css'
import { useDispatch,useSelector } from 'react-redux';
import { CREATE } from '../actions';


function AppForm()

{
  const post=useSelector(state=>state);
  console.log(post);

  
 const [postData,setPostData]=useState({
   title:'',
   message:'',
   creator:'',
   tags:'',
   selectedFile:'',

 });

 const dispatch=useDispatch();

 const handleSubmit=(e)=>{
e.preventDefault();
console.log(postData);
dispatch(CREATE(postData));

 }

  return (
    <div className='AppForm_Container'>
    <h3>Creating a Memory</h3>
    <form>
        <input type='text' placeholder='Creator' required onChange={(e)=>setPostData({...postData, creator :e.target.value})} />
        <input type='text' placeholder='Title'  required onChange={(e)=>setPostData({...postData,title:e.target.value})} />
        <input type='text' className='message' placeholder='Message'   required  onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
        <input type='text' placeholder='Tags' required  onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>
        
        <input type='file' onChange={(e)=>setPostData({...postData,selectedFile:e.target.value})}/>

        <input className=' submit btn'type='submit' value={'Submit'} onClick={handleSubmit}/>
        <input className='clear btn'type='reset' value={'Clear'} />
    </form>
    </div>
  )
}

export default AppForm;
