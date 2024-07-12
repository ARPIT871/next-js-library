import DetailedView from '@/projects/trend-chic-app/sections/detailedview-blog'
import React from 'react'

const page = ({params}) => {
    console.log(params)
  return (
    <DetailedView type={params.type} id={params.id}/>
  )
}

export default page