import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function MyWork() {

  const [gitRepos, setGitRepos] = useState<any[]>([])

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      const gitData = await fetch("https://api.github.com/users/TheAhmedJoy/repos")
      const gitRepos = await gitData.json()

      let gitRepoArr = []

      for (let i = 0; i < gitRepos.length; i++) {
        if (gitRepos[i].stargazers_count > 0) {
          gitRepoArr.push(gitRepos[i])
        }
      }

      setGitRepos(gitRepoArr)
    }

    fetchGitHubRepos()
  }, [])

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">
        Projects
      </h4>
      <h2 className="text-center text-5xl font-Ovo">
        My Latest Work
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovoa">
        Explore a collection of projects showcasing my Full Stack expertise.
      </p>
      <div className="md:grid-cols-2 lg:gap-8 grid grid-cols-1 gap-6">
        {gitRepos.map((repo, index) => (
          <div className="bg-white shadow-xl rounded-2xl h-100 overflow-hidden border border-gray-40 flex flex-col dark:bg-darkTheme dark:border-white" key={index}>
            <div className="h-48 relative border-b border-grey-40">
              <Image src={`https://raw.githubusercontent.com/TheAhmedJoy/${repo.name}/${repo.default_branch}/Thumbnail/thumbnail.png`}
                fill className="object-cover w-full h-full" alt="Project thumbnail" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl mb-3 font-Outfit">
                {repo.name}
              </h3>
              <p className="text-gray-600 text-sm flex-1 mb-6 dark:text-white">
                {repo.description}
              </p>
              <div className="flex gap-3">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-gray-800 dark:bg-neutral-100 text-white rounded-lg font-medium text-sm
                                    text-center flex-1 dark:text-neutral-900 hover:bg-gray-900 dark:hover:bg-neutral-200 
                                    transition-colors border border-gray-40 font-Outfit">
                  View Repo
                </a>
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-gray-40 dark:bg-darkTheme text-gray-800 border rounded-lg font-medium text-sm text-center flex-1 dark:text-neutral-100 
                        hover:bg-neutral-50 dark:hover:bg-darkHover transition-colors font-Outfit dark:border dark:border-white">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
