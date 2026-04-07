// import { createContext, useState } from "react";

// export const AuthContext = createContext<any>(null);

// export const AuthProvider = ({ children }: any) => {
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user") || "null")
//   );

//   const login = (userData: any) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useState, ReactNode } from "react";

// ✅ Define types
type User = {
  name: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

// ✅ Proper typing instead of any
export const AuthContext = createContext<AuthContextType | null>(null);

// ✅ Props typing
type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const login = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};