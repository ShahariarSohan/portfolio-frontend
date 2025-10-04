


import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";


const getAdminSession =async () => {
   return await getServerSession(authOptions)
};

export default getAdminSession;