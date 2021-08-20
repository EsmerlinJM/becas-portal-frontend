import React from "react";
import AnnouncementCard from "../../molecules/announcement-card";
import useAction from "./use-action";
import BoderTopColor from "../../atoms/border-top-color";
import Squelet from "../../atoms/pre-loaders/card";
import CardColumns from "../../../hocs/card-columns";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function AnnouncementList() {
  const [{ data, status }, actions] = useAction();

  if (status === "loading") return <Squelet />;
  return (
    <div className="flex justify-between">
      <GoChevronLeft
        size={40}
        className="self-center cursor-pointer "
        onClick={() => actions.onMove(-1)}
      />
      <CardColumns className="p-6">
        {data.map((item) => {
          return (
            <BoderTopColor borderColor={item.type.color} key={item.id}>
              <AnnouncementCard bgColor="blue-600" item={item} />
            </BoderTopColor>
          );
        })}
      </CardColumns>
      <GoChevronRight
        size={40}
        className="self-center cursor-pointer"
        onClick={() => actions.onMove(1)}
      />
    </div>
  );
}
