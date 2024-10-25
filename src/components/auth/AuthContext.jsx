import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Crear el contexto de autenticación
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Guardamos al usuario
      } else {
        setUser(null); // No hay usuario autenticado
      }
    });
    return unsubscribe;
  }, []);

  return(
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
