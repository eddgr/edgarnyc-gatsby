import React from "react"

export default function BlogPost({ pageContext }) {
  const { title, body, heroImage, publishDate } = pageContext;
  return <>
    <img src={heroImage.fluid.src} alt={title} />
    <h1>{title}</h1>
    <p>Published: {publishDate}</p>
    <div dangerouslySetInnerHTML={{ __html: body }}/>
  </> 
}
