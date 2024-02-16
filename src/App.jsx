import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
