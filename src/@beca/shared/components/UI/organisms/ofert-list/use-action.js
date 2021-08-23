import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllOffer,
  searchByOffer,
} from "../../../../../redux/slices/ofert/_actions";

const screenNum = 12;

export default function useAction(id) {
  const dispatch = useDispatch();
  const { data: oferts, status } = useSelector(
    (state) => state.offers.searchBy
  );
  const { data, status: allStatus } = useSelector((state) => state.offers.all);
  const [items, setItems] = useState([]);
  const [screens, setScreens] = useState([]);
  const [active, setActive] = useState(1);
  const [loading, setLoading] = useState(false);

  const onSelectScreen = (screen) => {
    setActive(screen);
    const curr = screen * screenNum;
    setItems(() => oferts.slice(curr - screenNum, curr));
  };

  const onSetFavorite = (id) => {
    let favorites = JSON.parse(localStorage.getItem("favorite_offers") || "{}");
    if (favorites[id]) {
      delete favorites[id];
    } else {
      favorites = {
        ...favorites,
        [id]: id,
      };
    }

    localStorage.setItem("favorite_offers", JSON.stringify(favorites));
    dispatch(searchByOffer(oferts));
  };

  useEffect(() => {
    setLoading(true);
    const fn = async () => dispatch(await getAllOffer(id));
    id.id && !data.length && fn();
    setLoading(false);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    setLoading(true);
    const numScreen = oferts.length / screenNum;
    const num = Math.ceil(numScreen <= 0 ? 1 : numScreen);
    const scrns = [];

    for (let i = 0; i < num; i++) {
      scrns.push(i + 1);
    }

    setItems(oferts.slice(0, screenNum));
    setActive(1);
    setScreens(scrns);
    setLoading(false);
    //eslint-disable-next-line
  }, [oferts, status]);

  return [
    {
      screens,
      active,
      items,
      status: allStatus,
      loading,
      oferts,
      countResult: oferts.length,
    },
    { onSelectScreen, onSetFavorite },
  ];
}
