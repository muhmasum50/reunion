import { useEffect } from 'react';
import { Space } from '../components/atoms/Space';
import Layout from '../components/layouts/Layout'
import { HomeAnnounce } from '../components/organisms/HomeAnnounce';
import { HomeEvent } from '../components/organisms/HomeEvent';
import { HomeHero } from '../components/organisms/HomeHero';

export default function Home() {
  return (
    <Layout>
      <HomeHero/>


      <HomeEvent/>
      <HomeAnnounce/>
      <Space/>      
    </Layout>
  )
}
