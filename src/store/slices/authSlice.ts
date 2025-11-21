import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: Omit<User, "password"> | null;
  lastLogin: string | null;
}

const loadUsers = (): User[] => {
  return JSON.parse(localStorage.getItem("beatlistUsers") || "[]");
};

const saveUsers = (users: User[]) => {
  localStorage.setItem("beatlistUsers", JSON.stringify(users));
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  lastLogin: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const users = loadUsers();
      const exists = users.find((u) => u.email === action.payload.email);

      if (exists) {
        throw new Error("Usuário já existe");
      }

      const newUser: User = {
        id: crypto.randomUUID(),
        email: action.payload.email,
        password: action.payload.password,
      };

      users.push(newUser);
      saveUsers(users);
    },

    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const users = loadUsers();
      const found = users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );

      if (!found) {
        throw new Error("Credenciais inválidas");
      }

      const loginTime = new Date().toISOString();
      state.isAuthenticated = true;
      state.user = { id: found.id, email: found.email };
      state.lastLogin = loginTime;

      sessionStorage.setItem("beatlistUser", JSON.stringify(state.user));
      sessionStorage.setItem("beatlistLastLogin", loginTime);
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.lastLogin = null;
      sessionStorage.removeItem("beatlistUser");
      sessionStorage.removeItem("beatlistLastLogin");
    },

    restoreSession: (state) => {
      const storedUser = sessionStorage.getItem("beatlistUser");
      const storedLogin = sessionStorage.getItem("beatlistLastLogin");

      if (storedUser) {
        state.user = JSON.parse(storedUser);
        state.isAuthenticated = true;
        state.lastLogin = storedLogin || null;
      }
    },
  },
});

export const { register, login, logout, restoreSession } = authSlice.actions;
export default authSlice.reducer;
