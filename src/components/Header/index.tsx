import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-950 text-white px-8 py-4 flex justify-between items-center border-b border-beatlistGreen/40">
      <div
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <h1 className=" text-emerald-300 text-2xl font-bold tracking-wide group-hover:text-beatlistGreen transition-colors">
          BeatList
        </h1>
      </div>

      <h1 className="text-2xl font-bold tracking-wide">
        <span className="text-emerald-300">Gerenciador de Playlists</span>
      </h1>

      <nav className="flex items-center gap-8">
        <Link
          to="/sobre"
          className="text-emerald-300 hover:text-white transition-colors duration-200"
        >
          <strong>Sobre</strong>
        </Link>

        <Link
          to="/login"
          className="text-emerald-300 font-bold py-2 px-4 rounded-lg border border-beatlistGreen/40 
                     hover:bg-beatlistGreen hover:text-white transition-colors duration-200"
        >
          Logout
        </Link>
      </nav>
    </header>
  );
}
