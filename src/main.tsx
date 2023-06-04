import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SocialNetworks from './SocialNetworks.tsx'

ReactDOM.createRoot(document.getElementById('socialNetworks') as HTMLElement).render(
  <React.StrictMode>
    { 
    <SocialNetworks/>
      }
  </React.StrictMode>
)
