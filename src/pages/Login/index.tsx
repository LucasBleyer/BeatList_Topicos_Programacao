import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) return;

    try {
      dispatch(login({ email: email.trim(), password }));
      navigate("/dashboard");
    } catch (err: any) {
      alert(err.message || "Credenciais inválidas");
    }
  };

  const goToRegister = () => navigate("/register");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-emerald-950 to-emerald-800 relative overflow-hidden">
      
      {/* 🔹 Fundo suave animado */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-700/10 via-transparent to-transparent animate-pulseSlow"></div>

      {/* 🔹 Container principal */}
      <div className="relative z-10 bg-emerald-950/60 backdrop-blur-lg p-10 rounded-2xl 
                      shadow-[0_0_40px_rgba(34,197,94,0.25)] w-full max-w-md 
                      border border-emerald-900/60 animate-fadeIn">

        {/* Logo e título */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-bold tracking-wide text-emerald-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]">
            BeatList
          </h1>

          <h2 className="text-3xl font-bold text-white tracking-wide">
            Bem-vindo
          </h2>

          <p className="text-emerald-200/60 text-sm mt-1">
            Faça login para continuar
          </p>
        </div>

        {/* Formulário */}
        <div className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-emerald-200/80 text-sm mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-emerald-900/40 text-emerald-100 
                         placeholder-emerald-300/40 border border-emerald-800 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400 
                         transition-all duration-200"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-emerald-200/80 text-sm mb-1">
              Senha
            </label>

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-emerald-900/40 text-emerald-100 
                         placeholder-emerald-300/40 border border-emerald-800 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400 
                         transition-all duration-200"
            />
          </div>

          {/* Botão de Login */}
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 
                       hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold 
                       py-3 rounded-lg transition-all duration-300 
                       hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] 
                       hover:scale-[1.02] active:scale-[0.97] cursor-pointer"
          >
            Entrar
          </button>

          {/* Link para cadastro */}
          <div className="text-center mt-6">
            <p className="text-emerald-200/60 text-sm">
              Ainda não tem uma conta?
            </p>

            <button
              onClick={goToRegister}
              className="mt-2 text-emerald-400 hover:text-emerald-300 
                         underline font-medium transition-all duration-200 cursor-pointer"
            >
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
