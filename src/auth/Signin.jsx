import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from './useLogin';

const SignIn = () => {
  const {login, isPending} = useLogin();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user.email || !user.password) return;
    login(user); 
  }

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-12">
          <div className="max-w-xl lg:max-w-3xl">
            <Link className="block text-blue-600" to="/">
              <span className="sr-only">Home</span>
            </Link>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Welcome to Squid 🦑</h1>

            <p className="mt-4 leading-relaxed text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.</p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  {' '}
                  Email{' '}
                </label>

                <input type="email" id="Email" name="email" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} className="mt-1 w-full rounded-md border border-gray-300 p-3 bg-white text-sm text-gray-700 h-10 shadow-sm" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  {' '}
                  Password{' '}
                </label>
                <input type="password" id="Password" name="password" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} className="mt-1 w-full rounded-md border border-gray-300 p-3 bg-white text-sm text-gray-700 h-10 shadow-sm" />
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    {' '}
                    terms and conditions{' '}
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button type='submit' className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">{!isPending ? "Login" : <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>}</button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Don't have account?{' '}
                  <Link to="/auth/signup" className="text-gray-700 underline">
                    Register
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignIn;