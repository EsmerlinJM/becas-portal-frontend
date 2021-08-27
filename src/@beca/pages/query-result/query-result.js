import { Helmet } from "react-helmet-async";
import LayoutResult from "../../shared/components/hocs/layout-results";
import OfertList from "../../shared/components/UI/organisms/ofert-list";
import useAction from "./use-action";

export default function QueryResult() {
  // const [{ params }] =
  useAction();

  return (
    <>
      <Helmet>
        <title>Resultados | Beca tu futuro </title>
      </Helmet>
      <LayoutResult>
        <OfertList justFavorites={false} />
      </LayoutResult>
    </>
  );
}
