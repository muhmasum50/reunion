import { ReactNode } from 'react'

import { 
  MenuOutlined, 
  HomeOutlined, 
  CarryOutOutlined, 
  SmileOutlined 
} from '@ant-design/icons';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';


type menuItemType = {
  isActive: boolean,
  title: string
  link: string,
  children: ReactNode
}

const MenuItemNavBar:React.FC<menuItemType> = ({
  isActive, title, link, children
}) => {

  return(
    <Link
      className={`flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-sky-300 ${isActive}`}
      href={link}
    >
      {children}
      <span className="ml-2 text-sm font-medium">{title}</span>
    </Link>
  )
}


const Navbar = () => {

  const router = useRouter()

  return (
    <header className="flex items-center justify-center fixed w-full h-16 z-45 bg-sky-800 border-b border-sky-300 z-10">
      <div className="w-full sm:max-w-2xl mx-auto flex items-center justify-between h-full px-4">
        <div className="navbar bg-sky-800 border-b border-sky-300 text-slate-900">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <MenuOutlined style={{ fontSize:24 }} />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <MenuItemNavBar link="/" title="Home" isActive={router.pathname === '/'}>
                    <HomeOutlined style={{ fontSize:24 }}/>
                  </MenuItemNavBar>
                </li>

                <li>
                  <MenuItemNavBar link="kegiatan-kami" title="Event&apos;s" isActive={router.pathname === '/kegiatan-kami'}>
                    <CarryOutOutlined style={{ fontSize:24 }}/>
                  </MenuItemNavBar>
                </li>

                <li>
                  <MenuItemNavBar link="tentang-kami" title="Tentang Kami" isActive={router.pathname === '/tentang-kami'}>
                    <SmileOutlined style={{ fontSize:24 }}/>
                  </MenuItemNavBar>
                 
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-end">
            <Image src="/images/htchr.png" width={30} height={30} alt="htcr"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
