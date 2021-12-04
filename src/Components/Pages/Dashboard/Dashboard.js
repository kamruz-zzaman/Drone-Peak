import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './Sidemenu';
import './Dashboard.css';
import { IconContext } from 'react-icons';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import Order from './DRoutes/Order/Order';
import AddCollection from './DRoutes/AddCollection/AddCollection';
import AddReview from './DRoutes/AddReview/AddReview';
import MakeAdmin from './DRoutes/Make Role/MakeAdmin';
import ManageOrder from './DRoutes/ManageOrder/ManageOrder';
import MakePayment from './DRoutes/AddReview/MakePayment';
import ManageCollection from './ManageCollection/ManageCollection';

function Navbar() {
    let { path, url } = useRouteMatch();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const { user, admin, logout } = useAuth();
    console.log(admin);
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
                        <li className='nav-text'>
                            <Link to='/'>
                                <AiIcons.AiFillHome />
                                <span>Home</span>
                            </Link>
                        </li>

                        {SidebarData.map((item, index) => {
                            return (
                                <>
                                    {!admin && <li key={index} className={item.cName}>
                                        <Link to={`${url}${item.path}`}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>

                                    </li>}
                                    {admin && <li key={index} className={item.cName2}>
                                        <Link to={`${url}${item.path2}`}>
                                            {item.icon2}
                                            <span>{item.title2}</span>
                                        </Link>

                                    </li>
                                    }
                                </>
                            );
                        })}
                        <button onClick={logout} className='hover:bg-green-600 bg-green-400 text-red-600 font-bold py-1 px-2 rounded-lg'>SignOut</button>
                    </ul>
                </nav>
            </IconContext.Provider>
            <Switch>
                {admin && <Route exact path={path}>
                    <ManageOrder></ManageOrder>
                </Route>}
                {!admin && <Route exact path={path}>
                    <Order></Order>
                </Route>}
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
                <Route path={`${path}/mcollection`}>
                    <ManageCollection></ManageCollection>
                </Route>
                <Route path={`${path}/payment`}>
                    <MakePayment></MakePayment>
                </Route>
            </Switch>
        </>
    );
}

export default Navbar;