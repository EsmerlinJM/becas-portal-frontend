import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { announcementGetAll } from "../../../../../redux/slices/announcement/_actions";

const screen = 8;
export default function useAction() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(null);
  const [screens, setScreens] = useState(null);
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.announcement.all);

  const onMove = (where) => {
    const step = active + where;

    if (step < 0) return;
    if (step > screens.length - 1) return;
    setItems(() => screens[step]);
    setActive(() => step);
  };

  useEffect(() => {
    async function getAll() {
      dispatch(await announcementGetAll());
    }
    !data.length && getAll();
  }, [data.length, dispatch]);

  useEffect(() => {
    const numScreen = data.length / screen;
    const num = Math.ceil(numScreen <= 0 ? 1 : numScreen);
    const arrScreens = [];
    let srn = screen;

    for (let i = 0; i < num; i++) {
      arrScreens.push(data.slice(i * screen, srn));
      srn += screen;
    }

    setScreens(arrScreens);
    setItems(arrScreens.length ? arrScreens[0] : []);
    setActive(0);
  }, [data, status]);

  return [{ data: items, status }, { onMove }];
}
