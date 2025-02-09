import React,{Suspense , useEffect} from 'react'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import { useWeather } from './context/Weather'

function App(className , children) {
const weather = useWeather();
const Cardset = React.lazy(() => import('./components/Card'));

const handleRefresh = () => {
  window.location.reload();
}
useEffect(() => {
  weather.fetchCurrentUserLocationData();
},[])
  return (
    <>
     <h2 className='container heading'>Weather App</h2>
     <Input />
     <Button   className={`btnStyle btn`} children="Refresh" onClick={() => handleRefresh()}/>
     <Suspense fallback={<div className='alert alert-danger text-center'>Waiting...</div>}>
     <Cardset />
     </Suspense>
    </>
  )
}

export default App
