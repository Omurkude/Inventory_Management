import { useEffect, useState } from "react";
import api from "@/services/api";

import {
  Package,
  FolderOpen,
  TriangleAlert,
  DollarSign,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";

function Dashboard() {

  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    lowStockProducts: 0,
    totalInventoryValue: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  async function fetchDashboard() {
    try {

      const response = await api.get("/dashboard");

      setStats(response.data.data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <h2 className="text-white text-xl">
        Loading Dashboard...
      </h2>
    );
  }

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Welcome back! Here's an overview of your inventory.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Products"
          value={stats.totalProducts}
          icon={Package}
          color="bg-violet-600"
        />

        <StatCard
          title="Categories"
          value={stats.totalCategories}
          icon={FolderOpen}
          color="bg-blue-600"
        />

        <StatCard
          title="Low Stock"
          value={stats.lowStockProducts}
          icon={TriangleAlert}
          color="bg-orange-600"
        />

        <StatCard
          title="Inventory Value"
          value={`₹${stats.totalInventoryValue}`}
          icon={DollarSign}
          color="bg-green-600"
        />

      </div>

    </div>
  );
}

export default Dashboard;