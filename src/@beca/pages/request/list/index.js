import Header2Natigation from "../../../shared/components/hocs/header2-natigation";
import RequestCardList from "../../../shared/components/UI/organisms/request-list";
import Loading from "react-loader-spinner";

import { Helmet } from "react-helmet-async";
import useAction from "./use-action";
import { useHistory } from "react-router";

const objNav = {
  name: "Mis solicitudes",
  path: "/my-requests",
  parents: [{ name: "Inicio", path: "/" }],
};

export default function MyRequests() {
  const history = useHistory();
  const [{ state, status }, actions] = useAction();

  return (
    <>
      <Helmet>
        <title> Mis Solicitudes | Beca tu futuro</title>
      </Helmet>
      <Header2Natigation name="Solicitudes" objNav={objNav}>
        <div className="mb-4">
          {status === "loading" || state.loading ? (
            <div className="flex justify-center   w-full mt-4">
              <Loading type="MutatingDots" color="#ee2a24" secondaryColor="#003876" />
            </div>
          ) : (
            <div className="">
              <RequestCardList
                items={state.items}
                active={state.active}
                screens={state.screens.length}
                onSelectScreen={actions.onSelectScreen}
                onClick={(item) =>
                  history.push(`/my-requests/detail/${item.id}`)
                }
              />
            </div>
          )}
        </div>
      </Header2Natigation>
    </>
  );
}
