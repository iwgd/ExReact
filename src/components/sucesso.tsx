import { useState } from "react";
import { useLocation } from "react-router-dom";

function Sucesso() {

  const location = useLocation();
  const [totalExists] = useState(location.state?.total !== undefined);
  const [candidaturaExists] = useState(location.state?.candidatura !== undefined);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1>Sucesso!</h1>

      {totalExists && (
        <p className="text-lg text-white">
          O total da compra foi:{" "}
          <span className="font-bold text-green-400">{location.state.total}€</span>
        </p>
      )}
      {candidaturaExists && (
        <p className="text-lg text-white">
          A candidatura foi submetida com sucesso!<br />
          Nome: <span className="font-bold text-green-400">{location.state.candidatura.nome}</span><br />
          Email: <span className="font-bold text-green-400">{location.state.candidatura.email}</span><br />
          Comentário: <span className="font-bold text-green-400">{location.state.candidatura.comentario || "Nenhum"}</span>
        </p>
      )}
    </div>
  );
}

export default Sucesso;
