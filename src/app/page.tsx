"use client";
import { setLazyProp } from 'next/dist/server/api-utils';
import { Hammersmith_One } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link'



function GalleryComponent() {
  return (
      <div className="gallery">
        <div className="gallery-panel">
            <Link href="/TicTacToe">
              <img src="./img1.jpeg" alt="pic1"/>
            </Link>
        </div>
        <div className="gallery-panel">
            <img src="./img2.jpeg" alt="pic2"/>
        </div>
        <div className="gallery-panel">
            <img src="./img3.jpeg" alt="pic3"/>
        </div>
        <div className="gallery-panel">
            <img src="./img4.jpeg" alt="pic4"/>
        </div>
      </div>
  );
}

export default function Home() {
  return (
    <>
      {/* <Link href="/TicTacToe">Dashboard</Link> */}
      <GalleryComponent />
    </>
  );

}