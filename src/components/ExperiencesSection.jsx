import { useState } from 'react'
import classes from './Experience.module.scss'

const ExperiencesSection = () => {
  const [selectedTab, setSelectedTab] = useState('experience')

  const educationData = [
    {
      name: 'Grado en Multimedia',
      academy: 'UOC',
      year: 'En curso',
      description: 'Grado interdisciplinar, competencias en diseño, programación y medios multimedia.'
    },
    {
      name: 'Bootcamp Web',
      academy: 'Ironhack',
      year: '2019',
      description: 'Formación intensiva para adquirir habilidades técnicas en desarrollo web.'
    },
    {
      name: 'CFGS Sonido',
      academy: 'IES La Mercé',
      year: '2013',
      description: 'Especialización en tratamiento y producción de audio para medios audiovisuales.'
    },
    {
      name: 'CFGS Audiovisuales',
      academy: 'IES Sta. Eulalia',
      year: '2010',
      description: 'Formación técnica en desarrollo y producción de contenidos audiovisuales.'
    }
  ]

  const experienceData = [
    {
      company: 'Larcier Intersentia',
      role: 'Frontend',
      city: '',
      date: 'Jun 2023 - Dic 2024',
      summary: 'Creación de componentes para la construcción de páginas web del grupo editorial por medio de un SASS.'
    },
    {
      company: 'Sirion Developers',
      role: 'Frontend',
      city: '',
      date: 'Mar 2021 - Mar 2023',
      summary:
        'Participación en proyectos en sectores inmobiliario, transporte y hostelería. Maquetación píxel perfect y desarrollo agile.'
    }
  ]

  const data = selectedTab === 'experience' ? experienceData : educationData
  return (
    <section className={`${classes.experience} mb-20`}>
      <div className={classes['experience-section']}>
        <div className={classes['experience-section__switch']}>
          <button
            className={`${classes['experience-section__tab']} ${selectedTab === 'experience' ? classes['experience-section__tab--active'] : ''
              }`}
            onClick={() => setSelectedTab('experience')}
          >
            Experiencia
          </button>
          <button
            className={`${classes['experience-section__tab']} ${selectedTab === 'education' ? classes['experience-section__tab--active'] : ''
              }`}
            onClick={() => setSelectedTab('education')}
          >
            Educación
          </button>
        </div>

        <div className={classes['experience-section__timeline']}>
          {data.map((item, index) => (
            <div
              className={`${classes['experience-section__item']} ${index % 2 === 0 ? classes['experience-section__item--left'] : classes['experience-section__item--right']
                }`}
              key={index}
            >
              <div className={classes['experience-section__dot']} />
              <div className={classes['experience-section__content']}>
                {selectedTab === 'education'
                  ? (
                    <>
                      <h3 className={classes['experience-section__title']}>{item.name}</h3>
                      <div className={classes['experience-section__subcontent']}>
                        <p className={classes['experience-section__subtitle']}>{item.academy}</p>
                        <p className={classes['experience-section__year']}>{item.year}</p>
                      </div>
                      <p className={classes['experience-section__description']}>{item.description}</p>
                    </>
                    )
                  : (
                    <>
                      <h3 className={classes['experience-section__title']}>{item.company}</h3>
                      <div className={classes['experience-section__subcontent']}>
                        <p className={classes['experience-section__subtitle']}>{item.role}</p>
                        <p className={classes['experience-section__year']}>{item.date}</p>
                      </div>
                      <p className={classes['experience-section__description']}>{item.summary}</p>
                    </>
                    )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}

export default ExperiencesSection
