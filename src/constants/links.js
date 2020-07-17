import React, { useContext } from "react"
import { Link } from "gatsby"
import CartIconComponent from "../components/CartIconComponent"
import CartDropDownComponent from "../components/CartDropDownComponent"
import { MdHome } from "react-icons/md"
import { GlobalContext } from "../context/GlobalState"

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
    text: "shop",
    url: "/shop",
  },
  {
    id: 4,
    text: "Stripe shop",
    url: "/advanced",
  },
  {
    id: 5,
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
  const { hidden } = useContext(GlobalContext)
  return (
    <div className="navi-menu">
      <ul className={`page-links ${styleClass ? styleClass : ""}`}>
        {tempLinks}
      </ul>
      <CartIconComponent />
      {hidden ? null : <CartDropDownComponent />}
    </div>
  )
}
