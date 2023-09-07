import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Particle from './components/Particle';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


const App =()=>{
  const pagesz = 10;
  const apiKey = process.env.REACT_APP_NEWS_API

  // const apiKey = "709ac5eaf4db4e4db7c0f912ae9462d0"
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
        <Particle/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <NavBar/>
        
        
        <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pagesz} category="general"/>}/>
        <Route exact path='/buisness' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pagesz} category="business"/>}/>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pagesz} category="entertainment"/>}/>
        <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pagesz} category="general"/>}/>
        <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pagesz} category="health"/>}/>
        <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pagesz} category="science"/>}/>
        <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pagesz} category="sports"/>}/>
        <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pagesz} category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
}

export default App

