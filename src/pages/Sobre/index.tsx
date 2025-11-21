import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Layers, ShieldCheck, Wrench, BookOpenCheck, Cpu, Database, Code, Target } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-950 to-gray-900">
      <Header />

      <main className="flex-grow">
        <div className="text-white py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-20">

            {/* INTRO */}
            <section className="text-center space-y-5">

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-emerald-300">
                Sobre o Beatlist
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Beatlist é um Gerenciador de Playlists desenvolvido por 
                <strong> Lucas Oliveira Bleyer</strong> como trabalho avaliativo da disciplina de 
                <strong> Tópicos Especiais em Programação</strong> — 
                <strong> 8º semestre</strong> de Ciência da Computação (IFSC Lages).
                Orientação da docente <strong>Drª Lidiane Visintin</strong>.
              </p>
            </section>

            {/* REQUISITOS */}
            <section className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-emerald-300">Requisitos Implementados</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Card 1 */}
                <div className="bg-emerald-950/10 border border-emerald-800/40 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="flex items-center text-xl font-semibold mb-3 text-emerald-300">
                    <ShieldCheck size={22} className="text-emerald-400 mr-2" />
                    Autenticação & Rotas Protegidas
                  </h3>
                  <ul className="list-disc list-inside text-gray space-y-1">
                    <li>Página de login com validação.</li>
                    <li>Mock de autenticação com credenciais estáticas.</li>
                    <li>Persistência via <code>sessionStorage</code>.</li>
                    <li>Proteção de rotas com <strong>PrivateRoute</strong>.</li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-emerald-950/10 border border-emerald-800/40 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="flex items-center text-xl font-semibold mb-3 text-emerald-300">
                    <Database size={22} className="text-emerald-400 mr-2" />
                    Estado Global & Persistência
                  </h3>
                  <ul className="list-disc list-inside text-gray space-y-1">
                    <li>Configuração completa do Redux Toolkit.</li>
                    <li>Slices para usuários, playlists e músicas.</li>
                    <li>CRUD persistido no LocalStorage.</li>
                    <li>Apenas dados do usuário logado são exibidos.</li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-emerald-950/10 border border-emerald-800/40 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="flex items-center text-xl font-semibold mb-3 text-emerald-300">
                    <Code size={22} className="text-emerald-400 mr-2" />
                    Integração com TheAudioDB
                  </h3>
                  <ul className="list-disc list-inside text-gray space-y-1">
                    <li>Busca por artista, música ou gênero.</li>
                    <li>Exibição dinâmica dos resultados.</li>
                    <li>Adição direta às playlists.</li>
                    <li>Músicas populares (mock ou API).</li>
                  </ul>
                </div>

                {/* Card 4 */}
                <div className="bg-emerald-950/10 border border-emerald-800/40 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="flex items-center text-xl font-semibold mb-3 text-emerald-300">
                    <BookOpenCheck size={22} className="text-emerald-400 mr-2" />
                    Qualidade & UI
                  </h3>
                  <ul className="list-disc list-inside text-gray space-y-1">
                    <li>Componentização limpa.</li>
                    <li>Feedback visual padronizado.</li>
                    <li>Arquitetura organizada.</li>
                    <li>UI responsiva com Tailwind.</li>
                  </ul>
                </div>

              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
