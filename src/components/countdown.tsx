function Countdown() {
  return (
    <div className="rounded-xl border border-yellow-900 bg-orange-950/40 p-8 text-center">
      <h2 className="mb-4 text-2xl font-bold text-amber-200">
        A Festa do Pato começa em:
      </h2>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-amber-200">0</span>
          <span className="text-[0.85rem] tracking-[0.05em] text-white uppercase">
            Dias
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-amber-200">0</span>
          <span className="text-[0.85rem] tracking-[0.05em] text-white uppercase">
            Horas
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-amber-200">0</span>
          <span className="text-[0.85rem] tracking-[0.05em] text-white uppercase">
            Minutos
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-amber-200">0</span>
          <span className="text-[0.85rem] tracking-[0.05em] text-white uppercase">
            Segundos
          </span>
        </div>
      </div>
    </div>
  )
}

export default Countdown
