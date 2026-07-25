import { Card, CardContent } from "@/components/ui/card";

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-violet-500 transition-all">
      <CardContent className="p-6 flex items-center justify-between">

        <div>
          <p className="text-zinc-400 text-sm">{title}</p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`h-14 w-14 rounded-xl flex items-center justify-center ${color}`}
        >
          <Icon className="text-white" size={26} />
        </div>

      </CardContent>
    </Card>
  );
}

export default StatCard;