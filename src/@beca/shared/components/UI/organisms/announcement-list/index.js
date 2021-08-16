import React from "react";
import AnnouncementCard from "../../molecules/announcement-card";
import useAction from "./use-action";
import BoderTopColor from "../../atoms/border-top-color";
import Squelet from "../../atoms/pre-loaders/card";
import CardColumns from "../../../hocs/card-columns";

export default function AnnouncementList() {
  const [{ data, status }] = useAction();

  if (status === "loading") return <Squelet />;
  return (
    <CardColumns>
      {data.map((item) => {
        return (
          <BoderTopColor borderColor="blue-600" key={item.id}>
            <AnnouncementCard bgColor="blue-600" item={item} />
          </BoderTopColor>
        );
      })}
    </CardColumns>
  );
}
