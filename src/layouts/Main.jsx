
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
          <Navbar/>
         <div className='min-h-[calc(100vh-306px)]'>
         <Outlet/>
         </div>
          <Footer/>
        </div>
    );
};

export default Main;