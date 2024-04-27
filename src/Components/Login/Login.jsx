import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";




const Login = () => {
  
  // provider custom hook
  const { signInUser} = useAuth();

  // useState
  const [loginError, setLoginError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  // const [success, setSuccess] = useState();

  // alert("form use state", loginError);

  // navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submit handler
  const onSubmit = (data) => {
    const { email, password } = data;

    // reset error
    setLoginError('');
    
    signInUser(email, password)
      .then((result) => {
        // setSuccess("You are login successfully");
        // alert("You are login successfully")
        toast.success("You are logged in successfully");
        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage)
        toast.error(loginError);
        // alert(errorMessage);
      });
  };

  return (
    <div className="mx-auto max-w-md  lg:w-1/4">
      
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md   focus:dark:border-violet-600"
                {...register("email", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type= {showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {/* Show password icon */}
                <span className="absolute right-2 mt-14" onClick={() => setShowPassword(!showPassword)}>{ !showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye> }</span>
                
                {/* errors will return when field validation fails  */}
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
          </div>
          <button
            type="submit"
            className="w-full btn btn-neutral px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Login
          </button>
        </form>
        {
          loginError && (
            <span className="text-red-500">{loginError}</span>
          )
        }

        {/* Social Login */}

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        {/* socialmedia login */}
        <SocialLogin></SocialLogin>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Dont have an account?
          <Link
            to="/sign-up"
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-800"
          >
            Register now!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
