/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../../Images/faveicon.jpg'
import logo1 from '../../../Images/logo1.png'
import logo2 from '../../../Images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'
const navigation = [
    { img: `${logo2}`, href: '/' },
    { name: 'Collections', href: '/allproducts', current: false },
    { name: 'Contact Us', href: '/contactus', current: false },
    { name: 'Dashboard', href: '/dashboard', current: false },
    { name: 'Calendar', href: '#', current: false },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const { user, logout } = useAuth();
    return (
        <Disclosure as="nav" className="bg-green-500 ">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white  bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">

                                    <NavLink activeClassName="selected" to='/'>
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src={logo}
                                            alt="Workflow"
                                        />
                                    </NavLink>
                                    <NavLink activeClassName="selected" to='/'>
                                        <img
                                            className="hidden lg:block h-8 w-auto "
                                            src={logo1}
                                            alt="Workflow"
                                        />
                                    </NavLink>

                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink activeClassName="selected"
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-green-600 hover:text-white',
                                                    'px-3 py-2 rounded-md text-md font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <p className='font-bold'>{user.displayName}</p>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    {user.email ? <div className='flex'>
                                        <Menu.Button className="mr-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={user.photoURL}
                                                alt=""
                                            />
                                        </Menu.Button>
                                        <button onClick={logout} className='bg-white py-1 px-2 rounded-md '
                                        >Sign Out</button></div>
                                        : <button className='bg-white py-1 px-2 rounded-md '><Link to='/signin'>Sign In</Link></button>}


                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <NavLink
                                    activeClassName="selected"
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                    <img className='w-32 mx-auto' src={item.img} alt="" />
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}