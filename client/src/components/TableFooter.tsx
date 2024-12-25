import { Button } from "@/components/ui/button";

interface TableFooterProps {
  page: number;
  total: number;
  handlePagination: (newPage: number) => void;
}

const TableFooter: React.FC<TableFooterProps> = ({ page, total, handlePagination }) => {
  const start = Math.min(total, (page - 1) * 10 + 1);
  const end = Math.min(total, start + 9);
  
  return (
    <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
      <div>Showing {start}-{end} of {total}</div>
      <div className="flex">
        <Button variant="outline" size="sm" className="rounded-r-none rounded-l-md" onClick={() => handlePagination(page - 1)}>
          Previous
        </Button>
        <Button variant="outline" size="sm" className="text-indigo-600 bg-indigo-100 rounded-l-none rounded-r-md" onClick={() => handlePagination(page + 1)}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default TableFooter