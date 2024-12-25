import { House, ChartNoAxesColumn, TrendingUp, SquareCheckBig, Flag, Users, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Navigator() {
  return (
    <nav className="space-y-2">
      {[
        { name: "Analytics", icon: <House size={48} />, subitems: [] },
        { name: "Dashboard", icon: <ChartNoAxesColumn size={48} />, subitems: ["Activity", "Team Stats"] },
        { name: "Campaign", icon: <TrendingUp size={48} />, subitems: [] },
        { name: "CRM", icon: <SquareCheckBig size={48} />, subitems: [] },
        { name: "Replies", icon: <Flag size={48} />, subitems: [] },
        { name: "Projects", icon: <Users size={48} />, subitems: [] },
        { name: "Extract Leads", icon: <Users size={48} />, subitems: [] },
        { name: "Settings", icon: <Settings size={48} />, subitems: ["Integration", "Team Stats"] },
      ].map((item) => (
        <Accordion
          type="single"
          collapsible
          key={item.name}
          className={item.name === "Campaign" ? "bg-secondary rounded-md" : ""}
        >
          <AccordionItem value={item.name}>
            <AccordionTrigger>
              <Button
                variant={item.name === "Campaign" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <span>{item.icon}</span>
                {item.name}
              </Button>
            </AccordionTrigger>
            <AccordionContent>
              {
                item.subitems.map((subitem) => (
                  <Button
                    key={subitem}
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    {subitem}
                  </Button>
                ))
              }
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </nav>
  )
}

