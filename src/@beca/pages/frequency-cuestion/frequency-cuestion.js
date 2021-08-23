import { Helmet } from "react-helmet-async";
import Header2Natigation from "../../shared/components/hocs/header2-natigation";
import Plus from "../../../img/plus-solid@2x.png";

const objNav = {
  name: "Preguntas frecuentes",
  path: "/cuetion-frequency",
  parents: [{ name: "Inicio", path: "/" }],
};

export default function FrequencyCuestion() {
  return (
    <Header2Natigation name="Preguntas Frecuentes" objNav={objNav}>
      <Helmet>
        <title>Preguntas frecuentes | Beca tu vida</title>
      </Helmet>
      <div className="bg-white w-4/5 m-auto flex flex-col my-4">
        <h4 className="p-2 border-b border-blue-300 text-xl font-bold azul mb-7">
          PREGUNTAS FRECUENTES
        </h4>
        <div className="grid grid-cols-1 gap-2 font-semibold">
          <div className="flex text-sm items-center justify-between border rounded bg-gray-100 p-3">
            <p>1. ¿Lorem Epsom dolo sit met?</p>
            <input className="w-4 h-4" type="image" src={Plus} alt="" />
          </div>
          <div className="flex text-sm items-center justify-between border rounded bg-gray-100 p-3">
            <p>2. ¿Lorem Epsom dolo sit met?</p>
            <input className="w-4 h-4" type="image" src={Plus} alt="" />
          </div>
          <div className="flex text-sm items-center justify-between border rounded bg-gray-100 p-3">
            <p>3. ¿Lorem Epsom dolo sit met?</p>
            <input className="w-4 h-4" type="image" src={Plus} alt="" />
          </div>
          <div className="flex text-sm items-center justify-between border rounded bg-gray-100 p-3">
            <p>4. ¿Lorem Epsom dolo sit met?</p>
            <input className="w-4 h-4" type="image" src={Plus} alt="" />
          </div>
          <div className="flex text-sm items-center justify-between border rounded bg-gray-100 p-3">
            <p>5. ¿Lorem Epsom dolo sit met?</p>
            <input className="w-4 h-4" type="image" src={Plus} alt="" />
          </div>
          <div className="flex text-sm items-center justify-between border rounded bg-gray-100 p-3">
            <p>6. ¿Lorem Epsom dolo sit met?</p>
            <input className="w-4 h-4" type="image" src={Plus} alt="" />
          </div>
          <div className="flex text-sm items-center justify-between border rounded bg-gray-100 p-3">
            <p>7. ¿Lorem Epsom dolo sit met?</p>
            <input className="w-4 h-4" type="image" src={Plus} alt="" />
          </div>
        </div>
      </div>
    </Header2Natigation>
  );
}
