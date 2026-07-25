import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="ml-64 flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-6 bg-zinc-950 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;