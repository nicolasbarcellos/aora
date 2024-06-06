import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

export const useGlobalCtx = () => {
  const ctx = useContext(GlobalContext);
  return ctx;
};
