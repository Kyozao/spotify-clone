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
            <a className=''>
              <Image src='/Album-covers/Sleeptoken.png' className='max-w-sm' width={240} height={240} alt=''/>
            </a>
            <div className='flex flex-col gap-5'>
              <span className='font-semibold text-sm'>PLAYLIST</span>
              <h1 className='text-6xl font-bold'>Popular Metal Songs...</h1>
              <span className='font-medium'>Listen to the most sucessful Metal songs!</span>
              <div className='flex space-x-8'>
                <button className='bg-green-500 text-xl px-8 py-3 text-zinc-900 font-medium rounded-full flex justify-center items-center hover:ring-2 ring-green-500'>
                  Play
                </button>
                <button className='bg-transparent border border-zinc-400 text-xl px-8 py-3 text-zinc-50 font-medium rounded-full flex justify-center items-center hover:ring-2 ring-zinc-50'>
                  Follow
                </button>
                <a href="#" className='flex items-center'>
                  <span className="material-symbols-outlined scale-150 text-zinc-400 hover:text-zinc-50 transition-colors">more_horiz</span>
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col py-6'>
            <h2 className='text-3xl font-bold'>Good afternoon</h2>
            <section className='grid grid-cols-2 py-6 gap-3'>
              <div className='flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer'>
                <Image src='/Likedsongs.png' width={64} height={64} alt=''></Image>
                <h3 className='font-extrabold'>Liked Songs</h3>
              </div>
              <div className='flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer'>
                <Image src='/Album-covers/Bmth.png' width={64} height={64} alt=''></Image>
                <h3 className='font-extrabold'>Bring Me The Horizon</h3>
              </div>
              <div className='flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer'>
                <Image src='/Album-covers/Miw.png' width={64} height={64} alt=''></Image>
                <h3 className='font-extrabold'>Motionless In White</h3>
              </div>
              <div className='flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer'>
                <Image src='/Album-covers/Slipknot.png' width={64} height={64} alt=''></Image>
                <h3 className='font-extrabold'>Slipknot</h3>
              </div>
              <div className='flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer'>
                <Image src='/Album-covers/Bb.png' width={64} height={64} alt=''></Image>
                <h3 className='font-extrabold'>Breaking Benjamin</h3>
              </div>
              <div className='flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer'>
                <Image src='/Album-covers/Sleeptoken.png' width={64} height={64} alt=''></Image>
                <h3 className='font-extrabold'>Sleep Token</h3>
              </div>
            </section>
          </div>
          <div>

          </div>
        </main>
      </div>
      <footer className=' p-3 flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <Image src='/Album-covers/Sleeptoken.png' className='rounded-md' width={64} height={64} alt=''></Image>
          <div className='flex flex-col'>
            <p className='font-medium'>Fall For Me</p>
            <span className='text-xs text-zinc-400'>Sleep Token</span>
          </div>
          <a href="#" className='text-green-500'><span className="material-symbols-outlined scale-75">favorite</span></a>
        </div>
        <div className='flex flex-col items-center'>
          <div>
            <a href=""><span className="material-symbols-outlined">shuffle</span></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
