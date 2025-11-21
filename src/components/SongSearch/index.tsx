import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../store";
import {
  fetchSongsByArtist,
  clearSearchResults,
} from "../../store/slices/searchSlice";
import { type Track } from "../../services/apiService";

const SongSearch = ({ onAddSong }: { onAddSong: (track: Track) => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState("");

  const { results, status, error } = useSelector(
    (state: RootState) => state.search
  );

  useEffect(() => {
    if (query.trim() === "") {
      dispatch(clearSearchResults());
      return;
    }

    const timer = setTimeout(() => {
      dispatch(fetchSongsByArtist(query));
    }, 500);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-neonGreen tracking-wide">
        Buscar Músicas na API
      </h2>

      {/* INPUT VERDE NEON */}
      <input
        type="text"
        placeholder="Digite o nome de um artista..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full px-4 py-3 rounded-lg
          bg-black/40 text-white
          placeholder-gray-500
          border border-neonGreen/40
          shadow-[0_0_8px_rgba(0,255,140,0.25)]
          focus:outline-none focus:ring-2 focus:ring-neonGreen focus:border-neonGreen
          transition
        "
      />

      {/* Resultados */}
      <div className="mt-6">
        {status === "loading" && (
          <p className="text-gray-400">Buscando...</p>
        )}
        {status === "failed" && (
          <p className="text-red-500">Erro: {error}</p>
        )}
        {status === "succeeded" &&
          results.length === 0 &&
          query.trim() !== "" && (
            <p className="text-gray-500">
              Nenhum resultado encontrado para "{query}".
            </p>
          )}

        <div className="space-y-3">
          {results.map((track) => (
            <div
              key={track.idTrack}
              className="
                bg-gray-900/60 p-4 rounded-lg flex justify-between items-center
                border border-neonGreen/20
                shadow-[0_0_12px_rgba(0,255,140,0.15)]
                hover:border-neonGreen/40
                hover:shadow-[0_0_15px_rgba(0,255,140,0.3)]
                transition
              "
            >
              <div>
                <span className="font-medium text-white">
                  {track.strTrack}
                </span>
                <span className="text-neonGreen/80 text-sm">
                  {" "}- {track.strArtist}
                </span>
                <div className="text-xs text-gray-400">
                  Álbum: {track.strAlbum || "N/A"} • Ano:{" "}
                  {track.intYearReleased || "N/A"}
                </div>
              </div>

              {/* Botão VERDE NEON */}
              <button
                onClick={() => onAddSong(track)}
                className="
                  bg-neonGreen/20 border border-neonGreen/60
                  text-neonGreen font-semibold text-sm
                  px-4 py-1.5 rounded-md
                  shadow-[0_0_10px_rgba(0,255,140,0.3)]
                  hover:bg-neonGreen hover:text-black
                  hover:shadow-[0_0_15px_rgba(0,255,140,0.7)]
                  transition
                  whitespace-nowrap
                "
              >
                Adicionar
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongSearch;
