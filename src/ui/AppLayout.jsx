import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const AppLayout = () => {
  const location = useLocation();
  const isProfilePage = useMemo(() => {
    return location.pathname.includes('/profile');
  }, [location]);

  return (
    <>
      <Header />
      
      <div className="grid grid-cols-[40rem_auto_40rem] overflow-hidden my-5">
        <aside className="max-h-[50rem] overflow-hidden py-4 px-8">
          {!isProfilePage && <Sidebar side="left" />}
        </aside>
        <main className="bg-slate-50 min-h-screen">
          <Outlet />
        </main>
        <aside className="max-h-[50rem] overflow-hidden py-4 px-6">
          {<Sidebar side="right" />}
        </aside>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
