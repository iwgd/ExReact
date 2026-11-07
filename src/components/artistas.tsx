import ArtistasList  from '../assets/Artistas.json';
import Formulario from './form_artist.tsx';

function Artistas() {
  const entidades = ArtistasList.artistas;


  return (
  <main className="flex flex-1 flex-col items-center justify-center p-8">
    <div className="w-full max-w-4xl">
      <h1 className="mb-8 text-center text-3xl font-bold text-amber-200">
        Artistas da Festa do Pato 2030
      </h1>
    <div className="flex flex-row rounded-xl border border-yellow-900 bg-orange-950/40 p-8 text-center">
      {entidades.map((entidade) => (
        <div key={entidade.nome} className="mb-6">
          <h3 className="mb-2 text-lg font-bold text-amber-200">
            {entidade.nome}
          </h3>
          <img
            src={entidade.foto}
            alt={entidade.nome}
            className="mx-auto h-[200px] w-auto max-w-full rounded-xl object-cover shadow-[0_4px_12px_rgba(0,0,0,0.3)] aspect-square"
          />
          <p className="mt-2 text-sm leading-relaxed text-white">
            {entidade.descricao}
          </p>
        </div>
      ))}
        </div>
      <Formulario artistas={entidades}/>
    </div>
  </main>
  );
}

export default Artistas;
