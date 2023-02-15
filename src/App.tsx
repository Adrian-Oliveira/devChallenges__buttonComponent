import { MouseEventHandler, useState } from 'react'
import Button from './components/Button'
import './App.scss'


function App() {

  return (
    <div className="App">
      <Button />
      <Button />
      <Button variant='outline' />
      <Button variant='outline'  />
      <Button variant='text'  />
      <Button variant='text'  />

    </div>
  )
}

export default App
