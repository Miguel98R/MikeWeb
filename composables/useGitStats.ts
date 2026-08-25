import { ref, onMounted } from 'vue'

export interface Repo {
    id: number
    name: string
    desc: string
    tech: string
    url: string
    provider: 'github' | 'gitlab'
    visibility: 'public' | 'private'
}

export const useGitStats = () => {
    const repos = ref<Repo[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const fetchRepos = async () => {
        loading.value = true
        error.value = null

        try {
            const allRepos: Repo[] = [
                {
                    id: 1,
                    name: 'store-nomina',
                    desc: 'Sistema de nómina: empleados, sueldos, incentivos, descuentos, asistencia y préstamos.',
                    tech: 'Node.js / CSS',
                    url: 'https://github.com/mikerosasdev98/store-nomina',
                    provider: 'github',
                    visibility: 'private'
                },
                {
                    id: 2,
                    name: 'nomina_sorah_backend',
                    desc: 'Backend de nómina empresarial construido en TypeScript con arquitectura escalable.',
                    tech: 'TypeScript',
                    url: 'https://github.com/mikerosasdev98/nomina_sorah_backend',
                    provider: 'github',
                    visibility: 'private'
                },
                {
                    id: 3,
                    name: 'nomina_sorah_frontend',
                    desc: 'Frontend administrativo para sistema de nómina.',
                    tech: 'CSS / Vue',
                    url: 'https://github.com/mikerosasdev98/nomina_sorah_frontend',
                    provider: 'github',
                    visibility: 'private'
                },
                {
                    id: 4,
                    name: 'NovaWriter',
                    desc: 'Editor web orientado a escritura y productividad.',
                    tech: 'CSS',
                    url: 'https://github.com/mikerosasdev98/NovaWriter',
                    provider: 'github',
                    visibility: 'public'
                },
                {
                    id: 5,
                    name: 'uninstaller_de_Aplicaciones_macOS',
                    desc: 'Script para desinstalación automatizada de aplicaciones en macOS.',
                    tech: 'Shell',
                    url: 'https://github.com/mikerosasdev98/uninstaller_de_Aplicaciones_macOS',
                    provider: 'github',
                    visibility: 'public'
                },
                {
                    id: 6,
                    name: 'form-genesis',
                    desc: 'Formulario web para gestión de inventarios.',
                    tech: 'Vue',
                    url: 'https://github.com/mikerosasdev98/form-genesis',
                    provider: 'github',
                    visibility: 'private'
                },
                {
                    id: 7,
                    name: 'nonoLandGame',
                    desc: 'Juego retro 2D desarrollado en JavaScript.',
                    tech: 'JavaScript',
                    url: 'https://github.com/mikerosasdev98/nonoLandGame',
                    provider: 'github',
                    visibility: 'public'
                },
                {
                    id: 8,
                    name: 'ToothLabMX',
                    desc: 'Sistema de administración para laboratorios dentales.',
                    tech: 'Node.js / MongoDB / Pug',
                    url: 'https://github.com/mikerosasdev98/ToothLabMX',
                    provider: 'github',
                    visibility: 'public'
                },
                {
                    id: 9,
                    name: 'project2Pug',
                    desc: 'Conversor de templates HTML a Pug para Node.js.',
                    tech: 'Node.js / Pug',
                    url: 'https://github.com/mikerosasdev98/project2Pug',
                    provider: 'github',
                    visibility: 'public'
                },
                {
                    id: 10,
                    name: 'MikeWeb',
                    desc: 'Sitio web personal y portafolio profesional.',
                    tech: 'JavaScript',
                    url: 'https://github.com/Miguel98R/MikeWeb',
                    provider: 'github',
                    visibility: 'public'
                }
            ]

            repos.value = allRepos.filter(repo => repo.visibility === 'public')
        } catch (e) {
            error.value = 'No se pudieron cargar los repositorios'
        } finally {
            loading.value = false
        }
    }

    onMounted(fetchRepos)

    return {
        repos,
        loading,
        error,
        fetchRepos
    }
}