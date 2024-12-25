import { MoreVertical, Play, Trash2, Mail, User, Check, ChartLine, SlidersHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TableView() {
  return (
    <ScrollArea className="rounded-lg">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-5 gap-4 bg-gray-50 px-6 py-3 text-sm font-medium text-muted-foreground">
          <div>NAME</div>
          <div className="ml-32">STATUS</div>
          <div className="ml-20">TOTAL LEAD</div>
          <div className="ml-10">INVITE SENT</div>
          <div>CONNECTION</div>
        </div>
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-5 gap-4 border rounded-xl mt-4 px-6 py-4 hover:bg-muted/50"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 rounded flex items-center justify-center">
                <ChartLine className="h-4 w-4 text-blue-500" />
              </div>
              <div>
                <div className="font-medium">Growth Connection</div>
                <div className="text-sm text-muted-foreground">Create in August 2014</div>
              </div>
            </div>
            <div className="flex items-center ml-32">
              <Badge variant="secondary">Draft</Badge>
            </div>
            <div className="flex items-center ml-20">
              <User size={18} className="mr-2 ml-2" />
              50
            </div>
            <div className="flex items-center ml-10">
              <Mail size={18} className="mr-2 ml-2" />
              50
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <Check size={18} className="mr-2 ml-2" />
                50
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="rounded-full bg-indigo-100">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4 stroke-blue-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="my-1">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Go to Details
                  </DropdownMenuItem>
                  <DropdownMenuItem className="my-1">
                    <Play className="mr-2 h-4 w-4 fill-black" />
                    Start Campaign
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive border-t my-1">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Campaign
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

