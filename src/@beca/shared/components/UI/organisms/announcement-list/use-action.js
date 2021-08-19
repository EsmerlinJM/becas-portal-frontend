import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { announcementGetAll } from "../../../../../redux/slices/announcement/_actions";

// const screen = 2;
export default function useAction() {
  const [items, setItems] = useState([]);
  // const [screens, setScreens] = useState([]);
  // const [active, setActive] = useState(null);

  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.announcement.all);

  const onMove = (left) => {
    //   const screenMax = Math.max(...screens);
    //   const screenMin = Math.min(...screens);
    //   const valA = active + (left ? -1 : 1);
    //   const currInit = valA * screen;
    //   const curr = currInit - screen;
    //   console.log(valA, active, screens);
    //   if (active === screens.length) return;
    //   // if (active + valA === ) return;
    //   if (active === screens[0]) return;
    //   setItems(() => data.slice(curr, currInit));
    //   setActive(() => valA);
  };

  useEffect(() => {
    async function getAll() {
      dispatch(await announcementGetAll());
    }
    !data.length && getAll();
  }, [data.length, dispatch]);

  useEffect(() => {
    // const numScreen = data.length / screen;
    // const num = Math.ceil(numScreen <= 0 ? 1 : numScreen);
    // const scrns = [];

    // for (let i = 0; i < num; i++) {
    //   scrns.push(data.slice(0, screen));
    // }

    // for (const value of scrns) {
    //   arr.push(data.slice(value - screen, value + screen));
    // }

    setItems(data);
    // setScreens(scrns);
    // setActive(1);
    //eslint-disable-next-line
  }, [data, status]);

  return [{ data: items, status }, { onMove }];
}
