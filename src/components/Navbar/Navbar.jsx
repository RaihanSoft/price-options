import { CiMenuFries } from "react-icons/ci";
import Link from "../Link/Link";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {

  // ! for navbar 
  const [open, setOpen] = useState(false)

  const routes = [
    { path: '/users', component: "Home", id: 'userList' },
    { path: '/users/:id', component: "About", id: 'userDetails' },
    { path: '/products', component: "Features", id: 'productList' },
    { path: '/products/:id', component: "Contact", id: 'productDetails' },
    { path: '/orders', component: "Blog", id: 'orderList' }
  ];

  return (
    <nav className="text-black bg-yellow-200 p-2">
      <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">

        {

          open === true ? <MdOutlineClose /> : <CiMenuFries />

        }
      </div>

      <ul className={`md:flex md:static absolute ${open? "top-16 ": "-top-60" } duration-1000 text-black bg-yellow-200 p-2 md:p-6`}>
        {routes.map((route, index) => <Link route={route} key={index} />)}
      </ul>

    </nav>
  )
}

export default Navbar
