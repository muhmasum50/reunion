import Link from "next/link";

export default function Index() {
  return(
    <div className="flex justify-center">
      <div className="text-center text-bold text-2xl" style={{ paddingTop:'25%' }}>
        <span>Website Masih dalam Pengembangan</span><br/>
        <span>piXEL DEV ✌️</span><br/>

        <Link
          href="/"
          className="mt-10 inline-block rounded-lg bg-sky-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700"
        >
          Kembali kehalaman awal
          <span className="text-sky-200" aria-hidden="true">
             &rarr;
          </span>
        </Link>
      </div>
    </div>
  )
}