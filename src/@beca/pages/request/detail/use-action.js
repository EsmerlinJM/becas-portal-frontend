import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneRequest } from "../../../redux/slices/my-requests/_actions";

export default function useAction(id) {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.myRequest.one);
  const { data: user } = useSelector((state) => state.user.one);

  useEffect(() => {
    const fn = async () => {
      dispatch(await getOneRequest(id));
    };
    fn();
    //eslint-disable-next-line
  }, []);

  return [{ data, status, user }];
}
