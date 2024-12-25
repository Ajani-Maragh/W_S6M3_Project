import React from 'react'

export default function Figure({ imageUrl, date }) {
    return (
      <figure>
            <img src={imageUrl}></img>
            <figcaption>Awesome Pic taken on {date}</figcaption>
          </figure>
    )
  }