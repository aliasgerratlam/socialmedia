import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AppLayout from './ui/AppLayout';
import CreateFeed from './Pages/CreateFeed';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/create" element={<CreateFeed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
