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
  { id: 'sobre', label: 'Sobre', icon: FaHouse },
  { id: 'experiencias', label: 'Experiencias', icon: FaBriefcase },
  { id: 'competencias', label: 'Competencias', icon: FaCode },
  { id: 'formacao', label: 'Formacao', icon: FaGraduationCap },
  { id: 'tecnologias', label: 'Tecnologias', icon: FaLaptopCode },
  { id: 'contato', label: 'Contato', icon: FaEnvelope },
]

const experienceItems = [
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
    bullets: [
      'Desenvolvimento de mais de 20 projetos em Excel e Access.',
      'Automacoes, relatorios dinamicos e dashboards.',
      'Implantacao de solucoes em clientes.',
    ],
  },
]

const skillGroups = [
  'Linguagens e Tecnologias: C#, SQL, VB6, React',
  'Backend: .NET, APIs RESTful, Entity Framework, RabbitMQ, Redis',
  'Banco de Dados: SQL Server, T-SQL, PostgreSQL',
  'Cloud e Integracao: Azure Functions, integracoes corporativas',
  'DevOps: Git, Azure DevOps, CI/CD',
  'Infraestrutura: Docker',
  'Office e Automacao: Excel Avancado, Access, VBA',
]

const technologies = [
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
]

function App() {
  const [activeSection, setActiveSection] = useState(navigationItems[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id)
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

  const handleNavigate = (sectionId: string) => {
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
            <img
              src={profileImage}
              alt="Foto de perfil de Danilo Roberto dos Santos"
              className="profile-image"
            />
          </div>

          <div className="identity-block">
            <h1 className="name">
              DANILO ROBERTO
              <br />
              DOS SANTOS
            </h1>
            <p className="role">ANALISTA DE SISTEMAS SENIOR</p>
            <p className="sub-role">Desenvolvedor Backend .NET</p>
          </div>

          <section className="sidebar-section">
            <h2 className="sidebar-title">Contato</h2>
            <div className="contact-list">
              <div className="contact-item">
                <FaLocationDot />
                <span>
                  Rua Pivio Cola, 280, 42-C
                  <br />
                  Sao Paulo - SP - CEP 02435-030
                </span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>(11) 94290-6907</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>danilo.rsantos2304@outlook.com</span>
              </div>
            </div>
          </section>

          <section className="sidebar-section">
            <h2 className="sidebar-title">Navegacao</h2>
            <nav className="nav-list" aria-label="Secoes do curriculo">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  className={`nav-link ${activeSection === id ? 'is-active' : ''}`}
                  onClick={() => handleNavigate(id)}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  <span>
                    <Icon />
                    {label}
                  </span>
                </button>
              ))}
            </nav>
          </section>

          <section className="sidebar-section">
            <h2 className="sidebar-title">Redes</h2>
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

          <button
            type="button"
            className="download-button"
            onClick={() => handleNavigate('contato')}
          >
            <FaArrowDown />
            VER CONTATO
          </button>

          <p className="copyright">
            © 2024 Danilo Roberto dos Santos.
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </aside>

      <main className="content-column">
        <section className="card section-card intro-card" id="sobre">
          <div className="card-heading">
            <span className="card-icon">
              <FaUser />
            </span>
            <h2>Sobre</h2>
          </div>
          <p>
            Analista de Sistemas com mais de 8 anos de experiencia em
            desenvolvimento backend, automacoes e solucoes corporativas, com
            atuacao em projetos de alta criticidade e foco em performance,
            escalabilidade e integracao entre sistemas. Experiencia solida em
            C#, .NET, SQL, APIs RESTful, mensageria com RabbitMQ, Redis,
            Entity Framework e praticas de DevOps.
          </p>
          <p>Perfil analitico, focado em eficiencia e qualidade tecnica.</p>
        </section>

        <section className="card section-card" id="experiencias">
          <div className="card-heading">
            <span className="card-icon">
              <FaBriefcase />
            </span>
            <h2>Experiencias Profissionais</h2>
          </div>

          <div className="timeline">
            {experienceItems.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-marker" />
                <div className="timeline-body">
                  <div className="timeline-header">
                    <h3>
                      {item.company} - {item.title}
                    </h3>
                    {item.current && <span className="badge">ATUAL</span>}
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
          <section className="card section-card" id="competencias">
            <div className="card-heading">
              <span className="card-icon">
                <FaFolderTree />
              </span>
              <h2>Competencias Tecnicas</h2>
            </div>
            <ul className="detail-list">
              {skillGroups.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="card section-card" id="formacao">
            <div className="card-heading">
              <span className="card-icon">
                <FaGraduationCap />
              </span>
              <h2>Formacao Academica</h2>
            </div>
            <div className="education-list">
              <div className="education-item">
                <h3>Graduacao em Analise e Desenvolvimento de Sistemas</h3>
                <p>FIAP - 2015 a 2017</p>
              </div>
              <div className="education-item">
                <h3>Tecnico em Informatica</h3>
                <p>SENAC Santana - 2014 a 2015</p>
              </div>
              <div className="education-item">
                <h3>Tecnico em Computacao Grafica</h3>
                <p>SENAC Santana - 2012 a 2013</p>
              </div>
            </div>
          </section>
        </div>

        <section className="card section-card technologies-card" id="tecnologias">
          <div className="card-heading">
            <span className="card-icon">
              <FaLaptopCode />
            </span>
            <h2>Tecnologias</h2>
          </div>
          <div className="technology-tags">
            {technologies.map((technology) => (
              <span key={technology} className="technology-tag">
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="card section-card contact-card" id="contato">
          <div className="card-heading">
            <span className="card-icon">
              <FaEnvelope />
            </span>
            <h2>Contato</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-detail">
              <span className="contact-detail-label">Nome</span>
              <strong>Danilo Roberto dos Santos</strong>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">Telefone</span>
              <strong>(11) 94290-6907</strong>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">E-mail</span>
              <strong>danilo.rsantos2304@outlook.com</strong>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">Endereco</span>
              <strong>Rua Pivio Cola, 280, 42-C - Sao Paulo - SP - CEP 02435-030</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
