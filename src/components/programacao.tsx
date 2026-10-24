function Programacao() {
  return (
    <div className="flex flex-1 flex-col gap-8 md:basis-2/3">
      <section>
        <h2 className="mb-2 text-2xl font-bold text-amber-200">Sobre a Festa</h2>
        <p className="leading-relaxed">
          A Festa do Pato 2030 é um evento anual que celebra a cultura e a
          tradição local. Venha divertir-se conosco!
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-amber-200">Programação</h2>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-yellow-900">
              <th className="py-2 pr-4 font-bold text-amber-200">Hora</th>
              <th className="py-2 font-bold text-amber-200">Atividade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-yellow-900/50">
            <tr>
              <td className="py-2 pr-4 font-medium">10:00</td>
              <td className="py-2">Abertura da festa</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium">12:00</td>
              <td className="py-2">Concurso de culinária</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium">15:00</td>
              <td className="py-2">Apresentações musicais</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium">18:00</td>
              <td className="py-2">Encerramento</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Programacao
