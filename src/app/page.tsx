"use client";
import './globals.css';
import GalleryComponent from '../components/GalleryComponent/GalleryComponent';
import Hero from '../components/Home/Hero';
import About from './about/page';
import Portfolio from './projects-display/page';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <div>
        {/* <GalleryComponent /> */}
        <Hero />
        <About />
        <Portfolio />
      </div>
    </>
  );

}