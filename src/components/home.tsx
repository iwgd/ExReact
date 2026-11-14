import Gallery from './gallery'
import Countdown from './countdown'
import Programacao from './programacao'
import Noticias from './noticias'

function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center gap-6 p-8">
      <Gallery />
      <Countdown eventDate="2030-08-15T10:00:00" />
      <div className="flex flex-col gap-12 md:flex-row">
        <Programacao />
        <Noticias />
      </div>
    </main>
  )
}

export default Home
