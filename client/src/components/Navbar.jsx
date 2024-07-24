import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiSearch,
  FiPhone,
  FiHome,
  FiInfo,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-light h-20 shadow-lg z-50">
      <motion.nav className="bg-light text-dark shadow-lg flex items-center justify-center h-full">
        <div className="flex gap-6 px-6">
          <Link text="Home" Icon={FiHome} href={"/"} />
          <Link text="About" Icon={FiInfo} href={"/about"} />
          <Link text="Shop" Icon={FiSearch} href={"/shop"} />
          <Link text="Support" Icon={FiPhone} href={"/support"} />
          <div className="relative">
            <Link text="Cart" Icon={FiShoppingCart} href={"/cart"} />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-light rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

const Link = ({ text, Icon, href }) => {
  return (
    <NavLink
      to={href}
      rel="nofollow"
      className={({ isActive }) =>
        `text-sm w-12 transition-colors flex flex-col gap-1 items-center ${
          isActive ? 'text-primary' : 'hover:text-primary'
        }`}
    >
      <Icon />
      <span className="text-xs">{text}</span>
    </NavLink>
  );
};

export default Navbar;
