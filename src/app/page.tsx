import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen p-2">
      <div className='flex flex-1 pt-8 gap-3'>
        <aside className='flex flex-col w-20 gap-3'>
          <div className='flex flex-col h-32 bg-zinc-900 rounded-xl p-2 items-center justify-center space-y-6 text-zinc-400'>
            <a href="#" className='hover:text-zinc-50 transition-colors'>
              <span className='material-symbols-outlined scale-125'>home</span>
            </a>
            <a href="#" className='hover:text-zinc-50 transition-colors'>
              <span className="material-symbols-outlined scale-125">search</span>
            </a>
          </div>
          <div className='flex flex-1 flex-col bg-zinc-900 rounded-xl p-2 justify-center items-center space-y-6 text-zinc-400'>
            <a href="#">
            <span className="material-symbols-outlined hover:text-zinc-50 transition-colors">book_4</span>
            </a>
            <a href="#" className='w-14 h-14 rounded-xl overflow-hidden hover:ring-8 hover:ring-zinc-400/10'>
              <Image src="/Album-covers/Bmth.png" width={54} height={54} alt=""/>
            </a>
            <a href="#" className='w-14 h-14 rounded-xl overflow-hidden hover:ring-8 hover:ring-zinc-400/10'>
              <Image src="/Album-covers/flow.png" width={54} height={54} alt=""/>
            </a>
            <a href="#" className='w-14 h-14 rounded-xl overflow-hidden hover:ring-8 hover:ring-zinc-400/10'>
              <Image src="/Album-covers/Slipknot.png" width={54} height={54} alt=""/>
            </a>
            <a href="#" className='w-14 h-14 rounded-xl overflow-hidden hover:ring-8 hover:ring-zinc-400/10'>
              <Image src="/Album-covers/Miw.png" width={54} height={54} alt=""/>
            </a>
            <a href="#" className='w-14 h-14 rounded-xl overflow-hidden hover:ring-8 hover:ring-zinc-400/10'>
              <Image src="/Album-covers/Sleeptoken.png" width={54} height={54} alt=""/>
            </a>
            <a href="#" className='w-14 h-14 rounded-xl overflow-hidden hover:ring-8 hover:ring-zinc-400/10'>
              <Image src="/Album-covers/Bb.png" width={54} height={54} alt=""/>
            </a>
            <a href="#" className='w-14 h-14 rounded-xl overflow-hidden hover:ring-8 hover:ring-zinc-400/10'>
              <Image src="/Album-covers/Badomens2.png" width={54} height={54} alt=""/>
            </a>
            <a href="#" className='w-14 h-14 rounded-xl overflow-hidden hover:ring-8 hover:ring-zinc-400/10'>
              <Image src="/Album-covers/Badomens.png" width={54} height={54} alt=""/>
            </a>
          </div>
        </aside>
        <main className='flex flex-col flex-1 bg-zinc-900 rounded-xl px-5'>
          <div className='h-12 w-full p-2 my-2 flex justify-between'>
            <div className='flex space-x-2'>
              <a href="#" className='bg-black/20 rounded-full flex'>
                <span className="material-symbols-outlined p-1 scale-75 relative left-0.5">arrow_back_ios</span>
              </a>
              <a href="#" className='bg-black/20 rounded-full flex'>
                <span className="material-symbols-outlined p-1 scale-75 relative left-0.5">arrow_forward_ios</span>
              </a>
            </div>
            <div className='flex space-x-2'>
              <a href="#" className='bg-black/20 rounded-full flex'>
                <span className="material-symbols-outlined p-1 scale-75 relative left-0.5">notifications</span>
              </a>
              <a href="#" className='bg-black/20 rounded-full flex'>
                <span className="material-symbols-outlined p-1 scale-75 relative left-0.5">groups</span>
              </a>
              <a href="#" className='bg-black/20 rounded-full flex'>
                <span className="material-symbols-outlined p-1 scale-75 relative left-0.5">person</span>
              </a>
            </div>
          </div>
          <div className='flex bg-black/20 w-full h-80 gap-3 space-x-5 items-center px-5'>
            <a>
              <Image src='/Album-covers/Sleeptoken.png' width={312} height={312} alt=''/>
            </a>
            <div className='flex flex-col gap-5'>
              <span className='font-semibold text-sm'>PLAYLIST</span>
              <h1 className='text-6xl font-bold'>Popular Metal Songs...</h1>
              <span className='font-medium'>Listen to the most sucessful Metal songs!</span>
              <div>
                <button>
                  Play
                </button>
                <button>
                  Follow
                </button>
                <a href="#">
                  aaa
                </a>
              </div>
            </div>
          </div>
          <div>

          </div>
          <div>

          </div>
        </main>
      </div>
      <footer className='h-16'>
        footer
      </footer>
    </div>
  )
}
