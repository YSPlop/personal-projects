"use client";
import React, { ReactElement } from "react";
import styled, { keyframes, css } from "styled-components";

interface Skill {
    icon: ReactElement; // ReactElement since icons are React components
    name: string;       // The name of the skill
}

interface infiniteCarouselProps {
    skills: Skill[];
}

const InfiniteCarousel: React.FC<infiniteCarouselProps> = ({skills}) => {

    return (
        <Wrapper>
            <Marquee>
              <MarqueeGroup>
                {skills.map((skill, index) => (
                    <div key={index} className="inline-block text-center mx-6">
                    {skill.icon}
                    <p className="text-lg">{skill.name}</p>
                    </div>
                ))}
              </MarqueeGroup>
            </Marquee>
        </Wrapper>
      );

}

export default InfiniteCarousel;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;