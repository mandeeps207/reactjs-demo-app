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
    <nav className="flex flex-wrap items-center justify-between mx-auto shadow-sm bg-gray-300">
      <NavLink className="p-4 text-3xl text-white" to="/">LOGO</NavLink>
      <ul className="font-medium flex flex-row p-4 uppercase">
        <li className="m-2"><NavLink to="/" className="block p-2 text-white rounded-lg">home</NavLink></li>
        {navs.map(nav => <li className="m-2" key={nav.id}><NavLink className="block p-2 text-white rounded-lg" to={nav.name}>{nav.name}</NavLink></li>)}
      </ul>
    </nav>
  )
}

export default Navbar;