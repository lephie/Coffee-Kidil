'use client'; 

import Homebutton from '@/components/homebutton';
import Imagessliders from '@/components/Imagessliders';
import Navbar from '@/components/navbar';
import Sliders1 from '@/components/sliders1';
import Sliders2 from '@/components/sliders2';


export default function Home() {
  return (
  <main>
      <Imagessliders />
      <Homebutton />
      <Sliders1 />
      <Sliders2 />
      <Navbar />
  </main>
  );
}
