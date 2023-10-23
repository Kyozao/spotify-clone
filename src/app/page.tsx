import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen p-2">
      <div className='flex flex-1 pt-8 gap-3'>
        <aside className='w-20 bg-zinc-900 rounded-xl p-2 pt-6 gap-3'>
          <div className='flex flex-col items-center space-y-6 text-zinc-400'>
            <a href="#" className=''>
              <span className='material-symbols-outlined scale-125'>home</span>
            </a>
            <a href="#">
            <span className="material-symbols-outlined scale-125">search</span>
            </a>
          </div>
        </aside>
        <main className='flex-1 bg-zinc-900 rounded-xl '>
          main
        </main>
      </div>
      <footer className='h-16'>
        footer
      </footer>
    </div>
  )
}
