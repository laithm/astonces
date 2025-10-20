'use client';
import { createContext, useState, useContext, ReactNode } from 'react';

const AuthContext = createContext({ loggedIn: false, login: () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => setLoggedIn(true);

  return (
    <AuthContext.Provider value={{ loggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

