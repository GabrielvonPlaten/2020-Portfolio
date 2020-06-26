import React, { Fragment } from 'react';
import './Work.sass';

import workData from '../../data/works.json';

export const Work: React.FC = () => {
  return (
    <Fragment>
      <div>
        <h2 className='works-title'>Works</h2>
      </div>
      <div className='work-container'>
        {workData.works.map((work: any) => (
          <div
            className='work-container__work'
            style={{ backgroundImage: `url(${work.thumbnail})` }}
          >
            <div className='work-darkBackground' />
            <div className='work-about'>
              <h2>{work.name}</h2>
              <ul className='tech-list'>
                {work.tech.map((tech: any) => (
                  <li className='tech-list__item'>{tech.name}</li>
                ))}
              </ul>
              <p>{work.description}</p>
              <ul className='links-list'>
                {work?.github && (
                  <li>
                    <a
                      className='btn btn--small'
                      href={work.github}
                      target='_blank'
                    >
                      Github
                    </a>
                  </li>
                )}
                <li>
                  <a
                    className='btn btn--small'
                    href={work.website}
                    target='_blank'
                  >
                    Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
