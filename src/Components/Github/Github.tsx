import React, { useState, useEffect, ReactElement } from 'react';
import './Github.sass';

import GithubIcon from '../../Styles/images/github.svg';

export const Github = () => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const API_URL = `https://api.github.com/users/gabrielvonplaten/repos?per_page=6&sort=updated:asc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

  const [githubRepos, setGithubRepos] = useState<any>([]);

  useEffect(() => {
    fetchGitHubActivity();
  }, []);

  const fetchGitHubActivity = async () => {
    const firstRes = await fetch(API_URL, {
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
    });
    const secondRes = await fetch(firstRes.url);
    const data = await secondRes.json();

    setGithubRepos(data);
  };

  // const fetchRepoCommit = async (name: string) => {
  //   const res = await fetch(
  //     `https://api.github.com/repos/gabrielvonplaten/${name}/commits?per_page=100`,
  //     {
  //       method: 'GET',
  //       headers: { 'user-agent': 'node.js' },
  //     },
  //   );
  //   const data = await res.json();
  //   const length = data.length || 1;
  //   console.log(data);

  //   return <p>Commits: {length}</p>;
  // };

  return (
    <div className='github'>
      <h1 className='github-title'>Latest Activity</h1>
      <section className='github__top-repos'>
        <ul className='github-repo'>
          {!!githubRepos.length &&
            githubRepos.map((repo: any) => (
              <a
                key={repo.id}
                href={`https://github.com/GabrielvonPlaten/${repo.name}`}
                target='_blank'
              >
                <li className='github-repo__item'>
                  <div className='github-repo__item__title'>
                    <img src={GithubIcon} />
                    <h2>{repo.name.replace(/_|-/gi, ' ')}</h2>
                    {/* {fetchRepoCommit(repo.name)} */}
                  </div>
                  <p className='github-repo__item__language'>{repo.language}</p>
                  <p>
                    Last update:{' '}
                    {repo.updated_at.substring(0, repo.updated_at.length - 10)}
                  </p>
                  <p>{repo.description}</p>
                </li>
              </a>
            ))}
        </ul>
      </section>
    </div>
  );
};
