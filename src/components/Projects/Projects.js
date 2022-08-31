import React from 'react'
import Grid from '@mui/material/Grid'
import {Card} from './Card'
import { projects as projectData } from './projectData';
import './Projects.css'

export const Projects = () => {
    
  return (
    <section className='project' id='projects'>
        <h1>Projects</h1>
        <span>These are my projects</span>
        <Grid container justifyContent="space-between" className="grid-list">
            {projectData.map((project, index) => (
                <Grid item className='grid' columns={1} key={index}>
                    <Card 
                        key={index}
                        {...project}
                    />
                </Grid>
            ))}
        </Grid>
    </section>
  )
}