function Countdown() {
  return (
    <div className="rounded-xl border border-[#5D4037] bg-[#4E342E] p-8 text-center">
      <h2 className="mb-4 text-2xl font-bold text-[#FFD700]">
        A Festa do Pato começa em:
      </h2>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-[#FFD700]">0</span>
          <span className="text-[0.85rem] tracking-[0.05em] text-[#aaa] uppercase">
            Dias
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-[#FFD700]">0</span>
          <span className="text-[0.85rem] tracking-[0.05em] text-[#aaa] uppercase">
            Horas
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-[#FFD700]">0</span>
          <span className="text-[0.85rem] tracking-[0.05em] text-[#aaa] uppercase">
            Minutos
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-extrabold text-[#FFD700]">0</span>
          <span className="text-[0.85rem] tracking-[0.05em] text-[#aaa] uppercase">
            Segundos
          </span>
        </div>
      </div>
    </div>
  )
}

export default Countdown
