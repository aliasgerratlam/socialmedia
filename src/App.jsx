import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import AppLayout from './ui/AppLayout';
import CreateFeed from './Pages/CreateFeed';
import Signup from './auth/Signup';
import SignIn from './auth/Signin';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Profile from './Pages/Profile';
import ProtectedRoute from './Pages/ProtectedRoute';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1 * 1000
      },
    }
  });

  // const user = [
  //   {
  //     userId,
  //     username: "johndoe",
  //     name: "John Doe",
  //     bio: "Hello, I'm John Doe. I'm a software developer from India. I love creating new things.",
  //     profile_image: "",
  //     createdAt: "2022-01-01T00:00:00.000Z",
  //     posts: [],
  //     followers: [],
  //     following: [],
  //   }
  // ]

  // const posts = [
  //   {
  //     postId,
  //     username: "johndoe",
  //     name: "John Doe",
  //     profile_image: "",
  //     createdAt: "2022-01-01T00:00:00.000Z",
  //     content: "Hello, I'm John Doe. I'm a software developer from India. I love creating new things.",
  //     media: [],
  //     likes: [],
  //     comments: [],
  //   }
  // ]
  
  
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

          <Route element={<ProtectedRoute><Outlet /></ProtectedRoute>}>
            <Route path="/edit-profile/:id" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;