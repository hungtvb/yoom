'use client'


import { useParams } from 'next/navigation'
import React from 'react'

const Meeting = () => {

  const {id} = useParams();

  return (
    <div>Meeting #{id}</div>
  )
}

export default Meeting