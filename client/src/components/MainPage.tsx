import ActionBar from "./ActionBar";
import TableFooter from "./TableFooter";
import TableView from "./TableView";

export default function MainPage() {
  return (
    <main className="p-6">
      <ActionBar />
      <TableView />
      <TableFooter />
    </main>
  )
}

