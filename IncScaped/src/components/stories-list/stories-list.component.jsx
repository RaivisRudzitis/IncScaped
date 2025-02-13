import React, { useContext, useEffect } from 'react'
import StorieComponent from '../storie/storie.component'
import './stories-list.styles.scss'
import axiosClient from '../../axios'
import Button from '../button/button.component'
import { StorieContext } from '../../context/storie.context'


export default function StoriesListComponent({stories}) {  

  
  
   const handleCombinedClick = (event, storie) => {
    handleButtonClick(event);
    handleDeleteStory(storie);
  };
  const handleButtonClick = (event) => {
    event.preventDefault(); 
  };
  
  const handleDeleteStory = (storie) => {
    axiosClient.delete(`/story/${storie.id}`)
    .then(({data})=>{
      console.log(data);
      fetchData();
    })
    .catch((error)=>{
        console.log(error);
    }); 
  }; 

  return (
    <div className='stories-container'>
      {stories.length>0&&
      stories.map((storie, index) => ( 
        <StorieComponent key={index} buttons={<Button type="submit" onClick={(event) => handleCombinedClick(event, storie)} >Delete</Button>} storie={storie}/> 
      ))
      }       
    </div>
  )
}
