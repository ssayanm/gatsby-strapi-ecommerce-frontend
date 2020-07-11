import React from "react"
import { Link } from "gatsby"
import CartIconComponent from "../components/CartIconComponent"
import { MdHome } from "react-icons/md"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <MdHome className="nav-icon" />,
  },
  {
    id: 2,
    text: "price list",
    url: "/pricelist",
  },
  {
    id: 3,
    text: "contact us",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url} activeClassName="active">
        {link.icon} {link.text}
      </Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <div className="navi-menu">
      <ul className={`page-links ${styleClass ? styleClass : ""}`}>
        {tempLinks}
      </ul>
      <CartIconComponent />
    </div>
  )
}
