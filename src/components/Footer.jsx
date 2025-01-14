import { FaGithub, FaXTwitter, FaDiscord, FaTwitch } from "react-icons/fa6";

const links = [
  { id: 1, href: "https://discord.com", icon: <FaDiscord /> },
  { id: 2, href: "https://x.com", icon: <FaXTwitter /> },
  { id: 3, href: "https://github.com", icon: <FaGithub /> },
  { id: 4, href: "https://twitch.tv", icon: <FaTwitch /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy;Starloom {new Date().getFullYear()}
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
