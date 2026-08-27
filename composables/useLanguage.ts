import { ref, computed, onMounted } from 'vue'
import profileEs from '~/data/profile.json'
import profileEn from '~/data/profile_en.json'

export type Locale = 'es' | 'en'

const currentLocale = ref<Locale>('es')

const translations = {
  es: {
    nav: {
      services: 'Servicios',
      skills: 'Skills',
      experience: 'Experiencia',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      collaborations: 'Colaboraciones',
      contact: 'Contáctame'
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
      title: 'Servicios Profesionales',
      subtitle: 'Diseño, desarrollo y escalamiento de soluciones tecnológicas orientadas a producción, alto rendimiento y crecimiento del negocio.',
      productionReady: 'Listo para producción',
      quote: 'Cotizar'
    },
    skills: {
      tag: 'TECH_STACK & EXPERTISE',
      title: 'Skills Técnicos',
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
      title: 'Experiencia Profesional',
      subtitle: 'Línea del tiempo y trayectoria enfocada en liderazgo técnico, arquitectura escalable y desarrollo de sistemas en producción.',
      present: 'Actualidad',
      productionEnv: 'Entorno Productivo',
      stage: 'Etapa'
    },
    projects: {
      tag: 'OPEN_SOURCE & REPOSITORIES',
      title: 'Algunos Repositorios',
      subtitle: 'Proyectos de código abierto, herramientas y librerías públicas disponibles en GitHub.',
      mainGithub: 'GitHub Principal',
      devGithub: 'GitHub Dev',
      public: 'Público',
      private: 'Privado',
      viewOnGithub: 'Ver en GitHub'
    },
    certifications: {
      tag: 'CREDENTIALS & ACHIEVEMENTS',
      title: 'Certificaciones & Logros',
      subtitle: 'Credenciales y certificaciones oficiales que avalan conocimientos en arquitectura, desarrollo, IA y mejores prácticas.',
      viewCredential: 'Ver credencial'
    },
    collaborations: {
      tag: 'PORTFOLIO_CLIENTS & PARTNERS',
      title: 'Colaboraciones & Clientes',
      subtitle: 'Empresas, organizaciones e instituciones con las que he colaborado desarrollando software y soluciones en producción.',
      hint: 'Haz clic en un logo para ver detalles',
      modalServicesTitle: 'Servicios & Soluciones Implementadas',
      modalTechTitle: 'Tecnologías Utilizadas',
      startSimilarProject: 'Iniciar Proyecto Similar',
      close: 'Cerrar'
    },
    footer: {
      title: '¿Hablamos de tu próximo proyecto?',
      subtitle: 'Arquitectura, desarrollo y escalamiento de software listo para producción.',
      privacy: 'Aviso de Privacidad',
      rights: 'Todos los derechos reservados.'
    },
    contactModal: {
      tag: 'START_A_PROJECT',
      title: '¿Hablamos de tu Proyecto?',
      subtitle: 'Elige tu canal preferido para iniciar la conversación. Te responderé a la brevedad para evaluar requerimientos y arquitectura.',
      whatsappTitle: 'WhatsApp Directo',
      whatsappSub: 'Respuesta inmediata · Mensaje directo',
      emailTitle: 'Correo Electrónico',
      emailSub: 'Para propuestas formales y requerimientos',
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
      services: 'Services',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      collaborations: 'Collaborations',
      contact: 'Contact Me'
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
      title: 'Professional Services',
      subtitle: 'Design, engineering, and scaling of software solutions built for production, high performance, and business growth.',
      productionReady: 'Production Ready',
      quote: 'Get Quote'
    },
    skills: {
      tag: 'TECH_STACK & EXPERTISE',
      title: 'Technical Skills',
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
      title: 'Professional Experience',
      subtitle: 'Career timeline and track record in technical leadership, scalable software architecture, and production systems.',
      present: 'Present',
      productionEnv: 'Production Environment',
      stage: 'Phase'
    },
    projects: {
      tag: 'OPEN_SOURCE & REPOSITORIES',
      title: 'Featured Repositories',
      subtitle: 'Open-source software, developer tools, and public codebases available on GitHub.',
      mainGithub: 'Main GitHub',
      devGithub: 'Dev GitHub',
      public: 'Public',
      private: 'Private',
      viewOnGithub: 'View on GitHub'
    },
    certifications: {
      tag: 'CREDENTIALS & ACHIEVEMENTS',
      title: 'Certifications & Credentials',
      subtitle: 'Official certifications verifying expertise in cloud architecture, software design, AI engineering, and best practices.',
      viewCredential: 'View credential'
    },
    collaborations: {
      tag: 'PORTFOLIO_CLIENTS & PARTNERS',
      title: 'Collaborations & Clients',
      subtitle: 'Companies, organizations, and institutions I have collaborated with to deploy production software.',
      hint: 'Click a logo to view project details',
      modalServicesTitle: 'Implemented Services & Solutions',
      modalTechTitle: 'Technologies Used',
      startSimilarProject: 'Start a Similar Project',
      close: 'Close'
    },
    footer: {
      title: "Let's talk about your next project",
      subtitle: 'Architecture, software engineering, and systems scaling ready for production.',
      privacy: 'Privacy Policy',
      rights: 'All rights reserved.'
    },
    contactModal: {
      tag: 'START_A_PROJECT',
      title: "Let's Talk About Your Project",
      subtitle: 'Choose your preferred communication channel. I will respond promptly to review requirements and architecture.',
      whatsappTitle: 'Direct WhatsApp',
      whatsappSub: 'Immediate response · Direct message',
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
