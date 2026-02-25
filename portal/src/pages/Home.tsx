import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Portal Utilitário</h1>
      <div className="grid grid-cols-3 gap-6">
        <Link to="/taskmaster" className="bg-blue-600 text-white p-10 text-center rounded-lg shadow-lg hover:bg-blue-700">
          Tarefas
        </Link>
        <Link to="/connecthub" className="bg-green-600 text-white p-10 text-center rounded-lg shadow-lg hover:bg-green-700">
          Contatos
        </Link>
        <Link to="/moneyflow" className="bg-purple-600 text-white p-10 text-center rounded-lg shadow-lg hover:bg-purple-700">
          Finanças
        </Link>
      </div>
    </div>
  );
}
