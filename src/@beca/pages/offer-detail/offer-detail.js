import OfferDetaill from "../../shared/components/UI/organisms/offer-detail-tabs";
import Header2Natigation from "../../shared/components/hocs/header2-natigation";
import OpenCallsBlock from "../../shared/components/UI/organisms/open-calls-block";
import Loading from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

import useAction from "./use-action";

export default function OfferDetail() {
  const [{ data, status }] = useAction();
  return (
    <>
      <Helmet>
        <title>{"Aplica"} | Beca tu futuro </title>
      </Helmet>
      <Header2Natigation>
        <div className="bg-gray-50">
          <div className="container mx-auto fadeIn">
            <div className="mt-5 mb-4">
              <OpenCallsBlock />
            </div>
            {status === "loading" ? (
              <div className="flex justify-center items-center h-1/2">
                <Loading type="MutatingDots" color="red" />
              </div>
            ) : (
              <OfferDetaill item={data} />
            )}
          </div>
        </div>
      </Header2Natigation>
    </>
  );
}
