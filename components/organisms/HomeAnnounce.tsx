import Link from 'next/link'
import React from 'react'

export const HomeAnnounce:React.FC = () => {
  return(
    <section className="py-10">
      <div className="p-4 bg-sky-300 text-center rounded-md space-y-3">
        <p className="text-xl leading-6 font-semibold">
          Reuni 2023 akan disenggelarakan lho, Klik tombol dibawah ini ya .. ❤️
        </p>
        <Link className="flex flex-row px-4 py-2 text-base rounded-full items-center justify-center border border-transparent 
          font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-brand-500 border-brand-500 bg-sky-100
        hover:bg-sky-200 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-75" 
        href="/invitation">
          Lihat Undangan
        </Link>
      </div>
    </section>
  )
}