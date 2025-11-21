export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="
      w-full 
      bg-gradient-to-r from-black via-gray-950 to-black 
      text-gray-300 
      border-t border-neonGreen/40 
      shadow-[0_0_12px_rgba(0,255,140,0.15)]
      backdrop-blur-sm
    ">
      <div className="container mx-auto px-6 py-3 flex justify-center">
        <p className="text-sm tracking-wide text-gray-400">
          &copy; {currentYear}{" "}
          <span className="text-neonGreen font-semibold drop-shadow-[0_0_8px_rgba(0,255,140,0.5)]">
            BeatList
          </span>{" "}
          — Lucas Oliveira Bleyer {currentYear}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
