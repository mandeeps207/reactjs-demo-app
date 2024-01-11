import { NavLink } from "react-router-dom";

interface Nav {
  id: number,
  name: string
}

const Navbar = () => {
  const navs: Nav[] = [
    {id: 1, name: "about"},
    {id: 2, name: "contact"},
    {id: 3, name: "blog"}
  ];
  return (
    <nav className="flex flex-wrap items-end justify-between mx-auto shadow-sm bg-gray-600">
      <NavLink className="p-4 text-3xl text-white" to="/">LOGO</NavLink>
      <ul className="font-medium flex flex-row uppercase">
        <li><NavLink to="/" className="block px-10 py-1 text-white">home</NavLink></li>
        {navs.map(nav => <li key={nav.id}><NavLink className="block px-10 py-1 text-white" to={nav.name}>{nav.name}</NavLink></li>)}
      </ul>
    </nav>
  )
}

export default Navbar;