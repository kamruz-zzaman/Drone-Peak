import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './Sidemenu';
import './Dashboard.css';
import { IconContext } from 'react-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Products from './DRoutes/Products';
import useAuth from '../../../Hooks/useAuth';
import Order from './DRoutes/Order/Order';
import AddCollection from './DRoutes/AddCollection/AddCollection';
import AddReview from './DRoutes/AddReview/AddReview';
import MakeAdmin from './DRoutes/Make Role/MakeAdmin';
import ManageOrder from './DRoutes/ManageOrder/ManageOrder';

function Navbar() {
    let { path, url } = useRouteMatch();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const { user, admin } = useAuth();
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li className='navbar-toggle'>
                            <div className='flex ml-4'>
                                <img className='w-8 mr-2 rounded-full' src={user.photoURL} alt="" />
                                <p className='text-white text-lg'>{user.displayName}</p>
                            </div>
                        </li>

                        {SidebarData.map((item, index) => {
                            return (
                                <>

                                    <li key={index} className={item.cName}>
                                        <Link to={`${url}${item.path}`}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                        <li key={index} className={item.cName1}>
                                            <Link to='/'>
                                                {item.icon1}
                                                <span>{item.title1}</span>
                                            </Link>
                                        </li>

                                    </li>
                                </>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
            <Switch>
                <Route exact path={path}>
                    <Order></Order>
                </Route>
                <Route path={`${path}/products`}>
                    <Products></Products>
                </Route>
                <Route path={`${path}/yorder`}>
                    <Order></Order>
                </Route>
                <Route path={`${path}/addcollection`}>
                    <AddCollection></AddCollection>
                </Route>
                <Route path={`${path}/review`}>
                    <AddReview></AddReview>
                </Route>
                <Route path={`${path}/role`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/morder`}>
                    <ManageOrder></ManageOrder>
                </Route>
            </Switch>
        </>
    );
}

export default Navbar;