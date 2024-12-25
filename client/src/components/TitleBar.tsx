import Logo from "../assets/logo.svg";

export default function TitleBar() {
  return (
    <div className="flex items-center gap-2">
      <img src={Logo} alt="React Logo" />
      <span className="font-semibold text-xl">Leadsync</span>
    </div>
  )
}

