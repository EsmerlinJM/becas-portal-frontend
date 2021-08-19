import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useAction() {
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      localStorage.removeItem("color");
    };
  }, []);
  return [{ params }];
}
