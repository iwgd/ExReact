function Noticias() {
  return (
    <aside className="flex flex-1 flex-col gap-6 md:basis-1/3">
      <h2 className="text-2xl font-bold text-amber-200">Últimas Notícias</h2>

      <article className="space-y-1">
        <h3 className="text-lg font-bold text-amber-200">
          Participação do grupo musical &quot;Som da Aldeia&quot; confirmada
        </h3>
        <p>
          <strong className="text-white">15 de Agosto de 2030</strong>
        </p>
        <p className="text-sm leading-relaxed text-white">
          Foi confirmada a participação do grupo musical &quot;Som da
          Aldeia&quot; no encerramento da Festa do Pato 2030. A presença do grupo
          traz uma contribuição significativa para a cultura local.
        </p>
      </article>

      <article className="space-y-1">
        <h3 className="text-lg font-bold text-amber-200">
          Inscrições para o concurso de culinária encerram no dia 14
        </h3>
        <p>
          <strong className="text-white">10 de Agosto de 2030</strong>
        </p>
        <p className="text-sm leading-relaxed text-white">
          Os interessados em participar no concurso de culinária devem enviar as
          suas inscrições até ao dia 14 de Agosto. Há prémios à espera dos
          melhores chefs locais.
        </p>
      </article>

      <article className="space-y-1">
        <h3 className="text-lg font-bold text-amber-200">
          Anunciado show de dança tradicional ao ar livre
        </h3>
        <p>
          <strong className="text-white">5 de Agosto de 2030</strong>
        </p>
        <p className="text-sm leading-relaxed text-white">
          Como parte das novas atrações, foi anunciado um show de dança
          tradicional ao ar livre. Será um momento especial para todos os
          presentes na festa.
        </p>
      </article>
    </aside>
  )
}

export default Noticias
