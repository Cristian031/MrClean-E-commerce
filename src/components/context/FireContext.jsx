import { createContext, useContext } from "react";
import { db } from "../../firebase/firebaseService"; 
import { addDoc, collection } from "firebase/firestore";

export const FireContext = createContext();

export const FireProvider = ({ children }) => {
  const addProduct = async (product) => {
    const productsRef = collection(db, "products");
    try {
      await addDoc(productsRef, product);
      console.log("Producto agregado:", product);
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <FireContext.Provider value={{ addProduct }}>
      {children}
    </FireContext.Provider>
  );
};

export const useFireContext = () => {
  return useContext(FireContext);
};
