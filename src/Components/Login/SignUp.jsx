import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";



const SignUp = () => {
// use context
const { createUser } = useAuth();



const [errorRegister, setErrorRegister] = useState();
const [showPassword, setShowPassword] = useState(false);


// navigation system
const navigate = useNavigate();
const location = useLocation();
const from = location?.state || "/";




// react form hook
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

// register form submit handler
const onSubmit = (data) => {
  const { email, password } = data;

 if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
    setErrorRegister("Password Must have an Uppercase and Lowercase Letter and at least 6 character");
    return;
  }

  createUser(email, password)
    .then((result) => {
      // alert("User created successfully");
      toast.success("Account created successfully");       
      if (result.user) {
        navigate(from);
      }
    })
    .catch((error) => {
      setErrorRegister(error.message);
    });
};

//   console.log(watch("password")); // watch input value by passing the name of it

  //   
    return (
        <div className="flex justify-center items-center bg-base-200">    
        <div className=" flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-center">Register now!</h1>
          </div>
          <form
            className=" rounded flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                
                {/* errors will return when field validation fails  */}
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.photo && (
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
              {errorRegister && (
                <span className="text-red-500">{errorRegister}</span>
              )}

              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral">Register</button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
            </div>
          </form>
          
        </div>
      </div>
    );
};

export default SignUp;