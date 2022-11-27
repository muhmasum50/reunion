import React, { useEffect } from "react";
import ReactPlayer from "react-player/soundcloud";
import InvitationLayout from "../components/layouts/InvitationLayout";
import { useRouter } from 'next/router'
import { 
  CalendarOutlined, 
  DollarCircleOutlined, 
  InteractionOutlined,
  PushpinOutlined
} from '@ant-design/icons';

import AOS from 'aos'
import 'aos/dist/aos.css';

const rundownEvent = [
  {title: 'Kedatangan Peserta Reuni', desc: 'Peserta sementara diarahkan menuju ruang tengah'},
  {title: 'Pembagian Kamar & ISHOMA', desc: 'Peserta istirahat dan melaksanakan istirahat, sholat dan makan'},
  {title: 'Pembukaan & Sambutan', desc: 'Sambutan ketua pelaksana dan penjelasan tujuan,strukutur kepanitaan serta anggaran dana, dilanjutkan sambutan guru (bila ada)'},
  {title: 'Sharing Session', desc: 'Kesan dan pesan untuk acara ini, kritik dan saran'},
  {title: 'Having Fun', desc: 'Perform dari panita atau peserta, BBQ, tukar kado seluruh peserta dan harga max 10k'},
  {title: 'Free Time', desc: 'Pembagian kelompok untuk outbond'},
  {title: 'Sholat Shubuh', desc: 'sholat shubuh berjamaah, atau masing-masing'},
  {title: 'Coffe Break', desc: 'Santai santai dulu, sembari menghirup udara segar'},
  {title: 'Senam Pagi', desc: 'Peserta dan panitia melakukan senam pagi'},
  {title: 'Makan pagi', desc: '-'},
  {title: 'Outbond', desc: 'Estafet kardus, estafet air, voly air (khusus cowo), gobak sodor (khusus cewe). Peserta dibagi menjadi beberapa kelompok dan tiap kelompok mengumpulkan poin'},
  {title: 'Free Time', desc: '-'},
  {title: 'Penutupan', desc: 'Ditutup oleh ketupel'},
  {title: 'ISHOMA dan persiapan pulang ', desc: '-'}
]

export default function Invitation() {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter()
  const alumni:string|any = router.query.to ?? ''

  return (
    <InvitationLayout>
      <section className="overflow-hidden bg-sky-200 space-y-4 text-center">
        <div className="relative px-6 bg-white" style={{ borderTopLeftRadius:100, borderTopRightRadius: 100 }}>
          <div className="mx-auto max-w-3xl min-[320px]:pt-12 sm:pt-12 lg:pt-10 sm:pb-5">
            <div style={{ fontFamily: "Poppins" }}>
              <h1 className="text-4xl tracking-tight sm:text-center" data-aos="fade-down" data-aos-duration="3000">
                <br />
               Undangan Reuni <br /> Alumni SMA Ulul Alb@b
              </h1>

              <br />
              {
                router.query.to ? (
                  <React.Fragment>
                    <h2 className="text-md" data-aos="fade-left" data-aos-duration="3000">Kepada Yth. Rekan Alumni</h2>
                    <h2 className="text-2xl mt-2 mb-2" data-aos="fade-right" data-aos-duration="3000">{alumni.toUpperCase()}</h2>
                  </React.Fragment>
                ) : (

                  <React.Fragment>
                    <h2 className="text-md" data-aos="fade-left" data-aos-duration="3000">Kepada Yth. Rekan - rekan Alumni</h2>
                  </React.Fragment>
                )
              }
              
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center" data-aos="fade-up" data-aos-duration="4000">
                Besar harapan kami semua, agar rekan-rekan alumni dapat
                meluangkan waktu untuk menghadiri acara reuni, untuk mempererat
                tali silaturahmi diantara kita semua. <br/>
               
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden space-y-4" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="3000"> 
        <div className="text-center">
          <p className="px-6 text-md text-center text-slate-800"> Kegiatan reuni dan halal bihalal akan diselenggarakan pada : </p>
        </div>
        <div className="relative flex-row grid gap-6 px-6 mx-auto max-w-3xl">
          <hr/>
          <a
            href="#"
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50" 
          >
            <CalendarOutlined style={{fontSize:24}} className="text-blue-600"/>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Hari & Tanggal</p>
              <p className="mt-1 text-sm text-gray-500">Sabtu - Minggu,  14 s/d 15 Januari 2023.</p>
            </div>
          </a>

          <a
            href="#"
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
          >
            <InteractionOutlined style={{fontSize:24}} className="text-blue-600"/>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Kegiatan </p>
              <p className="mt-1 text-sm text-gray-500">
                Reuni Halal Bihalal Angkatan 10 SMA U@
              </p>
            </div>
          </a>

          <a
            href="#"
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
          >
            <DollarCircleOutlined style={{fontSize:24}} className="text-blue-600"/>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Iuran</p>
              <p className="mt-1 text-sm text-gray-500">Rp. 100.000,00-</p>
            </div>

          </a>

          <a
            href="#"
            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
          >
            <PushpinOutlined style={{fontSize:24}} className="text-blue-600"/>

            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Lokasi</p>
              <p className="mt-1 text-sm text-gray-500">Villa Sastro Putih Pacet</p>
            </div>
          </a>
        </div>
      </section>

      {/* map */}
      <section className="overflow-hidden space-y-4 pb-15" data-aos="fade-down" data-aos-duration="3000">
        <div className="google-map-code px-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.059412351242!2d112.5608192!3d-7.676762299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7877fca5bf7119%3A0x7c26d1f23273b6b6!2sVilla%20Sastro%20Putih%20Pacet!5e0!3m2!1sen!2sid!4v1669540302652!5m2!1sen!2sid"
            width="630"
            height="450"
            frameBorder="1"
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </section>

      {/* payment */}
      <section className="overflow-hidden space-y-4 px-6 pt-10  ">
        <div className="text-center">
          <p className="px-6 text-xl font-semibold text-center text-slate-800"> Biaya Iuran : </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-4 sm:gap-1 sm:grid-cols-1 sm:py-1">
              
          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pembayaran Online
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                BCA - 6720725639  <span className="font-semibold text-primary">Sylviera Rastra Laylia.</span>
              </p>
          </a>

          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pembayaran Offline
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Bisa menghubungi, <span className="font-semibold text-primary">Ilham Owes.</span>
              </p>
          </a>

        </div>
      </section>

      {/*  run down */}
      <section className="overflow-hidden px-6 pt-10">
        <div className="text-center">
          <p className="px-6 text-2xl font-semibold text-center text-slate-800 py-10"> Rundown Kegiatan Acara : </p>
        </div>
        <ol className="relative border-l border-blue-200 dark:border-gray-700">      

          {
            rundownEvent.map((row, idx) => {
              return(
                <li className="mb-10 ml-4" key={idx}>
                  <div className="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  {/* <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">#</time> */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{row.title}</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{row.desc}</p>
                </li>
              )
            })
          }            
          
        </ol>

      </section>

      <div style={{ display: "block" }} className="flex">
        {/* <ReactPlayer playing url='https://soundcloud.com/hariezg-1/kepompong-sindentosca' width={200} height={110} /> */}
      </div>

      <div className="py-10"></div>
      
    </InvitationLayout>
  );
}
