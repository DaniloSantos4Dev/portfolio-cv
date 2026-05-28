import { useEffect, useState } from 'react'
import './App.css'
import profileImage from './assets/Img_Danilo.jpg'
import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaFolderTree,
  FaGithub,
  FaGraduationCap,
  FaHouse,
  FaLaptopCode,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaUser,
} from 'react-icons/fa6'

const navigationItems = [
  { id: 'about', icon: FaHouse },
  { id: 'experience', icon: FaBriefcase },
  { id: 'skills', icon: FaCode },
  { id: 'education', icon: FaGraduationCap },
  { id: 'technologies', icon: FaLaptopCode },
  { id: 'contact', icon: FaEnvelope },
] as const

const resumeContent = {
  pt: {
    imageAlt: 'Foto de perfil de Danilo Roberto dos Santos',
    languageLabel: 'Idioma',
    languageAriaLabel: 'Selecionar idioma do curriculo',
    name: 'DANILO ROBERTO DOS SANTOS',
    role: 'ANALISTA DE SISTEMAS SENIOR',
    subRole: 'Desenvolvedor Backend .NET',
    sidebarTitles: {
      contact: 'Contato',
      navigation: 'Navegacao',
      social: 'Redes',
    },
    navigation: {
      about: 'Sobre',
      experience: 'Experiencias',
      skills: 'Competencias',
      education: 'Formacao',
      technologies: 'Tecnologias',
      contact: 'Contato',
    },
    navigationAriaLabel: 'Secoes do curriculo',
    cta: 'VER CONTATO',
    copyrightTitle: 'Copyright 2024 Danilo Roberto dos Santos.',
    copyrightSubtitle: 'Todos os direitos reservados.',
    introTitle: 'Sobre',
    introParagraphs: [
      'Analista de Sistemas com mais de 8 anos de experiencia em desenvolvimento backend, automacoes e solucoes corporativas, com atuacao em projetos de alta criticidade e foco em performance, escalabilidade e integracao entre sistemas. Experiencia solida em C#, .NET, SQL, APIs RESTful, mensageria com RabbitMQ, Redis, Entity Framework e praticas de DevOps.',
      'Perfil analitico, focado em eficiencia e qualidade tecnica.',
    ],
    experienceTitle: 'Experiencias Profissionais',
    currentBadge: 'ATUAL',
    experienceItems: [
      {
        company: 'Spott',
        title: 'Desenvolvedor Backend .NET Senior',
        period: 'FEV 2026 - ATUAL',
        current: true,
        bullets: [
          'Desenvolvimento de APIs RESTful e servicos backend em .NET.',
          'Utilizacao de PostgreSQL como banco de dados principal.',
          'Implementacao de cache com Redis.',
          'Desenvolvimento com MVC e Entity Framework.',
          'Implementacao de mensageria com RabbitMQ.',
          'Containerizacao de aplicacoes com Docker.',
          'Suporte e colaboracao em projeto frontend com React.',
        ],
      },
      {
        company: 'MDS Group',
        title: 'Analista de Sistemas Senior',
        period: '2024 - 2026',
        current: false,
        bullets: [
          'Desenvolvimento backend em C# (.NET).',
          'Desenvolvimento de APIs RESTful e servicos backend em .NET.',
          'APIs RESTful e Azure Function Apps.',
          'Automacoes via console apps.',
          'Mensageria com RabbitMQ.',
          'Especialista em SQL.',
          'Experiencia com repositorios Git e pipelines no Azure DevOps.',
        ],
      },
      {
        company: "D'or Consultoria",
        title: 'Analista de Sistemas Senior',
        period: '2018 - 2024',
        current: false,
        bullets: [
          'Atuacao no desenvolvimento de servicos backend com C# e .NET.',
          'Criacao e manutencao de APIs RESTful e integracoes corporativas.',
          'Implementacao de rotinas com Azure Function Apps.',
          'Desenvolvimento de automacoes com console apps para processos internos.',
          'Uso de mensageria com RabbitMQ em fluxos de integracao.',
          'Forte atuacao com SQL, repositorios Git e pipelines no Azure DevOps.',
        ],
      },
      {
        company: 'Amplix',
        title: 'Analista e Desenvolvedor VBA',
        period: '2016 - 2018',
        current: false,
        bullets: [
          'Desenvolvimento de mais de 20 projetos em Excel e Access.',
          'Automacoes, relatorios dinamicos e dashboards.',
          'Implantacao de solucoes em clientes.',
        ],
      },
    ],
    skillsTitle: 'Competencias Tecnicas',
    skillGroups: [
      'Linguagens e Tecnologias: C#, SQL, VB6, React',
      'Backend: .NET, APIs RESTful, Entity Framework, RabbitMQ, Redis',
      'Banco de Dados: SQL Server, T-SQL, PostgreSQL',
      'Cloud e Integracao: Azure Functions, integracoes corporativas',
      'DevOps: Git, Azure DevOps, CI/CD',
      'Infraestrutura: Docker',
      'Office e Automacao: Excel Avancado, Access, VBA',
    ],
    educationTitle: 'Formacao Academica',
    educationItems: [
      {
        title: 'Graduacao em Analise e Desenvolvimento de Sistemas',
        period: 'FIAP - 2015 a 2017',
      },
      {
        title: 'Tecnico em Informatica',
        period: 'SENAC Santana - 2014 a 2015',
      },
      {
        title: 'Tecnico em Computacao Grafica',
        period: 'SENAC Santana - 2012 a 2013',
      },
    ],
    technologiesTitle: 'Tecnologias',
    technologies: [
      'C# / .NET',
      'SQL Server',
      'PostgreSQL',
      'Azure Functions',
      'RabbitMQ',
      'Docker',
      'Entity Framework',
      'Azure DevOps',
      'React',
      'VBA',
    ],
    contactTitle: 'Contato',
    contactLabels: {
      name: 'Nome',
      phone: 'Telefone',
      email: 'E-mail',
      address: 'Endereco',
    },
    contact: {
      phone: '(11) 94290-6907',
      email: 'danilo.rsantos2304@outlook.com',
      addressLines: ['Rua Plinio Colas, 280, 42-C', 'Sao Paulo - SP - CEP 02435-030'],
      addressFull: 'Rua Plinio Colas, 280, 42-C - Sao Paulo - SP - CEP 02435-030',
    },
  },
  en: {
    imageAlt: 'Profile photo of Danilo Roberto dos Santos',
    languageLabel: 'Language',
    languageAriaLabel: 'Select resume language',
    name: 'DANILO ROBERTO DOS SANTOS',
    role: 'SENIOR SYSTEMS ANALYST',
    subRole: '.NET Backend Developer',
    sidebarTitles: {
      contact: 'Contact',
      navigation: 'Navigation',
      social: 'Links',
    },
    navigation: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      technologies: 'Technologies',
      contact: 'Contact',
    },
    navigationAriaLabel: 'Resume sections',
    cta: 'VIEW CONTACT',
    copyrightTitle: 'Copyright 2024 Danilo Roberto dos Santos.',
    copyrightSubtitle: 'All rights reserved.',
    introTitle: 'About',
    introParagraphs: [
      'Systems Analyst with more than 8 years of experience in backend development, automation, and enterprise solutions, working on high-criticality projects with a strong focus on performance, scalability, and system integration. Solid background in C#, .NET, SQL, RESTful APIs, RabbitMQ messaging, Redis, Entity Framework, and DevOps practices.',
      'Analytical profile focused on efficiency and technical quality.',
    ],
    experienceTitle: 'Professional Experience',
    currentBadge: 'CURRENT',
    experienceItems: [
      {
        company: 'Spott',
        title: 'Senior .NET Backend Developer',
        period: 'FEB 2026 - PRESENT',
        current: true,
        bullets: [
          'Development of RESTful APIs and backend services in .NET.',
          'Use of PostgreSQL as the main database.',
          'Cache implementation with Redis.',
          'Development with MVC and Entity Framework.',
          'Messaging implementation with RabbitMQ.',
          'Application containerization with Docker.',
          'Support and collaboration on a React frontend project.',
        ],
      },
      {
        company: 'MDS Group',
        title: 'Senior Systems Analyst',
        period: '2024 - 2026',
        current: false,
        bullets: [
          'Backend development in C# (.NET).',
          'Development of RESTful APIs and backend services in .NET.',
          'RESTful APIs and Azure Function Apps.',
          'Automation through console applications.',
          'Messaging with RabbitMQ.',
          'SQL specialist.',
          'Experience with Git repositories and Azure DevOps pipelines.',
        ],
      },
      {
        company: "D'or Consultoria",
        title: 'Senior Systems Analyst',
        period: '2018 - 2024',
        current: false,
        bullets: [
          'Worked on backend service development using C# and .NET.',
          'Created and maintained RESTful APIs and enterprise integrations.',
          'Implemented routines with Azure Function Apps.',
          'Built automation with console applications for internal processes.',
          'Used RabbitMQ messaging in integration flows.',
          'Strong work with SQL, Git repositories, and Azure DevOps pipelines.',
        ],
      },
      {
        company: 'Amplix',
        title: 'VBA Analyst and Developer',
        period: '2016 - 2018',
        current: false,
        bullets: [
          'Delivered more than 20 projects in Excel and Access.',
          'Built automation, dynamic reports, and dashboards.',
          'Implemented solutions for clients.',
        ],
      },
    ],
    skillsTitle: 'Technical Skills',
    skillGroups: [
      'Languages and Technologies: C#, SQL, VB6, React',
      'Backend: .NET, RESTful APIs, Entity Framework, RabbitMQ, Redis',
      'Databases: SQL Server, T-SQL, PostgreSQL',
      'Cloud and Integration: Azure Functions, enterprise integrations',
      'DevOps: Git, Azure DevOps, CI/CD',
      'Infrastructure: Docker',
      'Office and Automation: Advanced Excel, Access, VBA',
    ],
    educationTitle: 'Education',
    educationItems: [
      {
        title: "Bachelor's Degree in Systems Analysis and Development",
        period: 'FIAP - 2015 to 2017',
      },
      {
        title: 'Technical Degree in Information Technology',
        period: 'SENAC Santana - 2014 to 2015',
      },
      {
        title: 'Technical Degree in Computer Graphics',
        period: 'SENAC Santana - 2012 to 2013',
      },
    ],
    technologiesTitle: 'Technologies',
    technologies: [
      'C# / .NET',
      'SQL Server',
      'PostgreSQL',
      'Azure Functions',
      'RabbitMQ',
      'Docker',
      'Entity Framework',
      'Azure DevOps',
      'React',
      'VBA',
    ],
    contactTitle: 'Contact',
    contactLabels: {
      name: 'Name',
      phone: 'Phone',
      email: 'E-mail',
      address: 'Address',
    },
    contact: {
      phone: '(11) 94290-6907',
      email: 'danilo.rsantos2304@outlook.com',
      addressLines: ['Rua Plinio Colas, 280, 42-C', 'Sao Paulo - SP - ZIP 02435-030'],
      addressFull: 'Rua Plinio Colas, 280, 42-C - Sao Paulo - SP - ZIP 02435-030',
    },
  },
} as const

type SectionId = (typeof navigationItems)[number]['id']
type Language = keyof typeof resumeContent

const languageOptions: Array<{ id: Language; label: string }> = [
  { id: 'pt', label: 'PT' },
  { id: 'en', label: 'EN' },
]

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'pt'
  }

  const savedLanguage = window.localStorage.getItem('resume-language')

  if (savedLanguage === 'pt' || savedLanguage === 'en') {
    return savedLanguage
  }

  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'pt'
}

function getInitialSection(): SectionId {
  if (typeof window === 'undefined') {
    return navigationItems[0].id
  }

  const hash = window.location.hash.replace('#', '')
  const matchedSection = navigationItems.find(({ id }) => id === hash)

  return matchedSection?.id ?? navigationItems[0].id
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const [activeSection, setActiveSection] = useState<SectionId>(getInitialSection)
  const content = resumeContent[language]

  useEffect(() => {
    window.localStorage.setItem('resume-language', language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id as SectionId)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.2, 0.45, 0.7],
      },
    )

    navigationItems.forEach(({ id }) => {
      const section = document.getElementById(id)

      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (sectionId: SectionId) => {
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    setActiveSection(sectionId)
    window.history.replaceState(null, '', `#${sectionId}`)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="resume-shell">
      <aside className="sidebar">
        <div className="sidebar-panel">
          <div className="profile-wrap">
            <div className="profile-ring" />
            <img src={profileImage} alt={content.imageAlt} className="profile-image" />
          </div>

          <div className="identity-block">
            <h1 className="name">
              DANILO ROBERTO
              <br />
              DOS SANTOS
            </h1>
            <p className="role">{content.role}</p>
            <p className="sub-role">{content.subRole}</p>
          </div>

          <section className="sidebar-section">
            <div className="language-switch">
              <span className="language-label">{content.languageLabel}</span>
              <div className="language-toggle" role="group" aria-label={content.languageAriaLabel}>
                {languageOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`language-option ${language === option.id ? 'is-active' : ''}`}
                    onClick={() => setLanguage(option.id)}
                    aria-pressed={language === option.id}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="sidebar-section">
            <h2 className="sidebar-title">{content.sidebarTitles.contact}</h2>
            <div className="contact-list">
              <div className="contact-item">
                <FaLocationDot />
                <span>
                  {content.contact.addressLines[0]}
                  <br />
                  {content.contact.addressLines[1]}
                </span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>{content.contact.phone}</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>{content.contact.email}</span>
              </div>
            </div>
          </section>

          <section className="sidebar-section">
            <h2 className="sidebar-title">{content.sidebarTitles.navigation}</h2>
            <nav className="nav-list" aria-label={content.navigationAriaLabel}>
              {navigationItems.map(({ id, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  className={`nav-link ${activeSection === id ? 'is-active' : ''}`}
                  onClick={() => handleNavigate(id)}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  <span>
                    <Icon />
                    {content.navigation[id]}
                  </span>
                </button>
              ))}
            </nav>
          </section>

          <section className="sidebar-section">
            <h2 className="sidebar-title">{content.sidebarTitles.social}</h2>
            <div className="social-list">
              <a
                className="social-link"
                href="https://github.com/DaniloSantos4Dev"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-label">
                  <FaGithub />
                  GitHub
                </span>
                <FaArrowUpRightFromSquare className="social-arrow" />
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/danilo-santos-878181ba/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-label">
                  <FaLinkedinIn />
                  LinkedIn
                </span>
                <FaArrowUpRightFromSquare className="social-arrow" />
              </a>
            </div>
          </section>

          <button type="button" className="download-button" onClick={() => handleNavigate('contact')}>
            <FaArrowDown />
            {content.cta}
          </button>

          <p className="copyright">
            {content.copyrightTitle}
            <br />
            {content.copyrightSubtitle}
          </p>
        </div>
      </aside>

      <main className="content-column">
        <section className="card section-card intro-card" id="about">
          <div className="card-heading">
            <span className="card-icon">
              <FaUser />
            </span>
            <h2>{content.introTitle}</h2>
          </div>
          {content.introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="card section-card" id="experience">
          <div className="card-heading">
            <span className="card-icon">
              <FaBriefcase />
            </span>
            <h2>{content.experienceTitle}</h2>
          </div>

          <div className="timeline">
            {content.experienceItems.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-marker" />
                <div className="timeline-body">
                  <div className="timeline-header">
                    <h3>
                      {item.company} - {item.title}
                    </h3>
                    {item.current && <span className="badge">{content.currentBadge}</span>}
                  </div>
                  <p className="period">{item.period}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="bottom-grid">
          <section className="card section-card" id="skills">
            <div className="card-heading">
              <span className="card-icon">
                <FaFolderTree />
              </span>
              <h2>{content.skillsTitle}</h2>
            </div>
            <ul className="detail-list">
              {content.skillGroups.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="card section-card" id="education">
            <div className="card-heading">
              <span className="card-icon">
                <FaGraduationCap />
              </span>
              <h2>{content.educationTitle}</h2>
            </div>
            <div className="education-list">
              {content.educationItems.map((item) => (
                <div className="education-item" key={`${item.title}-${item.period}`}>
                  <h3>{item.title}</h3>
                  <p>{item.period}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="card section-card technologies-card" id="technologies">
          <div className="card-heading">
            <span className="card-icon">
              <FaLaptopCode />
            </span>
            <h2>{content.technologiesTitle}</h2>
          </div>
          <div className="technology-tags">
            {content.technologies.map((technology) => (
              <span key={technology} className="technology-tag">
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="card section-card contact-card" id="contact">
          <div className="card-heading">
            <span className="card-icon">
              <FaEnvelope />
            </span>
            <h2>{content.contactTitle}</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-detail">
              <span className="contact-detail-label">{content.contactLabels.name}</span>
              <strong>Danilo Roberto dos Santos</strong>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">{content.contactLabels.phone}</span>
              <strong>{content.contact.phone}</strong>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">{content.contactLabels.email}</span>
              <strong>{content.contact.email}</strong>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">{content.contactLabels.address}</span>
              <strong>{content.contact.addressFull}</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
