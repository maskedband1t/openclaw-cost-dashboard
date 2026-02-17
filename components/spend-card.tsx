"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

interface SpendCardProps {
  tokensUsed: number;
  tokensTotal: number;
  estimatedCost: number;
  budgetLimit: number;
}

export function SpendCard({
  tokensUsed,
  tokensTotal,
  estimatedCost,
  budgetLimit,
}: SpendCardProps) {
  const percentage = (tokensUsed / tokensTotal) * 100;
  const isWarning = percentage > 80;
  const isDanger = percentage > 95;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Current Period Usage
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold">{tokensUsed.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">
            / {tokensTotal.toLocaleString()} tokens
          </span>
        </div>

        <Progress
          value={percentage}
          className={`h-2 ${isDanger ? "bg-red-500" : isWarning ? "bg-amber-500" : ""}`}
        />

        <div className="mt-4 flex justify-between text-sm">
          <span className="text-muted-foreground">
            Estimated cost: <span className="font-medium">${estimatedCost.toFixed(2)}</span>
          </span>
          <span className="text-muted-foreground">
            Budget: ${budgetLimit}
          </span>
        </div>

        {(isWarning || isDanger) && (
          <Alert variant={isDanger ? "destructive" : "default"} className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              {isDanger
                ? "Critical: Approaching budget limit. Consider model routing."
                : "Warning: Usage above 80%. Monitor closely."}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
