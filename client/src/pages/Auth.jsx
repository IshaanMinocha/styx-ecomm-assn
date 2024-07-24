import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../redux/userActions';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.user);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/shop');
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(email, password));
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <section className="p-4 bg-light/50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="p-8 w-full">
          <h3 className="text-4xl text-center font-bold mb-6">{isLogin ? 'Login' : 'Signup'}</h3>
          <form onSubmit={submitHandler} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-dark">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            )}
            <div>
              <label className="block text-dark">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-dark">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-2 rounded-lg bg-primary text-light hover:bg-primary/90 transition-colors duration-300"
            >
              {isLogin ? 'Login' : 'Signup'}
            </motion.button>
          </form>
          <div className="mt-6 text-center">
            <p>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => setIsLogin((prev) => !prev)}
                className="ml-2 text-primary hover:underline"
              >
                {isLogin ? 'Signup' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
