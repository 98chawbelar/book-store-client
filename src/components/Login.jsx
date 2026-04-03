import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {loginUser, signInWithGoogle} = useAuth();
  const navigate = useNavigate()
  const [message, setMessage] = useState("");
  const  {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = async() => {
    
    try{await signInWithGoogle();
      alert("Login successful!")
      navigate('/')

    }catch (error){
alert("Google Sign-In Failed!")
      console.error(error)
      }
    }
  

  const onSubmit = async (data) => {
    try{  
await loginUser(data.email, data.password)
alert("Login Successful!")
navigate("/")

    }catch(error){
      setMessage("Please provide a vaild email and password")
      console.error(error)
    }
  }

  return (
    <div className="h-[calc(100vh-120px)]  flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 ">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                name="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 pr-10 leading-tight focus:outline-none focus:shadow"
              />

              <span
                className="absolute right-3 top-2.5 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          {message && <p className="text-red-500 text-xs italic mb-3">{message}</p> }
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Loing
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Haven't an account? Please{" "}
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Register
          </Link>
        </p>

        {/* Google Sign In */}
        <div className="mt-4">
            <button
            onClick={handleGoogleSignIn}
             className="flex items-center flex-wrap gap-1 justify-center mt-4 bg-jetBlack/80 border border-gray-300 rounded py-2 px-4 text-white hover:bg-blue-700 focus:outline-none">
               <FaGoogle className="mr-2" /> 
               Sign in with Google
            </button>
        </div>
        <p className="text-center mt-5 text-gray-500 text-xs">© 2026 Book Store. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
