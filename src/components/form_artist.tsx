import { useState } from "react";
import ArtistasList  from '../assets/Artistas.json';


function Formulario() {

  const [formValues, setFormValues] = useState<[]>(
    ArtistasList.artistas.map((artista) => ({
      nome: artista.nome,
      favorito: false,
    }))
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Formulário enviado com sucesso! O seu artista favorito é: ${formValues.find((value) => value.favorito)?.nome || "nenhum"}.`);
  };

  return (
      <main className="flex flex-1 flex-col items-center justify-center p-8">
    <div className="w-full max-w-4xl">
      <h1 className="mb-8 text-center text-3xl font-bold text-amber-200">
        Formulario de Artistas
      </h1>
    <div className="mt-8 rounded-xl border border-yellow-900 bg-orange-950/40 p-8 text-center shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {ArtistasList.artistas.map((artista, index) => (
          <label key={artista.nome} className="flex items-center gap-2 text-white cursor-pointer">
            <input
              className="h-4 w-4 accent-green-800"
              type="radio"
              name="artista"
              value={artista.nome}
              checked={formValues[index]?.favorito ?? false}
              onChange={() => {
                setFormValues((prev) =>
                  prev.map((value, i) => ({
                    ...value,
                    favorito: i === index,
                  }))
                );
              }}
            />
            {artista.nome}
          </label>
        ))}
        <button
          type="submit"
          className="rounded-xl bg-green-800 px-5 py-2.5 font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition duration-200 ease-in-out hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] active:translate-y-0"
        >
          Enviar
        </button>
      </form>
    </div>
        </div>
  </main>
  );
}

export default Formulario;
