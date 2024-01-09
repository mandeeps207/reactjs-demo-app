import { Link } from "react-router-dom";

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
    <nav className="flex flex-wrap items-center justify-between mx-auto shadow-sm bg-blue-500">
      <Link className="p-4 text-3xl" to="/">LOGO</Link>
      <ul className="font-medium flex flex-row p-4 uppercase">
        <li><Link to="/" className="mx-3 text-white hover:text-black">home</Link></li>
        {navs.map(nav => <li key={nav.id}><Link className="mx-3 text-white hover:text-black" to={nav.name}>{nav.name}</Link></li>)}
      </ul>
    </nav>
  )
}

export default Navbar;