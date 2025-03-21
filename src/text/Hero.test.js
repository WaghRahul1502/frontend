// import React from 'react';
// import {render,screen} from '@testing-library/react';
// import '@testing-library/jest-dom';
// import Hero from "../landing_page/Home/Hero";

// // test suite

// describe('Hero Component',()=>{
//     test('renders hero image',()=>{
//    render(<Hero/>);
//    const heroImage =screen.getAllByAltText("HeroImg");
//    expect(heroImage).toBeInTheDocument();
//    expect(heroImage).toHaveAttribute('src',"media/homeHero.png")
//     });
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "../landing_page/Home/Hero";

describe('Hero Component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("HeroImg"); // Assuming only one image
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', "media/homeHero.png");
  });
});
