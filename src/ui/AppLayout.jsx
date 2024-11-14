import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const isProfilPage = window.location.pathname.includes('/profile');

  return (
    <>
      <Header />
      
      <div className="grid grid-cols-[40rem_auto_40rem] overflow-hidden my-5">
        <aside className="max-h-[50rem] overflow-hidden py-4 px-8">
          {!isProfilPage && <Sidebar side="left" />}
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
