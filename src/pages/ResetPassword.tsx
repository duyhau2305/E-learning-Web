import { Link } from "react-router-dom";
import SocialMedia from "../components/SocialMedia";

export default function ResetPassword() {
  return (
    <>
      <div
        className="pt-64 pb-28"
        style={{
          backgroundImage: `url('/public/assets/image/header-banner.jpg')`,
        }}
      >
        <p className="text-2xl md:text-4xl font-bold text-black text-center pb-3">
          Reset Password
        </p>
        <p className="text-base text-center">Home / Reset Password</p>
      </div>
      <div className="container mx-auto py-28">
        <div className="max-w-xl mx-auto p-14 px-20 flex flex-col gap-y-5 shadow rounded bg-white">
          <p className="text-3xl font-bold text-center">Reset Password</p>
          <div className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="Email *"
              className="input w-full"
            />
          </div>
          <button className="button">Submit Now</button>
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
