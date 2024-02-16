import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-[35rem_auto_35rem] overflow-hidden my-5">
        <aside className="max-h-[50rem] overflow-hidden py-4 px-8">
          <Sidebar />
        </aside>
        <main className="bg-slate-50 min-h-screen border-x border-solid border-gray-200 p-4 rounded-2xl">
          <Outlet />
        </main>
        <aside className="max-h-[50rem] overflow-hidden py-4 px-6">{/* <Sidebar /> */}</aside>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
