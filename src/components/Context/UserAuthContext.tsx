import { createContext, useContext, useState } from "react";

type UserType = {
  name: string;
  email: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  setisAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  User: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

const AuthContext = createContext<AuthContextType | null>(null);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setisAuthenticated] = useState<boolean>(false);
  const [User, setUser] = useState<UserType | null>(null);
  const value = {
    isAuthenticated,
    setisAuthenticated,
    User,
    setUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
};
