import slideshow1 from '../assets/slideshow1.jpeg'

function Gallery() {
  return (
    <section className="rounded-xl border border-yellow-900 bg-orange-950/40 p-8 text-center">
      <div className="mb-6">
        <p className="mb-1 text-[0.85rem] font-bold tracking-[0.08em] text-white uppercase">
          Galeria
        </p>
        <h2 className="m-0 text-2xl font-bold text-amber-200">
          Destaques do Festival
        </h2>
      </div>

      <div className="text-center">
        <img
          src={slideshow1}
          alt="Slideshow do evento"
          className="mx-auto h-[350px] w-auto max-w-full rounded-xl object-cover shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
        />
        <div className="mt-4 flex justify-center gap-3">
          <button
            type="button"
            className="cursor-pointer rounded-xl bg-amber-200 px-5 py-2.5 font-bold text-black shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition duration-200 ease-in-out hover:bg-[#e6c200] hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] active:translate-y-0"
          >
            Anterior
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-xl bg-green-800 px-5 py-2.5 font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition duration-200 ease-in-out hover:bg-green-900 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] active:translate-y-0"
          >
            Seguinte
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery
