import ResquestCard from "../../molecules/request-card";
import Pagination from "../../molecules/pagination";

export default function RquesList({
  items,
  screens,
  active = 0,
  onSelectScreen,
  onClick,
}) {
  return (
    <div className="fadeIn">
      <div className=" container mx-auto pt-3 m-auto grid grid-cols-1 gap-y-4 ">
        {items.map((item, i) => (
          <ResquestCard item={item} key={i} onClick={(item) => onClick(item)} />
        ))}
      </div>
      <div className="mt-10 mr-20">
        <Pagination
          active={active}
          screens={screens}
          onSelectScreen={onSelectScreen}
        />
      </div>
    </div>
  );
}
