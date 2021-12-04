import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title1: 'Home',
        path1: '/',
        icon1: <AiIcons.AiFillHome />,
        cName1: 'nav-text'
    },
    {
        title: 'Your Order',
        path: '/yorder',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Add Review',
        path: '/review',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Make Payment',
        path: '/payment',
        icon: <i class="fas fa-money-check-alt"></i>,
        cName: 'nav-text'
    },
    {
        title2: 'Manage Order',
        path2: '/morder',
        icon2: <IoIcons.IoIosPaper />,
        cName2: 'nav-text'
    },
    {
        title2: 'Add Collection',
        path2: '/addcollection',
        icon2: <FaIcons.FaCartPlus />,
        cName2: 'nav-text'
    },
    {
        title2: 'Add Role',
        path2: '/role',
        icon2: <IoIcons.IoMdPeople />,
        cName2: 'nav-text'
    },
    {
        title2: 'Manage Collection',
        path2: '/mcollection',
        icon2: <IoIcons.IoIosCreate />,
        cName2: 'nav-text'
    },
    {
        title3: 'SignOut',
        cName3: 'nav-text'
    }
];