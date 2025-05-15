import SideBar from "@/components/SideBar";
import { UserProvider } from "./UserContext";

export default async function Layout({ children }) {
  return (
    <UserProvider>
      <div className="flex h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-gray-100">
        <SideBar />
        <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
      </div>
    </UserProvider>
  );
}
