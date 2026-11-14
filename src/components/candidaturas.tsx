import { useState } from "react";
import { useNavigate } from "react-router-dom";

const xingamentosAntigos = [
  "alcoviteiro",
  "biltre",
  "beócio",
  "calhorda",
  "energúmeno",
  "janota",
  "mentecapto",
  "mequetrefe",
  "mocorongo",
  "paspalho",
  "palerma",
  "patife",
  "pulha",
  "purgante",
  "sacripanta",
];

function Candidaturas() {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");
  const [avisoInapropriado, setAvisoInapropriado] = useState<string | null>(
    null,
  );

  const handleComentarioChange = (event) => {
    const texto = event.target.value;
    setComentario(texto);

    const textoLower = texto.toLowerCase();
    const palavraEncontrada = xingamentosAntigos.find((palavra) =>
      textoLower.includes(palavra),
    );

    if (palavraEncontrada) {
      setAvisoInapropriado(palavraEncontrada);
    } else {
      setAvisoInapropriado(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (avisoInapropriado) {
      alert(
        `Palavra imprópria detetada: "${avisoInapropriado}". Por favor, remove-a para continuar.`,
      );
      return;
    }
    navigate("/submetido", { state: { candidatura: { nome, email, comentario } } });
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-amber-200">
          Candidatura
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-xl border border-yellow-900 bg-orange-950/40 p-8 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="font-bold text-amber-200">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="O teu nome"
              className="rounded-xl border border-yellow-900 bg-[#3E2723] p-3 text-white placeholder-neutral-400 focus:border-amber-200 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-bold text-amber-200">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              className="rounded-xl border border-yellow-900 bg-[#3E2723] p-3 text-white placeholder-neutral-400 focus:border-amber-200 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="comentario" className="font-bold text-amber-200">
              Comentário (opcional):
            </label>
            <textarea
              id="comentario"
              name="comentario"
              rows={4}
              value={comentario}
              onChange={handleComentarioChange}
              placeholder="Deixa uma mensagem ou comentário..."
              className="rounded-xl border border-yellow-900 bg-[#3E2723] p-3 text-white placeholder-neutral-400 focus:border-amber-200 focus:outline-none"
            />
            {avisoInapropriado && (
              <p className="text-sm font-semibold text-red-400">
                Palavra imprópria detetada: "{avisoInapropriado}". Por favor,
                remove-a para continuar.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={Boolean(avisoInapropriado)}
            className="mt-2 rounded-xl bg-green-800 px-6 py-3 font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition duration-200 ease-in-out hover:bg-green-900 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Enviar Candidatura
          </button>
        </form>
      </div>
    </main>
  );
}

export default Candidaturas;
