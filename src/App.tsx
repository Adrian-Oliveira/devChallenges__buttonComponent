import {  } from 'react'
import ReactDOMServer from 'react-dom/server'
import Button from './components/Button'
import './App.scss'


function App() {

  return (
    <div className="App">
      <h1>Buttons</h1>
      

      <div className='row'>
        <div className="element">
          <p>{'<Button/>'}</p>
          <Button/>
        </div>
      </div>


      <div className='row'>
            
        <div className="element">
          <p>{"<Button variant='outline' />"}</p>
          <Button variant='outline' />
        </div>
      </div>


      <div className='row'>
        <div className="element">
          <p>{"<Button variant='text'  />"}</p>
          <Button variant='text'  />
        </div>
      </div>
      

      <div className='row'>
        <div className="element">
          <p>{"<Button disableShadow />"}</p>
          <Button disableShadow />
        </div>
        
      </div>


      <div className='row'>
        
        <div className="element">
          <p>{"<Button disabled={true}/>"}</p>
          <Button disabled={true}/>
        </div>

      </div>
      

      <div className='row'>
        
        <div className="element">
          <p>{"<Button variant='text' disabled={true} />"}</p>
          <Button variant='text' disabled={true} />
        </div>

      </div>


      <div className='row'>

        <div className="element">
          <p>{"<Button startIcon='local_grocery_store' />"}</p>
          <Button startIcon='local_grocery_store' />
        </div>

        <div className="element">
          <p>{"<Button endIcon='local_grocery_store' />"}</p>
          <Button endIcon='local_grocery_store' />
        </div>
        
      </div>


      <div className='row'>

        <div className="element">
          <p>{"<Button size='sm'/>"}</p>
          <Button size='sm'/>
        </div>

        <div className="element">
          <p>{"<Button size='md'/>"}</p>
          <Button size='md'/>
        </div>

        <div className="element">
          <p>{"<Button size='lg'/>"}</p>
          <Button size='lg'/>
        </div>

      </div>


      <div className='row'>

        <div className="element">
          <p>{"<Button color='default'/>"}</p>
          <Button color='default'/>
        </div>

        <div className="element">
          <p>{"<Button color='primary'/>"}</p>
          <Button color='primary'/>
        </div>

        <div className="element">
          <p>{"<Button color='secondary'/>"}</p>
          <Button color='secondary'/>
        </div>

        <div className="element">
          <p>{"<Button color='danger'/>"}</p>
          <Button color='danger'/>
        </div>
        
      </div>

    </div>
  )
}

export default App
