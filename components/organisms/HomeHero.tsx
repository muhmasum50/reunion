import React from "react";
import { HomeOutlined, CarryOutOutlined, SmileOutlined } from '@ant-design/icons';

type iconType = {
  title: string,
  description: string,
  icon?: any
}

const dataIcon:iconType[] = [
  {
    title: 'Mari Berekenalan', 
    description: 'Yuk berkenalan dengan angkatan yang lain.',
    icon: '🤝'
  },
  {
    title: 'Bersalaman', 
    description: 'kamu jarang sekali lo bertemu dan bersalaman dengan teman seangkatan.',
    icon: '🤝'
  },
  {
    title: 'Bercengkerama', 
    description: 'Gak lupa juga bercengkerama dong biar makin asyik.',
    icon: '🤝'
  },
  {
    title: 'Menjalin Silaturahmi', 
    description: ' Jangan lupa ya untuk menjalin tali silaturahmi, biar segala sesuatunya menjadi indah.',
    icon: '🤝'
  },
]

export const HomeHero: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden space-y-4 text-center">
      <div className="relative px-6">
        <div className="mx-auto max-w-3xl min-[320px]:pt-12 sm:pt-12 lg:pt-10 sm:pb-5">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center">
              Selamat datang <br /> keluarga besar alumni U@
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
              Sudah lama sejak kamu lulus, jarang berkontak dengan teman-teman
              SMA U@, semoga kamu tidak lupa dengan mereka ya <span className="animate-bounce">😸😸</span>
            </p>

            <div className="mx-auto max-w-7xl">
              <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">

                  {
                    dataIcon.map((row, idx) => {
                      return(
                        <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row" key={idx}>
                          <div className="animate-bounce flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 border-gray-300 border text-white sm:shrink-0">
                            <span className="text-xl">{row.icon}</span>
                          </div>
                          <div className="sm:min-w-0 sm:flex-1">
                            <p className="text-lg font-semibold leading-8 text-gray-900">
                              {row.title}
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                              {row.description}
                            </p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
