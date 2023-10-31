import Image from 'next/image'

export default function PlayingNow(){
    return (
        <div className='flex gap-4 items-center'>
          <div className='flex overflow-hidden'>
            <Image src='/Album-covers/Sleeptoken.png' className='rounded-md' width={52} height={52} alt=''></Image>
          </div>
          <div className='flex flex-col'>
            <p className='font-medium'>Fall For Me</p>
            <span className='text-xs text-zinc-400'>Sleep Token</span>
          </div>
          <a href="#" className='text-green-500 hidden md:flex'><span className="material-symbols-outlined scale-75">favorite</span></a>
        </div>
    )
}