import { SpendCard } from "@/components/spend-card";
import { UsageChart } from "@/components/usage-chart";
import { ModelBreakdown } from "@/components/model-breakdown";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">OpenClaw Cost Dashboard</h1>
          <div className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SpendCard
            tokensUsed={60000}
            tokensTotal={200000}
            estimatedCost={0.9}
            budgetLimit={2.0}
          />
          
          <UsageChart
            data={[
              { date: "00:00", tokens: 5000 },
              { date: "04:00", tokens: 12000 },
              { date: "08:00", tokens: 25000 },
              { date: "12:00", tokens: 42000 },
              { date: "16:00", tokens: 60000 },
            ]}
          />

          <ModelBreakdown
            models={[
              { name: "Kimi K2.5", tokens: 45000, cost: 0.67 },
              { name: "Claude Haiku", tokens: 15000, cost: 0.23 },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
