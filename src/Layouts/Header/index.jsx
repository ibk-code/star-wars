// import external dependencies
import React from 'react';
import Particles from 'react-particles-js';
import Crawler from '../../components/Crawler';

// import internal dependencies
import SelectComponent from '../../components/SelectComponent';

function Header() {
  return (
    <>
      <div className="header-wrapper">
        <Particles
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              color: {
                value: '#fee715ff',
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: 'top',
                out_mode: 'out',
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'bubble',
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
        <div className="select-wrapper">
          <SelectComponent />
          <Crawler />
        </div>
      </div>
    </>
  );
}

export default Header;
