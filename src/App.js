import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Employees from './pages/Employees';
import Header from './components/header';
import Notfound from './components/Notfound';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import Customers from './pages/Customers';
import Customer from './pages/Customer';
import { Login } from './pages/login';
function App() {
  return (
      <BrowserRouter>
    <Header>
        <Routes>
          <Route path="/employees" element={<Employees />}/>
          <Route path="/customers" element={<Customers />}/>
          <Route path="/customers/:id" element={<Customer />} />
          
          <Route path="/Dictionary" element={<Dictionary />}/>
          <Route path="/dictionary/:search" element={<Definition />} />
          

          <Route path="/login" element={<Login />}/>
          <Route path="/404" element={<Notfound />}/>
          <Route path="*" element={<Notfound />}/>
        </Routes>
    </Header>
    </BrowserRouter>
  )
}

export default App;
