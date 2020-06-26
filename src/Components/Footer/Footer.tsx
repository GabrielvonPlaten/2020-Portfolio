import React from 'react';
import './Footer.sass';

export const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='website-info'>
        <h2 className='footer__title'>Webite created by Gabriel von Platen</h2>
        <p>Built with React and Sass</p>
        <a
          className='footer__github-link'
          href='https://github.com/GabrielvonPlaten/2020-Portfolio'
          target='_blank'
        >
          Github
        </a>
        <p>
          Contact:{' '}
          <a className='mail-link' href='mailto:gabrielvonplaten@gmail.com'>
            Gabrielvonplaten@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};
