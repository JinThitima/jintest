import React from 'react'
import MainLayout from '../layouts/MainLayout'
import MyButton from '../MyButton'

const home = () => {
  return (
    <MainLayout>
      <div className="mt-4 p-5 bg-warning text-white rounded">
        <h1>Jumbotron Example</h1>
        <p>Lorem ipsum...</p>
      </div>
      <MyButton text="Test" color="danger" />
      <MyButton text="Green" color="success" />
      <MyButton text="Blue" color="info" />
      <MyButton text="Primary" color="primary" />
      <MyButton text="light" color="light" />
    </MainLayout>
  )
}

export default home