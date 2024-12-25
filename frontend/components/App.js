import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card/Card'

const api_key = 'DEMO_KEY'
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`




function App() {
  const [planetInfo, setPlanetInfo] = useState()
  
  

  useEffect(() => {
   function fetchPhoto() {
    axios.get(BASE_URL)
    .then(res => {
      setPlanetInfo(res.data)
    })
    .catch(err => console.log(err.message))
   }

   //fetchPhoto()

   setPlanetInfo(
    {
      "date": "2024-12-23",
      "explanation": "It was December and the sky lit up like a Christmas tree. Shimmering, the vivid green, blue, and purple auroral colors that formed the tree-like apparition were caused by high atmospheric oxygen and nitrogen reacting to a burst of incoming electrons.  Collisions caused the orbital electrons of atoms and molecules to jump into excited energy states and emit visible light when returning to their normal state. The featured image was captured in Djúpivogur, Iceland during the last month of 2023. Our...",
      "hdurl": "https://apod.nasa.gov/apod/image/2412/AuroraTree_Zhang_1537.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Christmas Tree Aurora",
      "url": "https://apod.nasa.gov/apod/image/2412/AuroraTree_Zhang_960.jpg"
    })

  }, [])
  if (!planetInfo) return 'fetching info'
  return (
   <>
    <section>
    <Card 
      title={planetInfo.title}
      text={planetInfo.explanation}
      imageUrl={planetInfo.url}
      date={planetInfo.date}
    />
    </section>
    </>
  )
}

export default App
