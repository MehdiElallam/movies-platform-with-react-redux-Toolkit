import { BrowserRouter as Router } from 'react-router-dom'
import RoutesList from './routes';
import Header from './components/Header'
import './App.scss'

function App() {
  
  return (
    <div className='App'>
      <Router>
      
          <Header />
          <RoutesList />
      </Router>
    </div>
  )
}

export default App;
