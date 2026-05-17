import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <nav className="navbar">
      <span className="brand">🌿 WanderGreen</span>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/destinations">Destinations</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Navbar
