import flyerImg from '../assets/flyer.png'

function Flyer() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center">
        <h1 className="mb-6 text-center text-3xl font-bold text-amber-200">
          Flyer
        </h1>
        <figure className="text-center">
          <img
            src={flyerImg}
            alt="Flyer da Festa do Pato 2030"
            className="mx-auto max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
          />
          <figcaption className="mt-4 text-sm italic text-neutral-400">
            Flyer oficial da Festa do Pato 2030
          </figcaption>
        </figure>
      </div>
    </main>
  )
}

export default Flyer
