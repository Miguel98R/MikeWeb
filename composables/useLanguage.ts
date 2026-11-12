import { ref, computed, onMounted } from 'vue'
import profileEs from '~/data/profile.json'
import profileEn from '~/data/profile_en.json'

export type Locale = 'es' | 'en'

const currentLocale = ref<Locale>('es')

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      methodology: 'Metodología',
      collaborations: 'Clientes & Casos',
      stack: 'Tecnologías',
      skills: 'Skills',
      experience: 'Experiencia',
      projects: 'Proyectos',
      certificaciones: 'Certificaciones',
      ceo: 'Acerca del CEO',
      contact: 'Cotizar Proyecto'
    },
    companyHero: {
      tag: 'SOFTWARE ARCHITECTURE & AI STUDIO',
      badge: 'Soluciones Tecnológicas de Alto Rendimiento',
      title: 'Construimos Software Escalable, Agentes de IA y Arquitecturas Cloud',
      subtitle: 'Diseñamos y desarrollamos plataformas web, aplicaciones móviles y asistentes inteligentes de alto impacto para empresas e instituciones que exigen estabilidad, seguridad y código listo para producción.',
      ctaQuote: 'Cotizar Proyecto',
      ctaCases: 'Casos de Éxito',
      ctaCeo: 'Acerca del CEO',
      metrics: {
        exp: '+5 Años',
        expLabel: 'Experiencia en producción',
        projects: '+10',
        projectsLabel: 'Sistemas empresariales',
        uptime: '99.9%',
        uptimeLabel: 'Uptime & estabilidad cloud',
        clean: '100%',
        cleanLabel: 'Clean Code & SOLID'
      },
      terminal: {
        title: 'MikeRosasDev Enterprise Core v2.4',
        status: 'PRODUCTION_READY',
        layer1: 'System Architecture · NestJS / Node.js / Nuxt 3',
        layer2: 'AI Engine · LLMs / WhatsApp Cloud API / RAG',
        layer3: 'Cloud & DevOps · AWS ECS / Docker / CI-CD',
        layer4: 'High Availability Databases · PostgreSQL / Redis'
      }
    },
    methodology: {
      tag: 'WORKFLOW & METHODOLOGY',
      title: 'Cómo Trabajamos con Tu Empresa',
      subtitle: 'Un proceso estructurado, transparente y ágil diseñado para garantizar entregas en tiempo y con calidad de código corporativo.',
      steps: [
        {
          num: '01',
          title: 'Diagnóstico & System Design',
          desc: 'Analizamos requerimientos de negocio, diseñamos la arquitectura técnica óptima y definimos un alcance claro con presupuesto transparente.'
        },
        {
          num: '02',
          title: 'Desarrollo Ágil en Sprints',
          desc: 'Iteraciones quincenales, código tipado con TypeScript, Clean Architecture y demostraciones funcionales con comunicación directa.'
        },
        {
          num: '03',
          title: 'Pruebas de Carga & Seguridad',
          desc: 'Code reviews rigurosos, auditorías de seguridad, protección de datos sensibles y optimización de latencia en bases de datos.'
        },
        {
          num: '04',
          title: 'Despliegue Cloud & Soporte 24/7',
          desc: 'Automatización con pipelines CI/CD en AWS y Linux, observabilidad en tiempo real y acompañamiento continuo post-lanzamiento.'
        }
      ]
    },
    valueProps: {
      tag: 'ENTERPRISE ADVANTAGES',
      title: '¿Por Qué Elegir Nuestro Estudio?',
      subtitle: 'Ventajas técnicas y de negocio pensadas para fundadores, directores de tecnología y líderes corporativos.',
      items: [
        {
          icon: 'mdi:shield-check-outline',
          title: 'Sin Deuda Técnica',
          desc: 'Diseño modular con principios SOLID y Clean Code, garantizando que tu sistema soporte millones de transacciones sin requerir reescrituras costosas.'
        },
        {
          icon: 'mdi:robot-outline',
          title: 'IA Aplicada al Negocio',
          desc: 'No solo prototipos: integramos agentes autónomos de IA, automatización en WhatsApp y bases vectoriales RAG conectadas a tus datos empresariales.'
        },
        {
          icon: 'mdi:cloud-check-outline',
          title: 'Cloud & DevOps de Alto Nivel',
          desc: 'Infraestructura robusta en AWS con Docker y Kubernetes. Reducimos tus costos mensuales de cómputo asegurando alta disponibilidad.'
        },
        {
          icon: 'mdi:account-tie-outline',
          title: 'Liderazgo Técnico Directo',
          desc: 'Sin intermediarios comerciales ni burocracia: planificas y coordinas directamente con un Tech Lead y Software Architect con experiencia probada.'
        }
      ]
    },
    companyStack: {
      tag: 'ENTERPRISE TECH STACK',
      title: 'Tecnologías de Grado Corporativo',
      subtitle: 'Herramientas modernas, seguras y de alto rendimiento utilizadas por las industrias tecnológicas líderes en el mundo.',
      categories: [
        {
          name: 'Backend & APIs',
          desc: 'Servicios de alta concurrencia y microservicios escalables',
          items: ['Node.js', 'NestJS', 'TypeScript', 'REST APIs', 'Express.js', 'Redis Cache']
        },
        {
          name: 'Frontend & Mobile',
          desc: 'Interfaces veloces, accesibles y aplicaciones multiplataforma',
          items: ['Nuxt 3', 'Vue.js', 'React.js', 'Flutter (Mobile)', 'Tailwind CSS', 'Vite']
        },
        {
          name: 'Cloud & DevOps',
          desc: 'Despliegues automatizados, orquestación y monitoreo',
          items: ['AWS (ECS, EC2, S3)', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Coolify', 'Linux / Nginx']
        },
        {
          name: 'Inteligencia Artificial',
          desc: 'Asistentes inteligentes, automatización y modelos LLM',
          items: ['WhatsApp Cloud API', 'OpenAI GPT-4', 'Google Gemini', 'RAG / Vector DB', 'AI Agents']
        }
      ]
    },
    hero: {
      tag: 'Tech_Lead_Architect_v2.0',
      viewProjects: 'Ver Proyectos',
      downloadCv: 'Descargar CV',
      downloadCvEs: 'CV Español',
      downloadCvEn: 'CV English',
      status: 'PRODUCTION_READY',
      codeSnippetTitle: 'const skillSet = ['
    },
    services: {
      tag: 'SERVICES & SOLUTIONS',
      title: 'Servicios & Soluciones Empresariales',
      subtitle: 'Diseño, desarrollo y escalamiento de software corporativo orientado a producción, alto rendimiento y crecimiento del negocio.',
      productionReady: 'Listo para producción',
      quote: 'Cotizar Solución'
    },
    skills: {
      tag: 'TECH_STACK & EXPERTISE',
      title: 'Skills Técnicos del CEO',
      subtitle: 'Stack tecnológico probado en producción, enfocado en robustez, escalabilidad, buenas prácticas y arquitectura de software.',
      production: 'Producción',
      groupTitles: {
        backend: 'Backend',
        frontend: 'Frontend',
        ai_technologies: 'IA & ChatBots',
        devops_cloud: 'DevOps & Cloud',
        databases: 'Bases de Datos',
        mobile: 'Mobile',
        tools: 'Herramientas',
        methodologies: 'Metodologías'
      }
    },
    experience: {
      tag: 'CAREER & TRACK_RECORD',
      title: 'Trayectoria & Experiencia Profesional',
      subtitle: 'Línea del tiempo y liderazgo técnico en diseño de arquitecturas escalables y desarrollo de sistemas en producción.',
      present: 'Actualidad',
      productionEnv: 'Entorno Productivo',
      stage: 'Etapa'
    },
    projects: {
      tag: 'OPEN_SOURCE & REPOSITORIES',
      title: 'Repositorios & Proyectos Open Source',
      subtitle: 'Herramientas públicas, librerías y código fuente desarrollado por el CEO en GitHub.',
      mainGithub: 'GitHub Principal',
      devGithub: 'GitHub Dev',
      public: 'Público',
      private: 'Privado',
      viewOnGithub: 'Ver en GitHub'
    },
    certifications: {
      tag: 'CREDENTIALS & ACHIEVEMENTS',
      title: 'Certificaciones & Logros Oficiales',
      subtitle: 'Credenciales y certificaciones oficiales que avalan conocimientos en arquitectura, desarrollo, IA y mejores prácticas.',
      viewCredential: 'Ver credencial'
    },
    collaborations: {
      tag: 'PORTFOLIO_CLIENTS & PARTNERS',
      title: 'Clientes & Casos de Éxito',
      subtitle: 'Empresas, organizaciones e instituciones que han confiado en nuestro estudio para desarrollar y desplegar software en producción.',
      hint: 'Haz clic en un cliente para ver detalles',
      modalServicesTitle: 'Servicios & Soluciones Implementadas',
      modalTechTitle: 'Tecnologías Utilizadas',
      startSimilarProject: 'Iniciar Proyecto Similar',
      close: 'Cerrar'
    },
    ceoPage: {
      badge: 'LEADERSHIP & ENGINEERING',
      title: 'Acerca del CEO & Fundador',
      subtitle: 'José Miguel Rosas Jiménez · Tech Lead, Software Architect y Fundador de MikeRosasDev Studio.',
      backHome: 'Ver Servicios & Empresa',
      quote: '«La ingeniería de software de calidad no es solo escribir código; es diseñar sistemas duraderos, seguros y preparados para resolver problemas reales del negocio.»',
      navExperience: 'Trayectoria',
      navSkills: 'Habilidades',
      navCerts: 'Certificaciones',
      navProjects: 'Open Source',
      downloadCv: 'Descargar CV'
    },
    footer: {
      title: '¿Listo para construir o escalar tu próximo sistema?',
      subtitle: 'Arquitectura de software, agentes de IA y desarrollo web/móvil listo para producción.',
      ctaButton: 'Iniciar Conversación',
      privacy: 'Aviso de Privacidad',
      rights: 'Todos los derechos reservados.'
    },
    contactModal: {
      tag: 'START_A_PROJECT',
      title: '¿Hablamos de tu Proyecto?',
      subtitle: 'Elige tu canal preferido para iniciar la conversación. Responderemos a la brevedad para evaluar requerimientos, tiempos y arquitectura.',
      whatsappTitle: 'WhatsApp Directo',
      whatsappSub: 'Respuesta inmediata · Mensaje directo con el equipo',
      emailTitle: 'Correo Electrónico',
      emailSub: 'Para propuestas formales y envío de requerimientos',
      copy: 'Copiar',
      copied: '¡Copiado!',
      openMailClient: 'Abrir en cliente de correo'
    },
    cv: {
      filenameEs: 'CV_Jose_Miguel_Rosas_Jimenez.pdf',
      filenameEn: 'CV_Jose_Miguel_Rosas_Jimenez_EN.pdf'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      methodology: 'Process',
      collaborations: 'Clients & Work',
      stack: 'Tech Stack',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      certificaciones: 'Certifications',
      ceo: 'About the CEO',
      contact: 'Get a Quote'
    },
    companyHero: {
      tag: 'SOFTWARE ARCHITECTURE & AI STUDIO',
      badge: 'High-Performance Enterprise Software Engineering',
      title: 'Engineering Scalable Software, AI Agents & Cloud Architectures',
      subtitle: 'We design and build production-ready web platforms, mobile solutions, and intelligent AI agents for startups and enterprises demanding stability, security, and clean code.',
      ctaQuote: 'Get a Quote',
      ctaCases: 'Case Studies',
      ctaCeo: 'About the CEO',
      metrics: {
        exp: '+5 Years',
        expLabel: 'In Production Experience',
        projects: '+10',
        projectsLabel: 'Enterprise Systems Built',
        uptime: '99.9%',
        uptimeLabel: 'Cloud Uptime & Reliability',
        clean: '100%',
        cleanLabel: 'Clean Code & SOLID'
      },
      terminal: {
        title: 'MikeRosasDev Enterprise Core v2.4',
        status: 'PRODUCTION_READY',
        layer1: 'System Architecture · NestJS / Node.js / Nuxt 3',
        layer2: 'AI Engine · LLMs / WhatsApp Cloud API / RAG',
        layer3: 'Cloud & DevOps · AWS ECS / Docker / CI-CD',
        layer4: 'High Availability Databases · PostgreSQL / Redis'
      }
    },
    methodology: {
      tag: 'WORKFLOW & METHODOLOGY',
      title: 'How We Work with Your Company',
      subtitle: 'A structured, agile, and transparent workflow designed to guarantee on-time delivery with enterprise code standards.',
      steps: [
        {
          num: '01',
          title: 'Diagnosis & System Design',
          desc: 'We analyze business requirements, design the optimal system architecture, and provide a clear, transparent scope and budget.'
        },
        {
          num: '02',
          title: 'Agile Sprint Engineering',
          desc: 'Bi-weekly iterations, type-safe TypeScript code, Clean Architecture principles, and live functional demos with transparent feedback.'
        },
        {
          num: '03',
          title: 'Stress Testing & Security Audits',
          desc: 'Rigorous code reviews, vulnerability prevention, sensitive data protection, and database latency optimization.'
        },
        {
          num: '04',
          title: 'Cloud Deployment & 24/7 Monitoring',
          desc: 'Automated CI/CD pipelines on AWS and Linux, real-time observability, and dedicated post-launch support and maintenance.'
        }
      ]
    },
    valueProps: {
      tag: 'ENTERPRISE ADVANTAGES',
      title: 'Why Work With Our Studio?',
      subtitle: 'Strategic engineering and business advantages for founders, CTOs, and corporate leaders.',
      items: [
        {
          icon: 'mdi:shield-check-outline',
          title: 'Zero Technical Debt',
          desc: 'Modular design following SOLID and Clean Architecture principles, ensuring your software scales to millions of requests without costly rewrites.'
        },
        {
          icon: 'mdi:robot-outline',
          title: 'Business-Grade Applied AI',
          desc: 'Beyond prototypes: we deploy autonomous AI agents, WhatsApp Cloud API integrations, and RAG vector databases linked to your enterprise data.'
        },
        {
          icon: 'mdi:cloud-check-outline',
          title: 'Enterprise Cloud & DevOps',
          desc: 'Resilient cloud infrastructures on AWS with Docker and Kubernetes. We optimize monthly compute expenses while ensuring 99.9% availability.'
        },
        {
          icon: 'mdi:account-tie-outline',
          title: 'Direct Technical Leadership',
          desc: 'No sales intermediaries or red tape: you work and plan directly with a seasoned Tech Lead and Software Architect with proven results.'
        }
      ]
    },
    companyStack: {
      tag: 'ENTERPRISE TECH STACK',
      title: 'Production-Grade Tech Stack',
      subtitle: 'Modern, secure, and battle-tested technologies trusted by global industry leaders.',
      categories: [
        {
          name: 'Backend & APIs',
          desc: 'High-concurrency services and scalable microservices',
          items: ['Node.js', 'NestJS', 'TypeScript', 'REST APIs', 'Express.js', 'Redis Cache']
        },
        {
          name: 'Frontend & Mobile',
          desc: 'Fast, accessible user interfaces and cross-platform mobile apps',
          items: ['Nuxt 3', 'Vue.js', 'React.js', 'Flutter (Mobile)', 'Tailwind CSS', 'Vite']
        },
        {
          name: 'Cloud & DevOps',
          desc: 'Automated deployments, container orchestration, and monitoring',
          items: ['AWS (ECS, EC2, S3)', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Coolify', 'Linux / Nginx']
        },
        {
          name: 'Artificial Intelligence',
          desc: 'Intelligent assistants, workflow automation, and LLM integrations',
          items: ['WhatsApp Cloud API', 'OpenAI GPT-4', 'Google Gemini', 'RAG / Vector DB', 'AI Agents']
        }
      ]
    },
    hero: {
      tag: 'Tech_Lead_Architect_v2.0',
      viewProjects: 'View Projects',
      downloadCv: 'Download Resume',
      downloadCvEs: 'Resume (Spanish)',
      downloadCvEn: 'Resume (English)',
      status: 'PRODUCTION_READY',
      codeSnippetTitle: 'const skillSet = ['
    },
    services: {
      tag: 'SERVICES & SOLUTIONS',
      title: 'Enterprise Services & Solutions',
      subtitle: 'Design, engineering, and scaling of software solutions built for production, high performance, and business growth.',
      productionReady: 'Production Ready',
      quote: 'Get Quote'
    },
    skills: {
      tag: 'TECH_STACK & EXPERTISE',
      title: "CEO's Technical Skills",
      subtitle: 'Production-proven tech stack focused on robustness, scalability, software design patterns, and clean architecture.',
      production: 'Production',
      groupTitles: {
        backend: 'Backend',
        frontend: 'Frontend',
        ai_technologies: 'AI & Chatbots',
        devops_cloud: 'DevOps & Cloud',
        databases: 'Databases',
        mobile: 'Mobile',
        tools: 'Tools & Utilities',
        methodologies: 'Methodologies'
      }
    },
    experience: {
      tag: 'CAREER & TRACK_RECORD',
      title: 'Career & Professional Experience',
      subtitle: 'Timeline and technical leadership in scalable software architecture and production-grade systems.',
      present: 'Present',
      productionEnv: 'Production Environment',
      stage: 'Phase'
    },
    projects: {
      tag: 'OPEN_SOURCE & REPOSITORIES',
      title: 'Open Source Repositories',
      subtitle: 'Public developer tools, libraries, and open-source contributions created by the CEO on GitHub.',
      mainGithub: 'Main GitHub',
      devGithub: 'Dev GitHub',
      public: 'Public',
      private: 'Private',
      viewOnGithub: 'View on GitHub'
    },
    certifications: {
      tag: 'CREDENTIALS & ACHIEVEMENTS',
      title: 'Certifications & Official Credentials',
      subtitle: 'Official certifications verifying expertise in cloud architecture, software design, AI engineering, and best practices.',
      viewCredential: 'View credential'
    },
    collaborations: {
      tag: 'PORTFOLIO_CLIENTS & PARTNERS',
      title: 'Clients & Case Studies',
      subtitle: 'Companies, organizations, and institutions that have trusted our studio to build and deploy production software.',
      hint: 'Click a client to view project details',
      modalServicesTitle: 'Implemented Services & Solutions',
      modalTechTitle: 'Technologies Used',
      startSimilarProject: 'Start a Similar Project',
      close: 'Close'
    },
    ceoPage: {
      badge: 'LEADERSHIP & ENGINEERING',
      title: 'About the CEO & Founder',
      subtitle: 'José Miguel Rosas Jiménez · Tech Lead, Software Architect, and Founder of MikeRosasDev Studio.',
      backHome: 'View Services & Company',
      quote: '«Quality software engineering is not just about writing code; it is about architecting resilient, secure systems designed to solve real business challenges.»',
      navExperience: 'Experience',
      navSkills: 'Skills',
      navCerts: 'Certifications',
      navProjects: 'Open Source',
      downloadCv: 'Download Resume'
    },
    footer: {
      title: 'Ready to build or scale your next system?',
      subtitle: 'Software architecture, AI agents, and web/mobile engineering ready for production.',
      ctaButton: 'Start a Conversation',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.'
    },
    contactModal: {
      tag: 'START_A_PROJECT',
      title: "Let's Talk About Your Project",
      subtitle: 'Choose your preferred communication channel. We will respond promptly to review requirements, timelines, and architecture.',
      whatsappTitle: 'Direct WhatsApp',
      whatsappSub: 'Immediate response · Direct chat with engineering',
      emailTitle: 'Email Address',
      emailSub: 'For formal proposals and project briefs',
      copy: 'Copy',
      copied: 'Copied!',
      openMailClient: 'Open email client'
    },
    cv: {
      filenameEs: 'CV_Jose_Miguel_Rosas_Jimenez.pdf',
      filenameEn: 'CV_Jose_Miguel_Rosas_Jimenez_EN.pdf'
    }
  }
}

export const useLanguage = () => {
  const profile = computed(() => (currentLocale.value === 'en' ? profileEn : profileEs))
  const t = computed(() => translations[currentLocale.value])

  const setLanguage = (lang: Locale) => {
    currentLocale.value = lang
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('mikeweb_lang', lang)
      } catch (e) {
        // ignore
      }
    }
  }

  const toggleLanguage = () => {
    setLanguage(currentLocale.value === 'es' ? 'en' : 'es')
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mikeweb_lang') as Locale
      if (saved === 'es' || saved === 'en') {
        currentLocale.value = saved
      }
    }
  })

  return {
    currentLocale,
    profile,
    t,
    setLanguage,
    toggleLanguage
  }
}
