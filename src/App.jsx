import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AppLayout from './ui/AppLayout';
import CreateFeed from './Pages/CreateFeed';
import Signup from './auth/Signup';
import SignIn from './auth/Signin';
import AuthLayout from './auth/AuthLayout';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/create" element={<CreateFeed />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/signin" element={<SignIn />} />

          <Route element={<AuthLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
