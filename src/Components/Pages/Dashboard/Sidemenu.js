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
        title: 'Manage Order',
        path: '/morder',
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
        title: 'Add Collection',
        path: '/addcollection',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Add Role',
        path: '/role',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    }
];