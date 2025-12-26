import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";

export const socialLinks = [
  {
    name: "Email",
    icon: <FaEnvelope />,
    href: "mailto:sohanshahariar4@gmail.com",
    color: "hover:text-red-500 hover:bg-red-500/10",
    borderColor: "group-hover:border-red-500/50",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/shahariarsohan",
    color: "hover:text-blue-600 hover:bg-blue-600/10",
    borderColor: "group-hover:border-blue-600/50",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/shahariarsohan",
    color: "hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-800/10",
    borderColor:
      "group-hover:border-gray-800/50 dark:group-hover:border-gray-200/50",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/8801622143630",
    color: "hover:text-green-500 hover:bg-green-500/10",
    borderColor: "group-hover:border-green-500/50",
  },
  {
    name: "Messenger",
    icon: <FaFacebookF />,
    href: "https://m.me/shahariarsohan",
    color: "hover:text-pink-600 hover:bg-pink-600/10",
    borderColor: "group-hover:border-pink-600/50",
  },
];
