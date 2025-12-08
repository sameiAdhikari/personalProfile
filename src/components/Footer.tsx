import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const footerLink = [
    { title: "home", route: "/" },
    { title: "second home", route: "/secondHome" },
    { title: "work", route: "/work" },
    { title: "blog", route: "/blog" },
    { title: "Link in bio", route: "/linkInBio" },
    { title: "coming soon", route: "/comingSoon" },
  ];
  const footerLinkTwo = [
    { title: "Style Guide", route: "/style" },
    { title: "instructions", route: "/secondHome" },
    { title: "licenses", route: "/work" },
    { title: "changelog", route: "/blog" },
    { title: "error 404", route: "/linkInBio" },
    { title: "password protected", route: "/comingSoon" },
  ];
  return (
    <footer className="min-w-full py-10 px-10 text-black">
      <div className="py-10 flex items-center justify-between ">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-4xl font-semibold">Samjhana</h2>
          <p className="max-w-110">
            Feel free to comment us, we are always looking forward to hear form
            you. Your valuable suggestions means a lot to us!{" "}
          </p>
          <div className="flex items-center gap-18 mt-4">
            <Link
              to={"https://www.facebook.com/nishant.khadka.9237"}
              target="_blank"
            >
              <FaFacebookF className="text-3xl cursor-pointer  text-amber-500 hover:text-primary transition-all duration-500" />
            </Link>
            <Link to={"https://x.com/home"} target="_blank">
              <FaTwitter className="text-3xl cursor-pointer  text-amber-500 hover:text-primary transition-all duration-500" />
            </Link>
            <Link to={"https://www.linkedin.com/feed/"} target="_blank">
              <FaLinkedinIn className="text-3xl cursor-pointer  text-amber-500 hover:text-primary transition-all duration-500" />
            </Link>
            <Link to={"https://www.instagram.com/"} target="_blank">
              <FaInstagram className="text-3xl cursor-pointer  text-amber-500 hover:text-primary transition-all duration-500" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center text-lg w-[30%] ">
          <div className="flex flex-col items-center justify-center gap-3">
            {footerLink.map((link) => (
              <NavLink
                key={link.title}
                to={link.route}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-black" : "text-muted"
                  } hover:text-black hover:underline capitalize`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            {footerLinkTwo.map((link) => (
              <NavLink
                key={link.title}
                to={link.route}
                referrerPolicy="no-referrer"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-black" : "text-muted"
                  } hover:text-black hover:underline capitalize`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full p-5 border-t  flex items-center justify-between">
        <div></div>
        <div className="text-black/80">
          Copyright © 2025 samei Inc. All rights reserved.
        </div>
        <div className="flex items-center justify-between gap-4 text-muted">
          <Link to={"/"} className="hover:underline">
            Privacy Policy
          </Link>
          <Link to={"/"} className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to={"/"} className="hover:underline">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
