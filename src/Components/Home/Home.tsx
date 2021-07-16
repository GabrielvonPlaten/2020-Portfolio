import React, { useEffect, Fragment } from 'react';
import './Home.sass';

// Data
import skillsData from '../../data/skills.json';

// Icons
import Github from '../../Styles/images/github.svg';
import LinkedIn from '../../Styles/images/linkedin.svg';

interface EntryInterface {
  target: any;
  intersectionRatio: any;
}

export const Home: React.FC = () => {
  useEffect(() => {
    const elements_left = document.querySelectorAll('.anim_left');
    const elements_right = document.querySelectorAll('.anim_right');
    const elements_top = document.querySelectorAll('.anim_top');

    const observer = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry: EntryInterface) => {
          if (entry.target.className.includes('anim_left')) {
            if (entry.intersectionRatio > 0) {
              entry.target.style.animation = `anim_from_left 2.6s ${entry.target.dataset.delay} forwards ease-out`;
            }
          } else if (entry.target.className.includes('anim_right')) {
            if (entry.intersectionRatio > 0) {
              entry.target.style.animation = `anim_from_right 2s ${entry.target.dataset.delay} forwards ease-out`;
            }
          } else if (entry.target.className.includes('anim_top')) {
            if (entry.intersectionRatio > 0) {
              entry.target.style.animation = `anim_from_top 2s ${entry.target.dataset.delay} forwards ease-out`;
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      },
    );

    elements_left.forEach((el: any) => {
      observer.observe(el);
    });

    elements_right.forEach((el: any) => {
      observer.observe(el);
    });

    elements_top.forEach((el: any) => {
      observer.observe(el);
    });
  });

  return (
    <div>
      <div className='welcome'>
        <div className='name'>
          <h3 className='name__profession anim_left' data-delay='0.5s'>
            Frontend Developer - Stockholm, Sweden
          </h3>
          <h1 className='name__gabriel anim_left' data-delay='1s'>
            Gabriel von Platen
          </h1>
          <div className='name__line anim_left' data-delay='0.8s' />
          <div className='name__about anim_left' data-delay='0.5s'>
            <p>
              Hello! I am a Frontend Developer with experience working with
              JavaScript, React, Scss, and TypeScript. I'm highly motivated to
              keep learning about web development and to push my skills in my
              next project.
            </p>
            <p>Shoot me a message! I'm always looking for new opportunities!</p>
          </div>
          <ul className='name__social-medias anim_left' data-delay='1s'>
            <li>
              <a
                href='https://www.linkedin.com/in/gabriel-von-platen-9a89ab12a/'
                target='_blank'
              >
                <img className='svg-icon' src={LinkedIn} alt='LinkedIn Link' />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/GabrielvonPlaten'
                target='_blank'
                data-delay='1s'
              >
                <img className='svg-icon' src={Github} alt='Github Link' />
              </a>
            </li>
          </ul>
          {/* <a
            href='https://docdro.id/3DDTnni'
            target='_blank'
            className='btn btn--orange name__resume-btn anim_left'
            data-delay='1s'
          >
            My Resume
          </a> */}
        </div>

        <div className='skills'>
          <div className='skills__inner skills-1 anim_right' data-delay='1s'>
            <h3 className='skills__title'>Skills</h3>
            <ul className='skills__list'>
              {skillsData.skills.map((skills: any, index: number) => (
                <li key={index} className='skills__item'>
                  {skills.name}
                </li>
              ))}
            </ul>
          </div>

          <div className='skills__inner skills-2 anim_right' data-delay='0.6s'>
            <h3 className='skills__title'>Software</h3>
            <ul className='skills__list'>
              {skillsData.software.map((software: any, index: number) => (
                <li key={index} className='skills__item'>
                  {software.name}
                </li>
              ))}
            </ul>
          </div>

          <div className='skills__inner skills-3 anim_right' data-delay='0.4s'>
            <h3 className='skills__title'>Improving</h3>
            <ul className='skills__list'>
              {skillsData.improving.map((improving: any, index: number) => (
                <li key={index} className='skills__item'>
                  {improving.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='arrow-down anim_top' data-delay='0.7s'>
        <div>
          <p className='arrow-down__text'>Work</p>
          <p className='arrow-down__arrow'>&darr;</p>
        </div>
      </div>
    </div>
  );
};
