import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import {
  clearUser,
  getOneUser,
  logoutUser,
} from "../../../redux/slices/user/_actions";
import { addFavorites } from "../../../redux/slices/user/_actions";
import { getAuth } from "../../utils/auth";

import Loading from "react-loader-spinner";

const validatePathsNotLogger = [
  "/login",
  "/register",
  "/reset-pass",
  "/reset-pass/token-invalid",
  "/reset-pass/token-valid",
];

const validataPatshLogger = [
  "/my-requests",
  "/my-requests/detail/",
  "/profile",
  "/becas",
];

export default function Auth({ children }) {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = getAuth();
  const { data, status } = useSelector((state) => state.user.one);
  const logout = async () => {
    dispatch(clearUser());
    dispatch(await logoutUser(history));
  };

  useEffect(() => {
    const fn = async (tk) => dispatch(await getOneUser(tk));
    !Object.keys(data).length && token && fn(token);

    if (status === "completed") {
      if (Object.keys(data).length) {
        dispatch(addFavorites(data.favoritos || []));
        // dispatch(readNotification(data.notificationes));
        return;
      }
      const fvs = JSON.parse(localStorage.getItem("favorite_offers") || "[]");
      dispatch(addFavorites(fvs));
    }

    if (status === "error") {
      logout();
    }
    //eslint-disable-next-line
  }, [dispatch, token, status]);

  if (token && validatePathsNotLogger.includes(location.pathname))
    history.push("/");
  if (!token && validataPatshLogger.includes(location.pathname)) {
    dispatch(clearUser());
    history.push("/");
  }

  if (status === "loading")
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loading type="MutatingDots" color="#ee2a24" secondaryColor="#003876" />
      </div>
    );
  return children;
}
