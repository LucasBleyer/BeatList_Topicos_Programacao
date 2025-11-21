import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "../../store";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SongSearch from "../../components/SongSearch";

import {
  addPlaylist,
  editPlaylist,
  deletePlaylist,
  addSong,
  deleteSong,
} from "../../store/slices/playlistSlice";

import { type Track } from "../../services/apiService";
import {
  PlusCircle,
  Search,
  ArrowLeft,
  Edit,
  Trash2,
  Check,
  X,
} from "lucide-react";

type ViewMode = "playlists" | "create" | "search";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { playlists } = useSelector((state: RootState) => state.playlists);
  const { user, lastLogin } = useSelector((state: RootState) => state.auth);

  const [activeView, setActiveView] = useState<ViewMode>("playlists");
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [editingPlaylistId, setEditingPlaylistId] = useState<string | null>(
    null
  );
  const [editedPlaylistName, setEditedPlaylistName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [songToAdd, setSongToAdd] = useState<Track | null>(null);

  const userPlaylists = useMemo(
    () => (user ? playlists.filter((p) => p.usuarioId === user.id) : []),
    [playlists, user]
  );

  const handleAddPlaylist = () => {
    if (!newPlaylistName.trim() || !user?.id) return;
    dispatch(addPlaylist({ name: newPlaylistName.trim(), usuarioId: user.id }));
    setNewPlaylistName("");
    setActiveView("playlists");
  };

  const handleSaveEditPlaylist = () => {
    if (!editedPlaylistName.trim() || !editingPlaylistId || !user?.id) return;

    dispatch(
      editPlaylist({
        id: editingPlaylistId,
        name: editedPlaylistName.trim(),
        usuarioId: user.id,
      })
    );

    setEditingPlaylistId(null);
    setEditedPlaylistName("");
  };

  const handleOpenAddSongModal = (track: Track) => {
    setSongToAdd(track);
    setIsModalOpen(true);
  };

  const handleConfirmAddSong = (playlistId: string) => {
    if (!songToAdd || !user?.id) return;

    const newSongPayload = {
      playlistId,
      usuarioId: user.id,
      title: songToAdd.strTrack,
      artist: songToAdd.strArtist,
      genero: songToAdd.strGenre || "Desconhecido",
      ano: parseInt(songToAdd.intYearReleased) || new Date().getFullYear(),
    };

    dispatch(addSong(newSongPayload));
    setIsModalOpen(false);
    setSongToAdd(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-emerald-950 to-emerald-900 text-emerald-100">
      <Header />

      <main className="flex-grow pt-24 px-4 sm:px-6 pb-10 max-w-7xl mx-auto w-full">

        {/* TÍTULO / BEM-VINDO */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-emerald-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
              Sua Dashboard
            </h1>

            <p className="text-emerald-200/70 text-sm mt-1">
              {user?.email} • Último acesso:{" "}
              {lastLogin && new Date(lastLogin).toLocaleString("pt-BR")}
            </p>
          </div>
        </div>

        {/* CARDS PRINCIPAIS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div
            onClick={() => setActiveView("create")}
            className="bg-emerald-950/40 border border-emerald-800 rounded-xl p-6 
                       shadow-[0_0_25px_rgba(34,197,94,0.25)]
                       hover:shadow-[0_0_35px_rgba(34,197,94,0.4)] backdrop-blur-xl
                       transition cursor-pointer flex items-center gap-4"
          >
            <PlusCircle size={40} className="text-emerald-400" />
            <div>
              <h3 className="text-lg font-bold text-emerald-300">
                Criar Nova Playlist
              </h3>
              <p className="text-sm text-emerald-300/60">
                Comece uma nova coleção de músicas.
              </p>
            </div>
          </div>

          <div
            onClick={() => setActiveView("search")}
            className="bg-emerald-950/40 border border-emerald-800 rounded-xl p-6 
                       shadow-[0_0_25px_rgba(34,197,94,0.25)]
                       hover:shadow-[0_0_35px_rgba(34,197,94,0.4)] backdrop-blur-xl
                       transition cursor-pointer flex items-center gap-4"
          >
            <Search size={40} className="text-emerald-400" />
            <div>
              <h3 className="text-lg font-bold text-emerald-300">
                Buscar Músicas na API
              </h3>
              <p className="text-sm text-emerald-300/60">
                Encontre e adicione novas músicas.
              </p>
            </div>
          </div>
        </div>

        {/* CONTEÚDO VARIÁVEL */}
        <div className="bg-emerald-950/30 border border-emerald-800 rounded-xl p-6 backdrop-blur-lg shadow-inner shadow-emerald-900/40">

          {/* CRIAR PLAYLIST */}
          {activeView === "create" && (
            <div>
              <button
                onClick={() => setActiveView("playlists")}
                className="flex items-center gap-2 text-sm text-emerald-300/70 hover:text-emerald-300 mb-4 transition"
              >
                <ArrowLeft size={16} /> Voltar para Playlists
              </button>

              <h2 className="text-2xl font-bold text-emerald-300 mb-4 drop-shadow-[0_0_6px_rgba(34,197,94,0.4)]">
                Criar Nova Playlist
              </h2>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Nome da nova playlist"
                  value={newPlaylistName}
                  onChange={(e) => setNewPlaylistName(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-emerald-950/60 text-emerald-100 
                             border border-emerald-800 placeholder-emerald-300/40
                             focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />

                <button
                  onClick={handleAddPlaylist}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 
                             text-white rounded-lg font-semibold transition-shadow
                             hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                >
                  Criar
                </button>
              </div>
            </div>
          )}

          {/* BUSCA DE MÚSICAS */}
          {activeView === "search" && (
            <div>
              <button
                onClick={() => setActiveView("playlists")}
                className="flex items-center gap-2 text-sm text-emerald-300/70 hover:text-emerald-300 mb-4 transition"
              >
                <ArrowLeft size={16} /> Voltar para Playlists
              </button>

              <SongSearch onAddSong={handleOpenAddSongModal} />
            </div>
          )}

          {/* LISTAGEM DE PLAYLISTS */}
          {activeView === "playlists" && (
            <div>
              <h2 className="text-2xl font-bold text-emerald-300 mb-4 drop-shadow-[0_0_6px_rgba(34,197,94,0.4)]">
                Suas Playlists
              </h2>

              {userPlaylists.length === 0 ? (
                <p className="text-emerald-200/60 text-center py-10">
                  Você ainda não criou nenhuma playlist.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {userPlaylists.map((playlist) => (
                    <div
                      key={playlist.id}
                      className="bg-emerald-950/50 border border-emerald-800 rounded-xl p-5 
                                 shadow-[0_0_25px_rgba(34,197,94,0.2)] backdrop-blur-xl"
                    >
                      {/* CABEÇALHO DO CARD */}
                      <div className="flex justify-between items-center mb-4">

                        {editingPlaylistId === playlist.id ? (
                          <div className="flex gap-2 w-full">
                            <input
                              type="text"
                              value={editedPlaylistName}
                              onChange={(e) =>
                                setEditedPlaylistName(e.target.value)
                              }
                              className="flex-1 px-3 py-1 bg-emerald-900/70 text-emerald-100 
                                         rounded border border-emerald-700
                                         focus:outline-none focus:ring-2 focus:ring-emerald-400 text-lg"
                            />

                            <button
                              onClick={handleSaveEditPlaylist}
                              className="text-green-400 hover:text-green-300"
                            >
                              <Check size={20} />
                            </button>

                            <button
                              onClick={() => setEditingPlaylistId(null)}
                              className="text-red-500 hover:text-red-400"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        ) : (
                          <>
                            <h3 className="text-xl font-semibold truncate text-emerald-200">
                              {playlist.name}
                            </h3>

                            <div className="flex gap-3">
                              <button
                                onClick={() => {
                                  setEditingPlaylistId(playlist.id);
                                  setEditedPlaylistName(playlist.name);
                                }}
                                className="text-yellow-400 hover:text-yellow-300"
                              >
                                <Edit size={18} />
                              </button>

                              <button
                                onClick={() => {
                                  if (!user) return;
                                  dispatch(
                                    deletePlaylist({
                                      id: playlist.id,
                                      usuarioId: user.id,
                                    })
                                  );
                                }}
                                className="text-red-500 hover:text-red-400"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </>
                        )}
                      </div>

                      {/* LISTA DE MÚSICAS */}
                      <div className="space-y-3">
                        {playlist.songs.map((song) => (
                          <div
                            key={song.id}
                            className="bg-emerald-900/40 border border-emerald-800 px-4 py-2 rounded-lg 
                                       flex justify-between items-center"
                          >
                            <div>
                              <span className="font-medium text-sm text-emerald-200">
                                {song.title}
                              </span>

                              <p className="text-emerald-300/60 text-xs">
                                — {song.artist}
                              </p>
                            </div>

                            <button
                              onClick={() => {
                                if (!user) return;

                                dispatch(
                                  deleteSong({
                                    playlistId: playlist.id,
                                    songId: song.id,
                                    usuarioId: user.id,
                                  })
                                );
                              }}
                              className="text-red-500 hover:text-red-400"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}

                        {playlist.songs.length === 0 && (
                          <p className="text-emerald-300/50 text-sm text-center py-4">
                            Nenhuma música adicionada.
                          </p>
                        )}
                      </div>
                    </div>
                  ))}

                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* MODAL */}
      {isModalOpen && songToAdd && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-emerald-950/80 border border-emerald-700 p-6 rounded-xl 
                          shadow-[0_0_25px_rgba(34,197,94,0.3)] w-full max-w-md">

            <h3 className="text-lg font-bold text-emerald-300 mb-2">
              Adicionar Música
            </h3>

            <p className="text-sm text-emerald-200/70 mb-4">
              Adicionar "
              <span className="font-semibold text-emerald-200">
                {songToAdd.strTrack}
              </span>
              " por{" "}
              <span className="font-semibold text-emerald-200">
                {songToAdd.strArtist}
              </span>{" "}
              à playlist:
            </p>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
              {userPlaylists.length > 0 ? (
                userPlaylists.map((playlist) => (
                  <button
                    key={playlist.id}
                    onClick={() => handleConfirmAddSong(playlist.id)}
                    className="w-full text-left px-4 py-3 bg-emerald-900/40 
                               border border-emerald-800 hover:bg-emerald-700/40 
                               rounded-md transition text-emerald-200"
                  >
                    {playlist.name}
                  </button>
                ))
              ) : (
                <p className="text-emerald-300/60 text-center py-4">
                  Primeiro crie uma playlist.
                </p>
              )}
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-emerald-700 hover:bg-emerald-600 py-2 rounded-lg 
                         text-white transition"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
      

      <Footer />
    </div>
  );
};

export default Dashboard;
