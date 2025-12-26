
import { FaReact, FaNodeJs, FaServer, FaJsSquare } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
  SiMongoose,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
export const techs = [
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
    color: "from-yellow-400/20 to-yellow-600/20",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    color: "from-blue-600/20 to-blue-800/20",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-500" />,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-600" />,
    color: "from-purple-600/20 to-purple-800/20",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-foreground" />,
    color: "from-gray-800/20 to-gray-600/20",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600" />,
    color: "from-green-600/20 to-green-800/20",
  },
  {
    name: "Express.js",
    icon: <FaServer className="text-foreground" />,
    color: "from-gray-700/20 to-gray-500/20",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    color: "from-green-500/20 to-green-700/20",
  },
  {
    name: "Mongoose",
    icon: <SiMongoose className="text-red-700" />,
    color: "from-red-700/20 to-red-900/20",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-700" />,
    color: "from-blue-700/20 to-blue-900/20",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-gray-700" />,
    color: "from-gray-700/20 to-gray-900/20",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-500" />,
    color: "from-sky-500/20 to-sky-700/20",
  },
];
