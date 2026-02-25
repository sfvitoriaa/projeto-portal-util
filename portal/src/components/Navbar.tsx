import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 p-4 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/taskmaster">Tarefas</Link>
      <Link to="/connecthub">Contatos</Link>
      <Link to="/moneyflow">Finanças</Link>
    </nav>
  );
}
