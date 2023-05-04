import { BsTruck } from 'react-icons/bs' // BsTruck is the name of the icon from react-icons library 
import { MdOutlineShoppingBag } from 'react-icons/md' // MdOutlineShoppingBag is the name of the icon from react-icons library
import { FaGift } from 'react-icons/fa' // FaGift is the name of the icon from react-icons library

async function getStarted() {
  return (await fetch(`http://localhost:4000/started`, { next: { revalidate: 30 } })).json() // revalidate every 30 seconds  
}

export default async function Home() {
  const allStarted = await getStarted() // gets the started from the server
  const allIcons = allStarted.bullets // gets the icons from the server

  return (

    <main className="flex justify-between px-28 h-screen">
      <img src="https://placehold.co/600x600" alt="placeholder image" />
      <section className='mt-16'>
        <article>
          <p className='text-5xl w-[32rem]'>{allStarted.headline}</p>
          <p className='w-[40rem] mt-6'>{allStarted.text}</p>
        </article>
        <article>
          {allIcons?.map(icon =>
            <div key={icon.id} className='flex gap-6 mt-6'>
              {icon.icon === 'truck' && <BsTruck className='text-orange-600 text-3xl mt-2' />}
              {icon.icon === 'bag-shopping' && <MdOutlineShoppingBag className='text-orange-600 text-3xl mt-2' />}
              {icon.icon === 'gift' && <FaGift className='text-orange-600 text-3xl mt-2' />}
              <div>
                <p className='text-2xl'>{icon.name}</p>
                <p className='opacity-60'>{icon.text}</p>
              </div>
            </div>
          )}
        </article>
      </section>
    </main>
  )

}