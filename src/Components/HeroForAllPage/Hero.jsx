// Layout.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import bg02 from '../../assets/bg02.jpg';

function Hero({ title, breadcrumb, page }) {
  return (
    <section>
      <div
        className="bg-center bg-cover px-4 relative"
        style={{
          background: `url(${bg02}), linear-gradient(to right, #04081a, transparent)`,
        }}
      >
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="pt-28 pb-56">
            <h2 className="text-6xl leading-tight mb-7 font-bold text-white">
              {title} <span className="text-primary">{page}</span>
            </h2>
            <ul className="flex items-center justify-center uppercase font-bold text-sm text-white">
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <li className={index === 0 ? 'text-primary cursor-pointer' : 'cursor-pointer'}>
                    {item}
                  </li>
                  {index < breadcrumb.length - 1 && <span className="mx-3">|</span>}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black"></div>
    </section>
  );
}

export default Hero;
