import { NavLink } from "react-router-dom";

interface Nav {
  id: number,
  name: string
}

// const boxShadow: any = ({
//   boxShadow: "-3px -3px 3px rgba(0, 0, 0, 0.25), 3px 3px 3px rgba(255, 255, 255, 1)"
// })

const Navbar = () => {
  const navs: Nav[] = [
    {id: 1, name: "about"},
    {id: 2, name: "contact"},
    {id: 3, name: "blog"}
  ];
  return (
    <nav className="flex flex-wrap items-end justify-between mx-auto shadow-sm bg-gradient-to-l from-gray-600 from-10% via-gray-500 via-30% to-gray-700 to-90%">
      <NavLink className="p-4 text-3xl text-white" to="/">LOGO</NavLink>
      <ul className="font-medium flex flex-row uppercase">
        <li><NavLink to="/" className="block px-4 py-2 text-white rounded-t-lg">home</NavLink></li>
        {navs.map(nav => <li key={nav.id}><NavLink className="block px-4 py-2 text-white rounded-t-lg" to={nav.name}>{nav.name}</NavLink></li>)}
      </ul>
    </nav>
  )
}

export default Navbar;