import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { getCurrentUser } from "../lib/getCurrentUser";
import { UserData } from "../types/user";
import { Models } from "react-native-appwrite";

type GlobalProviderProps = {
  children: ReactNode;
};

type GlobalContextData = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  user: Models.User<any>;
  setUser: Dispatch<SetStateAction<Models.User<any>>>;
};

export const GlobalContext = createContext<GlobalContextData>(
  {} as GlobalContextData
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({} as Models.User<any>);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser({});
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        isLoggedIn,
        loading,
        setIsLoggedIn,
        setUser,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
