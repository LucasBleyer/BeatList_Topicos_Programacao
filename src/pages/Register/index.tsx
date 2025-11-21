import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, login } from "../../store/slices/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) return;
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      dispatch(register({ email: email.trim(), password }));
      dispatch(login({ email: email.trim(), password }));
      navigate("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Erro ao registrar usuário");
      }
    }
  };

  const goToLogin = () => navigate("/login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-emerald-950 to-emerald-800 relative overflow-hidden px-4">

      {/* Glow animado */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent animate-pulseSlow"></div>

      {/* Card */}
      <div className="relative z-10 bg-emerald-950/40 backdrop-blur-xl p-10 rounded-2xl 
                      shadow-[0_0_40px_rgba(34,197,94,0.3)] w-full max-w-md 
                      border border-emerald-800 ring-1 ring-emerald-600/40 animate-fadeIn">

        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-bold tracking-wide text-emerald-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
            BeatList
          </h1>

          <h2 className="text-3xl font-bold text-white tracking-wide drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
            Criar conta
          </h2>

          <p className="text-emerald-200/60 text-sm mt-1">
            BeatList — seu gerenciador de playlists favorito!
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-emerald-200/80 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-emerald-950/70 text-emerald-100 
                         placeholder-emerald-300/40 border border-emerald-800 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400 
                         transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-emerald-200/80 text-sm mb-1">Senha</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-emerald-950/70 text-emerald-100 
                         placeholder-emerald-300/40 border border-emerald-800 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400 
                         transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-emerald-200/80 text-sm mb-1">Confirmar senha</label>
            <input
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-emerald-950/70 text-emerald-100 
                         placeholder-emerald-300/40 border border-emerald-800 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400 
                         transition-all duration-200"
            />
          </div>

          {/* Botão */}
          <button
            onClick={handleRegister}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white 
                       font-semibold py-3 rounded-lg transition-all duration-300 cursor-pointer
                       hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:scale-[1.02] 
                       active:scale-[0.97]"
          >
            Registrar
          </button>

          <div className="text-center mt-6">
            <p className="text-emerald-200/70 text-sm">Já tem uma conta?</p>

            <button
              onClick={goToLogin}
              className="mt-2 text-emerald-400 hover:text-emerald-300 underline 
                         font-medium transition-all duration-200 cursor-pointer"
            >
              Fazer login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
