import { LifeBuoy, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TitleBar from './TitleBar';
import SelectionPanel from './SelectionPanel';
import Navigator from './Navigator';

export default function Sidebar() {
  return (
    <div className="w-60 border-r bg-background p-6 space-y-6 relative">
      <TitleBar />
      <SelectionPanel />
      <Navigator />

      <div className="pt-6 mt-6 absolute bottom-28">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <span>
            <LifeBuoy size={48} />
          </span>
          Support
        </Button>
      </div>

      <div className="pt-6 border-t flex justify-between absolute bottom-8">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Dev</span>
            <span className="text-xs text-muted-foreground">dev@leadsync.ai</span>
          </div>
        </div>
        <LogOut size={18} strokeWidth={1.25} className="ml-5" />
      </div>
    </div>
  )
}

