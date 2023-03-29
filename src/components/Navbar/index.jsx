import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { HiShoppingCart } from "react-icons/hi";


const Navbar = () => {
  const activeStyle = {
    color: "white",
  };

  return (
    <nav className={styles.container}>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p className={styles.container}> SHOP ONLINE 🛒</p>
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p className={styles.container}>Productos</p>
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <HiShoppingCart />
      </NavLink>
    </nav>
  );
};

export default Navbar;
