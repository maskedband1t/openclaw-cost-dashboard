"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Model {
  name: string;
  tokens: number;
  cost: number;
}

interface ModelBreakdownProps {
  models: Model[];
}

export function ModelBreakdown({ models }: ModelBreakdownProps) {
  const totalTokens = models.reduce((sum, m) => sum + m.tokens, 0);
  const totalCost = models.reduce((sum, m) => sum + m.cost, 0);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Model Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {models.map((model) => {
          const percentage = (model.tokens / totalTokens) * 100;
          return (
            <div key={model.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{model.name}</span>
                <span className="text-muted-foreground">
                  ${model.cost.toFixed(2)}
                </span>
              </div>
              <Progress value={percentage} className="h-1.5" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{model.tokens.toLocaleString()} tokens</span>
                <span>{percentage.toFixed(1)}%</span>
              </div>
            </div>
          );
        })}
        
        <div className="pt-2 border-t">
          <div className="flex justify-between text-sm font-medium">
            <span>Total</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
