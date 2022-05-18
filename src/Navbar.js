import './navbar.css'
import logo from './images/airbnb-logo.png'
export default function Navbar() {
  return (
    <nav>
      <img alt="airbnb--logo" className="nav--img" src={logo} />
      <ul>
        <li>Pricing</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  )
}