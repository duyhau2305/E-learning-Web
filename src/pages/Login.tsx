import { Link } from "react-router-dom";
import SocialMedia from "../components/SocialMedia";
import { signInSuccess } from "../lib/redux/user/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div
        className="pt-64 pb-28"
        style={{
          backgroundImage: `url('/public/assets/image/header-banner.jpg')`,
        }}
      >
        <p className="text-2xl md:text-4xl font-bold text-black text-center pb-3">
          Login
        </p>
        <p className="text-base text-center">Home / Login</p>
      </div>
      <div className="container mx-auto py-28">
        <div className="max-w-xl mx-auto p-14 px-20 flex flex-col gap-y-5 shadow rounded bg-white">
          <p className="text-3xl font-bold text-center">Login</p>
          <div className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="User Name *"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Password *"
              className="input w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="remember" className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 mr-3" />
              <span>Remember Me</span>
            </label>
            <a href="">Forget Password?</a>
          </div>
          <button
            className="button"
            onClick={() => {
              dispatch(signInSuccess(true));
              navigate("/");
            }}
          >
            Submit Now
          </button>
          <p className="text-center">
            Don't Have Any Account?
            <span>
              <Link to="/sign-up"> Sign Up</Link>
            </span>
          </p>
          <div className="flex flex-col items-center gap-5">
            <div className="w-9 h-9 rounded-full primary-bg flex items-center justify-center">
              <p className="text-white">OR</p>
            </div>
            <p className="font-bold text-xl">Login With Social Media</p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
}
