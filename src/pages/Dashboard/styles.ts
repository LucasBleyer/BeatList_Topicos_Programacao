export const dashboardStyles = {
  container:
    "min-h-screen flex flex-col bg-gradient-to-br from-black via-emerald-950 to-emerald-800 px-6 py-8",

  header:
    "text-3xl font-extrabold text-emerald-400 mb-4 text-center tracking-tight drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]",

  subheader: "text-center text-emerald-200/60 mb-10 text-sm",

  playlistGrid: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",

  card:
    "bg-emerald-950/40 border border-emerald-800 rounded-xl p-6 shadow-[0_0_40px_rgba(16,185,129,0.4)] ring-1 ring-emerald-600/40 backdrop-blur-xl flex flex-col",

  cardTitle:
    "text-lg font-semibold text-emerald-300 mb-4 drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]",

  input:
    "w-full px-3 py-2 bg-emerald-950/70 text-emerald-100 border border-emerald-800 rounded-lg " +
    "focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-emerald-300/40 transition",

  buttonPrimary:
    "bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400",

  buttonSecondary:
    "text-emerald-400 hover:text-emerald-300 transition text-sm cursor-pointer",

  songItem:
    "flex justify-between items-center bg-emerald-900/40 border border-emerald-800 px-3 py-2 rounded-lg text-sm text-emerald-100 shadow-[0_0_10px_rgba(16,185,129,0.25)]",

  logoutWrapper: "mt-10 flex justify-center",

  logoutButton:
    "bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400",
};
