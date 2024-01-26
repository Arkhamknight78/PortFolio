import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
// import Header from '../Layout/header.js';
// import Footer from '../Layout/footer.js';

const Layout=()=>{
    return <div className='App'> 
    <Sidebar />
    <div className='page'>
        

        <span className='tags top-tags'>&lt;body&gt;</span> {/* This is the top tag */}

        <Outlet/> 

        {/* This is where the content will be rendered */}
        <br/>
        
        <div className='tags bottom-tags'>
        <span className='bottom-tags'>&lt;/body&gt;</span> {/* This is the bottom tag */}
       
        <br/>
        <span className='bottom-tag-html'>&lt;/html&gt;
        </span> {/* This is the bottom tag */}

        </div> {/* This is the bottom tag */}
       
        

    </div>
    </div>
}

export default Layout;