import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex gap-2">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <div className="social-icon bg-[#3b5998] hover:-translate-y-1 duration-300">
          <FaFacebookF style={{ color: "#fff" }} />
        </div>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <div className="social-icon bg-[#55acee] hover:-translate-y-1 duration-300">
          <FaTwitter style={{ color: "#fff" }} />
        </div>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <div className="social-icon bg-[#007bb5] hover:-translate-y-1 duration-300">
          <FaLinkedin style={{ color: "#fff" }} />
        </div>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <div className="social-icon bg-[#e4405f] hover:-translate-y-1 duration-300">
          <FaInstagram style={{ color: "#fff" }} />
        </div>
      </a>
      <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
        <div className="social-icon bg-[#bd081c] hover:-translate-y-1 duration-300">
          <FaPinterestP style={{ color: "#fff" }} />
        </div>
      </a>
    </div>
  );
}
