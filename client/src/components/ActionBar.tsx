import React from 'react';
import { Search, ChevronDown, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ActionBarProps {
  handleCreateCampaign: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({ handleCreateCampaign }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-9 w-[300px] rounded-full" placeholder="Search Campaign" />
        </div>
        <Button variant="outline" className="rounded-full">
          Filter by
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="rounded-full bg-indigo-100 text-indigo-600">
          Select Campaign
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <Button className="bg-indigo-600 rounded-full" onClick={handleCreateCampaign}>
        <Plus size={48} strokeWidth={3}/>
        Create Campaign
      </Button>
    </div>
  )
}

export default ActionBar;