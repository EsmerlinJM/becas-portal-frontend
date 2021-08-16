import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { announcementGetAll } from "../../../../../redux/slices/announcement/_actions";
export default function useAction() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.announcement.all);

  useEffect(() => {
    async function getAll() {
      dispatch(await announcementGetAll());
    }
    !data.length && getAll();
  }, [data.length, dispatch]);

  return [{ data, status }];
}
