import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiSearch,
  FiHome,
  FiUser,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-light shadow-lg z-50 h-[10vh]">
      <motion.nav className="bg-light text-dark shadow-lg flex items-center justify-center h-full">
        <div className="flex gap-6 px-6">
          <Link text="Home" Icon={FiHome} href="/" />
          <Link text="Shop" Icon={FiSearch} href="/shop" />
          <div className="relative">
            <Link text="Cart" Icon={FiShoppingCart} href="/cart" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-light rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
          {userInfo ? (
            <div className="relative group">
              <button
                onClick={handleLogout}
                className="text-sm w-12 transition-colors flex flex-col gap-1 items-center hover:text-primary"
              >
                <FiUser />
                <span className="text-xs">Logout</span>
              </button>
              <span className="absolute bottom-full mb-2 bg-dark text-light text-xs rounded px-2 py-1 hidden group-hover:block">
                {userInfo.name} - {userInfo.email}
              </span>
            </div>
          ) : (
            <Link text="Login" Icon={FiUser} href="/auth" />
          )}
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
