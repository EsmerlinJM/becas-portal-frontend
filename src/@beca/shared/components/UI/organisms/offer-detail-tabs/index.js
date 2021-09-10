import OfferDetail from "../offert-detail";
import OfferRequirement from "../offer-requirement";
import TabComponent from "../../molecules/tab";

export default function OfferDetailTab({ item, message }) {
  return (
    <div className="mx-2">
      <>
        <TabComponent headersTab={["Oferta académica", "Requisitos"]}>
          <OfferDetail
            item={
              !Object.keys(item).length
                ? { oferta: {}, institucion: {}, schedule: {} }
                : item
            }
            message={message}
          />
          <OfferRequirement requirement={item.requisitos} />
        </TabComponent>
      </>
    </div>
  );
}
