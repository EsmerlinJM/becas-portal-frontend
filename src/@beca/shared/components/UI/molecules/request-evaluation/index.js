export default function RequestEvaluation({ evaluations }) {
  let total = evaluations.reduce(
    (acc, curr) => acc + curr.evaluation?.top_score || 0,
    0
  );
  const coverage = (total / evaluations.length).toFixed(0);
  const color = evaluations.length && evaluations[0]["evaluation"]["color"];
  return (
    <div className="evaluacion w-full col-span-2 ">
      <header
        style={{ backgroundColor: color }}
        className={`p-2 text-sm text-white font-semibold ${
          !color && "bg-green-500"
        } rounded-t-sm flex justify-between`}
      >
        <p>Evaluación</p>
        <p>{isNaN(coverage) ? 0 : coverage} /100</p>
      </header>
      <div className="resultados bg-white px-2 rounded-b-sm">
        {(evaluations || []).map((eva, i) => (
          <div key={i}>
            <div className="pt-5 pb-2 mb-2 font-semibold border-b flex justify-between text-xs">
              <p>{eva.evaluation.name}</p>
              <p>{eva.evaluation.top_score || 0}</p>
            </div>
            <div className="grid grid-cols-1 gap-y-3 mb-1">
              <div className="text-xs flex justify-between">
                <p className="flex items-center justify-between w-36">
                  {eva.requerimiento.name}
                  <img className="pt-0.5 w-2" src="img/Polygon 15.svg" alt="" />
                </p>
                <p className="border rounded text-right px-0.5">
                  {eva.requerimiento.value || 0}
                </p>
              </div>

              {eva.note && (
                <div className=" pb- font-semibold flex flex-col space-y-2 text-xs">
                  <p>Comentario</p>
                  <span className="border h-full text-justify text-gray-500 rounded py-5">
                    {eva.note}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
