import React, { useState } from 'react'
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  justify-content: center;
  max-width: 1200px;
  align-items: center;
`;
const SectionUp = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;
const SectionDown = styled.div`
  display: flex;
  gap: 30px;
`;
const Picture = styled.img`
  width: 100%;
  border-radius: 1.5rem;
  &:hover{
    cursor: pointer;
  }
`;

export const SlideShow = () => {
    const [picturesSrc, setPictureSrc] = useState('https://picsum.photos/seed/picsum/200/300')
    const handleClick = (e) => {
        setPictureSrc(e.target.src)
    }
  return (
    <div>
        <Section>
            <SectionUp>
                <Picture src={picturesSrc} alt="up-img" />
            </SectionUp>
            <SectionDown>
            <Picture onClick={(e) => handleClick(e)} src="https://picsum.photos/seed/picsum/200/300" />
            <Picture onClick={(e) => handleClick(e)} src="https://picsum.photos/200/300?grayscale" />
            <Picture onClick={(e) => handleClick(e)} src="https://picsum.photos/200/300/?blur" alt="down-img" />
            </SectionDown>
        </Section>
    </div>
  )
  
}


