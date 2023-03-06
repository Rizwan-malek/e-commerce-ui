import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  console.log("Test - 1")
  console.log("Test")
  console.log("Test - 2")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
