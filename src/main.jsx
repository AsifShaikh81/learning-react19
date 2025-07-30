import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router' // u can also import in  app.jsx
{
  /* The following line can be included in your src/index.js or App.js file */
}
// import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <StrictMode> */}
    <App />
  {/* </StrictMode> */}
  </BrowserRouter>
)
