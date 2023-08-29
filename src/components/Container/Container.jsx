import React,{useState} from 'react'
import './Container.css'
import TopContainer from './top-container/TopContainer'


const Container = () => {
 
  const api = {
    key: "ea4c44a9a8632d9e7c12a667bae5df78",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  return (
    <div className="container">
      <TopContainer />
      <hr size="1"/>      
    </div>
  )
}

export default Container