export default function TitleBar() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-indigo-500 rounded"></div>
      </div>
      <span className="font-semibold">Leadsync</span>
    </div>
  )
}

