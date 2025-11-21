# 🎵 **BeatList – Gerenciador de Playlists Moderno**

## 🚀 **Sobre o Projeto**

**BeatList** é uma aplicação web desenvolvida em **React + Redux Toolkit**, permitindo que usuários:

* Criem playlists personalizadas
* Adicionem e removam músicas
* Façam autenticação com persistência de sessão
* Usem uma interface moderna com tema *dark neon*

O objetivo do projeto é demonstrar domínio do ecossistema React, incluindo:

* Gerenciamento de estado global
* Autenticação e rotas protegidas
* Organização modular e escalável
* Consumo de APIs internas simuladas
* Uso de TailwindCSS com design customizado

---

## 🛠️ **Tecnologias Utilizadas**

### **Frontend**

* React
* Vite
* Redux Toolkit
* React Router DOM
* TailwindCSS
* Heroicons

### **Ferramentas Adicionais**

* LocalStorage para persistência do usuário
* ESLint + Prettier (opcionais, dependendo da sua config)

---

## 📦 **Instalação e Execução**

### 1️⃣ **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/beatlist.git
```

### 2️⃣ **Acesse a pasta do projeto**

```bash
cd beatlist
```

### 3️⃣ **Instale as dependências**

```bash
npm install
```

### 4️⃣ **Execute o servidor de desenvolvimento**

```bash
npm run dev
```

### 5️⃣ **Acesse no navegador**

```
http://localhost:5173
```

---

## 📂 **Estrutura do Projeto**

```
📁 src
│
├── components/        # Componentes reutilizáveis
├── pages/             # Páginas da aplicação
├── store/             # Redux Toolkit (slices, store)
├── styles/            # Estilos globais e presets
├── hooks/             # Hooks customizados
└── utils/             # Funções auxiliares
```

---

## 🎨 **Tema e Estilo**

O BeatList utiliza um tema:

* **Dark profundo (black/gray)**
* **Acentos neon vermelho (#B22222)**
* **Blur, glow e gradientes**
* **UI inspirada no estilo Slasher/Horror Neon**

Você encontrará presets personalizados em:

```
src/styles/theme
```

---

## 🔒 **Autenticação**

O sistema de login/registro inclui:

* Validação básica
* Persistência no localStorage
* Rotas protegidas para usuários autenticados

---

## 📚 **Funcionalidades Principais**

✔ Criar playlists
✔ Excluir playlists
✔ Adicionar músicas
✔ Remover músicas
✔ Interface 100% responsiva
✔ Dark neon theme
✔ Proteção de rotas

---

## 👤 **Autor**

**Lucas Oliveira Bleyer**

---

## 📜 **Licença**

Este projeto é de uso livre para fins educacionais.
