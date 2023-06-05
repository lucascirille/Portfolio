import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SocialNetworks from './components/SocialNetworks.tsx'
import Navigator from './components/Navigator.tsx'

ReactDOM.createRoot(document.getElementById('socialNetworks') as HTMLElement).render(
  <React.StrictMode>
    { 
    <SocialNetworks/>
      }
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('navigator') as HTMLElement).render(
  <React.StrictMode>
    { 
    <Navigator/>
      }
  </React.StrictMode>
)