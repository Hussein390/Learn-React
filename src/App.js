import './index.css';
import Employees from './pages/Employees';
import Header from './components/header';
import Notfound from './components/Notfound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
function App() {
  return (
      <BrowserRouter>
    <Header>
        <Routes>
          <Route path="/employees" element={<Employees />}/>
          <Route path="/Dictionary" element={<Dictionary />}/>
          <Route path="/Definition" element={<Definition />}/>
          <Route path="/Definition/:search" element={<Definition />}/>
          <Route path="/404" element={<Notfound />}/>
          <Route path="*" element={<Notfound />}/>
        </Routes>
    </Header>
    </BrowserRouter>
  )
}

export default App;
