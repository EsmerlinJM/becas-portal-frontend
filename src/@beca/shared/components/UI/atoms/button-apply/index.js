import { toast } from "react-hot-toast";
import { createRequest } from "../../../../services/requests";
import { useState } from "react";
import { getAuth } from "../../../../utils/auth";
import ModalTemplate from "../../molecules/modal-template";
import { useHistory } from "react-router";

export default function ButtonApply({ offerId }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const apply = async () => {
    const { token } = getAuth();
    if (!token) return setOpen(() => true);

    toast.promise(createRequest(offerId), {
      loading: () => {
        setLoading(true);
        return "Aplicando...";
      },
      success: ({ data }) => {
        history.push(`/my-requests/detail/${data.id}`);
        return <b>{"Aplicaste exitosamente!"}</b>;
      },
      error: (err) => {
        setLoading(false);
        return <b>{err.message} </b>;
      },
    });
  };
  return (
    <>
      <ModalTemplate
        isOpen={open}
        onClose={(close) => setOpen(() => close)}
        header={
          <div className="text-center w-full">
            <h2 className="text-xl">Tienes que iniciar sesión! </h2>{" "}
          </div>
        }
        body={
          <div className="justify-center flex ">
            <span
              onClick={() => history.push("/login")}
              className="rounded-3xl px-10 py-2 text-white azulbg font-semibold text-sm cursor-pointer"
            >
              Iniciar sesión
            </span>
          </div>
        }
      />
      <button
        onClick={apply}
        disabled={loading}
        className="outline-none rounded-3xl w-11/12 px-10 py-2 text-white azulbg font-semibold text-sm "
      >
        {loading ? "APLICANDO..." : "APLICAR"}
      </button>
    </>
  );
}
