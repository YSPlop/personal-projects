"use client";
import './globals.css';
import GalleryComponent from '../components/GalleryComponent/GalleryComponent';
import Hero from '../components/Hero/Hero';
import About from './about/page';
import Portfolio from './projects-display/page';

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