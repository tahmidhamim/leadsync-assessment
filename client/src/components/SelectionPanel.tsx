import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function SelectionPanel() {
  return (
    <div className="space-y-1">
      <div className="text-sm text-muted-foreground">Choose your Account</div>
      <Button variant="outline" className="w-full justify-between">
        Project name
        <ChevronDown className="h-4 w-4 opacity-50" />
      </Button>
    </div>
  )
}

