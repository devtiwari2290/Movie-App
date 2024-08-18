import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import process from 'process'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'




// setup axios
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common["Authorization"] = ` Bearer${process.env.REACT_APP_ACCESS_TOKEN}`

ReactDOM.createRoot(document.getElementById('root')).render(
   
    <Provider store={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
     </Provider>

 
  
)
