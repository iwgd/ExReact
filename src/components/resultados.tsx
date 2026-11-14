import { useLocation, useNavigate } from "react-router-dom";
import ArtistasList from "../assets/Artistas.json";

function Resultados() {
  const location = useLocation();
  const artistaFavorito = location.state?.artistaFavorito || "nenhum";
  if (localStorage.getItem(artistaFavorito)) {
    localStorage.setItem(artistaFavorito, (parseInt(localStorage.getItem(artistaFavorito) || "0") + 1).toString());
  } else {
    localStorage.setItem(artistaFavorito, "1");
  }

  const navigate = useNavigate();

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-amber-200">
          Resultado do Formulário
        </h1>
        <div className="mt-8 rounded-xl border border-yellow-900 bg-orange-950/40 p-8 text-center shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          <p className="mb-4 text-lg text-white">
            O artista favorito selecionado foi:{" "}
            <span className="font-bold text-green-400">{artistaFavorito}</span>
          </p>
          <div className="mb-4">
            <h2>Resultados gerais:</h2>
            <ul className="list-disc list-inside text-center text-white">
              {ArtistasList.artistas.map((artista) => (
                <li key={artista.nome}>
                  <span className="font-bold text-white">{artista.nome}: </span>
                  {localStorage.getItem(artista.nome) || "0"} votos
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => navigate("/formulario")}
            className="rounded-xl bg-green-800 px-5 py-2.5 font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition duration-200 ease-in-out hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] active:translate-y-0"
          >
            Voltar ao Formulário
          </button>
        </div>
      </div>
    </main>
  );
}

export default Resultados;
