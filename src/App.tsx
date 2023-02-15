import { MouseEventHandler, useState } from 'react'
import Button from './components/Button'
import './App.scss'


function App() {

  return (
    <div className="App">
      <Button />
      <Button variant='outline' />    
      <Button variant='text'  />
      <Button disableShadow />
      <Button disabled={true}/>
      <Button variant='text' disabled={true} />

      <Button startIcon='local_grocery_store' />
      <Button endIcon='local_grocery_store' />


      <Button size='sm'/>
      <Button size='md'/>
      <Button size='lg'/>

      <Button color='default'/>
      <Button color='primary'/>
      <Button color='secondary'/>
      <Button color='danger'/>

    </div>
  )
}

export default App
