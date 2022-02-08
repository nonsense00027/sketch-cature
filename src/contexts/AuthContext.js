import { onAuthStateChanged } from "@firebase/auth";
import { doc, onSnapshot } from "@firebase/firestore";
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { firestore, auth } from "../shared/configs/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const unsub = onSnapshot(doc(firestore, "Users", uid), (doc) => {
          setUser({ id: uid, ...doc.data() });
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  const payload = useMemo(() => ({ user }), [user]);

  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
