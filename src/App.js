// Desc: This is the main app file
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/indexH';
import About from './components/About/indexAb';
import Skills from './components/Skills/indexSk';
import Contact from './components/ContactMe/indexCon';
function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='about' index element={<About />} />
        <Route path='skills' index element={<Skills />} />
        <Route path='contact' index element={<Contact />} />

      </Route>
    </Routes>
   </>
  );
}

export default App;
