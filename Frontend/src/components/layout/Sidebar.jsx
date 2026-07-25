import {
  LayoutDashboard,
  Package,
  FolderOpen,
  TriangleAlert,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Products",
      path: "/products",
      icon: Package,
    },
    {
      name: "Categories",
      path: "/categories",
      icon: FolderOpen,
    },
    {
      name: "Low Stock",
      path: "/low-stock",
      icon: TriangleAlert,
    },
  ];

  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">

      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-violet-500">
          Inventory
        </h1>

        <p className="text-sm text-zinc-400">
          Management System
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">

        {links.map((link) => {

          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-800"
                }`
              }
            >
              <Icon size={20} />
              {link.name}
            </NavLink>
          );
        })}

      </nav>

      <button
        className="m-4 flex items-center gap-3 rounded-lg bg-red-600 px-4 py-3 text-white hover:bg-red-700 transition"
      >
        <LogOut size={20} />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;