import React, { useEffect, Fragment } from 'react';
import './Work.sass';

import workData from '../../data/works.json';

interface EntryInterface {
  target: any;
  intersectionRatio: any;
  isIntersecting: boolean;
}

export const Work: React.FC = () => {
  useEffect(() => {
    const elements_blur = document.querySelectorAll('.blur-0');

    const observer = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry: EntryInterface) => {
          console.log(entry);
          if (
            entry.target.className.includes('blur-0') &&
            entry.isIntersecting
          ) {
            entry.target.style.animation = `unblur ${entry.target.dataset.delay} forwards ease-out`;
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      },
    );

    elements_blur.forEach((el: any) => {
      observer.observe(el);
    });
  });

  return (
    <Fragment>
      <div>
        <h2 className='works-title'>Work</h2>
      </div>
      <div className='work-container'>
        {workData.works.map((work: any, index: number) => (
          <div className='work-container__work' key={index}>
            <div className='blur-container blur-0' data-delay='0.8s'>
              <div className='work-container__work-info'>
                <h2>{work.name}</h2>
                <ul>
                  {work.tech.map((tech: any, index: number) => (
                    <li>{tech.name}</li>
                  ))}
                </ul>
                <p>{work.description}</p>
                <div className='work-container__work-info__buttons'>
                  {work.github && (
                    <a href={work.github} target='_blank'>
                      Github
                    </a>
                  )}
                  {work.website && (
                    <a href={work.website} target='_blank'>
                      Website
                    </a>
                  )}
                </div>
              </div>
              <div className='work-container__work--image'>
                <img src={work.thumbnail} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
