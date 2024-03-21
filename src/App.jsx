import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AppLayout from './ui/AppLayout';
import CreateFeed from './Pages/CreateFeed';
import Signup from './auth/Signup';
import SignIn from './auth/Signin';
import AuthLayout from './auth/AuthLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Profile from './Pages/Profile';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000
      },
    }
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/create" element={<CreateFeed />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/signin" element={<SignIn />} />

          <Route element={<AuthLayout />}>
            <Route path="/edit-profile/:id" element={<Profile />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;