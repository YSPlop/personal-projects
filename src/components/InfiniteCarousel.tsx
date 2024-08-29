"use client";
import React, { ReactElement, useState, useEffect } from "react";
import "styled-components";
import Marquee from "react-fast-marquee";
import useWindowWidth from "@/utils/useWindowWidth";

interface Skill {
    icon: ReactElement; // ReactElement since icons are React components
    name: string;       // The name of the skill
}

interface infiniteCarouselProps {
    skills: Skill[];
}

const InfiniteCarousel: React.FC<infiniteCarouselProps> = ({ skills }) => {

  const [bgColor, setBgColor] = useState('');
  const windowWidth = useWindowWidth();
  const velocity = windowWidth < 768 ? 25 : 50; // Example: 10 for mobile, 25 for larger screens


  useEffect(() => {
    // Get the background color of the page
    const pageBgColor = window.getComputedStyle(document.body).backgroundColor;
    setBgColor(pageBgColor);
  }, []);
  
  return (
    
    <Marquee
      gradient={true}
      gradientColor={bgColor}
      gradientWidth={75}
      pauseOnHover={false}
      speed={velocity}
    >
      {skills.map((skill, index) => (
        <div key={index} className="inline-block text-center mx-6">
          {skill.icon}
          <p className="text-lg">{skill.name}</p>
        </div>
      ))}
    </Marquee>

  );

}

export default InfiniteCarousel;