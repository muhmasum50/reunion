import React from "react";
import { useRouter } from 'next/router'
import { HomeOutlined, CalendarOutlined, CarryOutOutlined, SmileOutlined } from '@ant-design/icons';
import BottomMenuItem from "../../atoms/BottomMenuItem"

const NavBot = () => {

  const router = useRouter()

  return (
    <nav className="flex items-center justify-center fixed bottom-0 w-full h-16 px-2 bg-gray-100 border-t border-gray-300 z-40">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto">
        <ul className="flex items-center justify-evenly w-full">
        <li className="relative">
            <BottomMenuItem 
              isActive={router.pathname === '/'}
              link="/"
              name="Home"
            >
              <HomeOutlined style={{ fontSize:30 }}/>
            </BottomMenuItem>
          </li>
          <li className="relative">
            <BottomMenuItem 
              isActive={router.pathname === '/kegiatan-kami'} 
              link="/kegiatan-kami"
              name="Event's"
            >
              <CarryOutOutlined style={{ fontSize:30 }}/>
            </BottomMenuItem>
          </li>

          {router.pathname == '/invitation' && ( <li>
            <BottomMenuItem 
              isActive={router.pathname === '/invitation'} 
              link="/invitation"
              name="Invitation"
            >
              <CalendarOutlined style={{ fontSize:30 }}/>
            </BottomMenuItem>
          </li>)} 

          <li className="relative">
            <BottomMenuItem 
              isActive={router.pathname === '/tentang-kami'}  
              link="/tentang-kami"
              name="Tentang Kami"
            >
              <SmileOutlined style={{ fontSize:30 }}/>
            </BottomMenuItem>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBot;
