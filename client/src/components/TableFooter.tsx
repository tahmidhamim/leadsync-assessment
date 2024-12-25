import { Button } from "@/components/ui/button";

export default function TableFooter() {
  return (
    <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
      <div>Showing 1-10 of 1000</div>
      <div className="flex">
        <Button variant="outline" size="sm" className="rounded-r-none rounded-l-md">Previous</Button>
        <Button variant="outline" size="sm" className="text-indigo-600 bg-indigo-100 rounded-l-none rounded-r-md">Next</Button>
      </div>
    </div>
  )
}

