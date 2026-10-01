import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../Components/CTA'

const Project = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow-sm'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Independent projects I&apos;ve built and shipped outside of work.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project)=>(
          <div className='lg:w-[400px] w-full' key={project.name}>
          <div className='block-container w-12 h-12'>
          <div className={`btn-back rounded-xl ${project.theme}`}/>
          <div className='btn-front rounded-xl flex justify-center items-center'>
            <img
              src={project.iconUrl}
              alt="Project Icon"
              className='w-10 h-10 object-contain'
            />
          </div>
          </div>
          <div className='mt-5 flex flex-col'>
          <h4 className='text-2xl font-poppins font-semibold'>
            {project.name}
          </h4>
          <p className='mt-2 text-slate-500'> {project.description}</p>
          {project.link && (
          <div className='mt-5 flex items-center gap-2 font-poppins'>
          <Link to={project.link}
          target='_blank'
          rel="noopener noreferrer"
          className='font-semibold text-blue-600'
          >
              Link
          </Link>
          <img
          src={arrow}
          alt="arrow"
          className='w-4 h-4 object-contain'></img>
          </div>
          )}
          </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200'/>
      <CTA/>

      </section>
  )
}

export default Project