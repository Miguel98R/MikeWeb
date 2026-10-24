import os
import fitz
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def generate_harvard_cv(lang="es"):
    filename = "CV_Jose_Miguel_Rosas_Jimenez.pdf" if lang == "es" else "CV_Jose_Miguel_Rosas_Jimenez_EN.pdf"
    output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public"))
    pdf_path = os.path.join(output_dir, filename)

    # Letter is 612 x 792 pt
    # Harvard Standard Margins: 0.5 in (36 pt)
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=26,
        bottomMargin=26
    )

    styles = getSampleStyleSheet()

    # Harvard Typography: Classic Times family (Times-Roman, Times-Bold, Times-Italic)
    name_style = ParagraphStyle(
        'HarvardName', parent=styles['Normal'],
        fontName='Times-Bold', fontSize=18, leading=21,
        alignment=1, textColor=colors.HexColor('#000000')
    )

    sub_role_style = ParagraphStyle(
        'HarvardSubRole', parent=styles['Normal'],
        fontName='Times-Italic', fontSize=9.5, leading=12,
        alignment=1, textColor=colors.HexColor('#222222')
    )

    contact_style = ParagraphStyle(
        'HarvardContact', parent=styles['Normal'],
        fontName='Times-Roman', fontSize=8.5, leading=11.5,
        alignment=1, textColor=colors.HexColor('#222222')
    )

    section_style = ParagraphStyle(
        'HarvardSection', parent=styles['Normal'],
        fontName='Times-Bold', fontSize=10, leading=13,
        alignment=0, spaceBefore=5.5, spaceAfter=1,
        textColor=colors.HexColor('#000000')
    )

    profile_style = ParagraphStyle(
        'HarvardProfile', parent=styles['Normal'],
        fontName='Times-Roman', fontSize=8.4, leading=11.2,
        alignment=4, textColor=colors.HexColor('#111111')
    )

    entry_title_style = ParagraphStyle(
        'HarvardEntryTitle', parent=styles['Normal'],
        fontName='Times-Bold', fontSize=8.8, leading=11.5,
        textColor=colors.HexColor('#000000')
    )

    entry_date_style = ParagraphStyle(
        'HarvardEntryDate', parent=styles['Normal'],
        fontName='Times-Italic', fontSize=8.6, leading=11.5,
        alignment=2, textColor=colors.HexColor('#111111')
    )

    bullet_style = ParagraphStyle(
        'HarvardBullet', parent=styles['Normal'],
        fontName='Times-Roman', fontSize=8.3, leading=11.1,
        leftIndent=11, firstLineIndent=-7,
        textColor=colors.HexColor('#111111')
    )

    body_style = ParagraphStyle(
        'HarvardBody', parent=styles['Normal'],
        fontName='Times-Roman', fontSize=8.3, leading=11.1,
        textColor=colors.HexColor('#111111')
    )

    story = []

    # 1. HEADER (CENTERED, HARVARD SPECIFICATION)
    story.append(Paragraph("JOSÉ MIGUEL ROSAS JIMÉNEZ", name_style))
    story.append(Spacer(1, 1.5))
    
    role_text = "Tech Lead &nbsp;|&nbsp; Software Architect &nbsp;|&nbsp; Senior Full Stack Developer"
    story.append(Paragraph(role_text, sub_role_style))
    story.append(Spacer(1, 2.5))

    location_str = "Pachuca de Soto, Hidalgo, México" if lang == "es" else "Pachuca de Soto, Hidalgo, Mexico"
    email_str = "mikerosas.dev98@gmail.com"

    line1 = f'{location_str} &nbsp;•&nbsp; +52 771 434 9366 &nbsp;•&nbsp; <link href="mailto:{email_str}"><font color="#111827">{email_str}</font></link>'
    line2 = (
        f'<link href="https://mikerosasdev.com"><font color="#111827">mikerosasdev.com</font></link> &nbsp;•&nbsp; '
        f'<link href="https://linkedin.com/in/josemiguelrosas"><font color="#111827">linkedin.com/in/josemiguelrosas</font></link> &nbsp;•&nbsp; '
        f'<link href="https://github.com/Miguel98R"><font color="#111827">github.com/Miguel98R</font></link>'
    )
    story.append(Paragraph(line1, contact_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(line2, contact_style))
    story.append(Spacer(1, 1.5))

    # SECTION HELPER WITH FULL WIDTH SOLID DIVIDER
    def add_section(title):
        story.append(Paragraph(title, section_style))
        story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#000000'), spaceBefore=1, spaceAfter=3))

    # 2. RESUMEN PROFESIONAL / PROFESSIONAL SUMMARY
    add_section("RESUMEN PROFESIONAL" if lang == "es" else "PROFESSIONAL SUMMARY")
    if lang == "es":
        summary = (
            "Tech Lead, Arquitecto de Software y Desarrollador Full Stack con más de 5 años de experiencia liderando "
            "equipos de ingeniería, diseñando arquitecturas escalables (Hexagonal, Microservicios) y desplegando soluciones "
            "de alta disponibilidad en producción. Especialista en backend robusto con Node.js y NestJS, integración de "
            "Agentes de IA y Chatbots inteligentes (RAG, LLMs), infraestructura cloud en AWS (EC2, ECS, S3) y aplicación "
            "rigurosa de principios SOLID, Clean Code y pipelines automatizados de CI/CD."
        )
    else:
        summary = (
            "Tech Lead, Software Architect, and Senior Full Stack Developer with 5+ years of experience leading engineering "
            "teams, architecting scalable systems (Hexagonal, Microservices), and delivering high-availability production solutions. "
            "Specialized in robust backends with Node.js and NestJS, intelligent AI Agents and Chatbot ecosystems (RAG, LLMs), "
            "cloud infrastructure on AWS (EC2, ECS, S3), and disciplined engineering practices (SOLID, Clean Code, CI/CD)."
        )
    story.append(Paragraph(summary, profile_style))
    story.append(Spacer(1, 1.5))

    # 3. EXPERIENCIA LABORAL / PROFESSIONAL EXPERIENCE
    add_section("EXPERIENCIA LABORAL" if lang == "es" else "PROFESSIONAL EXPERIENCE")

    def add_job(company, location, role, dates, bullets):
        left_html = f"<b>{company}</b> &nbsp;|&nbsp; <i>{role}</i>"
        right_html = f"<i>{dates}</i>"
        table_data = [[Paragraph(left_html, entry_title_style), Paragraph(right_html, entry_date_style)]]
        t = Table(table_data, colWidths=[400, 140])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'BOTTOM'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
        ]))
        story.append(t)
        for b in bullets:
            story.append(Paragraph(f"• {b}", bullet_style))
        story.append(Spacer(1, 2.5))

    if lang == "es":
        add_job(
            "SIPCEC", "México", "Director de Tecnología e IA", "Ago. 2026 – Presente",
            ["Dirección técnica del ecosistema de Salud Digital (RedVive+); diseño de arquitectura escalable e integración de agentes de IA con RAG para el procesamiento clínico y preventivo automatizado."]
        )
        add_job(
            "Grupo Norte 70", "México", "Tech Lead & Software Architect", "May. 2025 – Presente",
            ["Liderazgo técnico de equipos Scrum, diseño de arquitectura hexagonal con Node.js/NestJS, pipelines automatizados de CI/CD en AWS y estándares de calidad con Clean Code."]
        )
        add_job(
            "Grupo Tecnológico Sorah", "México", "Full Stack Developer", "Sept. 2024 – Presente",
            ["Desarrollo de módulos empresariales con NestJS y Vue.js; optimización de queries y esquemas PostgreSQL para procesamiento de nómina de alta concurrencia."]
        )
        add_job(
            "MikeDev", "México", "CEO & Lead Software Architect", "Jul. 2019 – Presente",
            ["Fundador y consultor principal; desarrollo de Agentes de IA, automatización con WhatsApp Cloud API y arquitecturas serverless/contenedores con AWS y Docker."]
        )
        add_job(
            "Leganux", "México", "Full Stack Developer & Tech Researcher", "Ago. 2022 – Ago. 2024",
            ["Investigación aplicada, desarrollo de prototipos tecnológicos, administración de servidores Linux y despliegues en infraestructura AWS (EC2)."]
        )
        add_job(
            "FMB Solutions", "México", "Desarrollador Web Jr", "Jun. 2019 – Dic. 2019",
            ["Desarrollo web con React.js y Node.js; diseño y optimización de bases de datos relacionales en SQL Server."]
        )
    else:
        add_job(
            "SIPCEC", "Mexico", "Director of Technology & AI", "Aug. 2026 – Present",
            ["Technical leadership of the Digital Health ecosystem (RedVive+); designed scalable architecture and integrated AI agents with RAG for clinical and preventive automated workflows."]
        )
        add_job(
            "Grupo Norte 70", "Mexico", "Tech Lead & Software Architect", "May 2025 – Present",
            ["Technical leadership for Scrum teams, hexagonal architecture implementation with Node.js/NestJS, automated CI/CD pipelines on AWS, and rigorous Clean Code reviews."]
        )
        add_job(
            "Grupo Tecnológico Sorah", "Mexico", "Full Stack Developer", "Sept. 2024 – Present",
            ["Enterprise system development using NestJS and Vue.js; PostgreSQL database optimization for high-concurrency payroll microservices."]
        )
        add_job(
            "MikeDev", "Mexico", "CEO & Lead Software Architect", "Jul. 2019 – Present",
            ["Founder and principal consultant; engineered intelligent AI Agents, WhatsApp Cloud API automation workflows, and containerized architectures on AWS."]
        )
        add_job(
            "Leganux", "Mexico", "Full Stack Developer & Tech Researcher", "Aug. 2022 – Aug. 2024",
            ["Applied technology research, rapid prototype development, Linux server administration, and production deployments on AWS (EC2)."]
        )
        add_job(
            "FMB Solutions", "Mexico", "Junior Web Developer", "Jun. 2019 – Dec. 2019",
            ["Web application development using React.js and Node.js; management and query optimization for relational databases in SQL Server."]
        )

    # 4. EDUCACIÓN / EDUCATION (HARVARD 2-LINE FORMAT)
    add_section("EDUCACIÓN" if lang == "es" else "EDUCATION")
    edu_inst = "<b>Centro Universitario Hidalguense A.C.</b>"
    edu_loc = "<i>Pachuca, Hidalgo, México</i>" if lang == "es" else "<i>Pachuca, Hidalgo, Mexico</i>"
    edu_degree = "<i>Licenciatura en Ingeniería en Sistemas Computacionales</i>" if lang == "es" else "<i>Bachelor of Science in Computer Systems Engineering</i>"
    edu_dates = "<i>2018 – 2023</i>"

    t_edu = Table([
        [Paragraph(edu_inst, entry_title_style), Paragraph(edu_loc, entry_date_style)],
        [Paragraph(edu_degree, body_style), Paragraph(edu_dates, entry_date_style)]
    ], colWidths=[390, 150])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 1.5))

    # 5. CERTIFICACIONES Y CREDENCIALES / CERTIFICATIONS & CREDENTIALS
    add_section("CERTIFICACIONES Y CREDENCIALES" if lang == "es" else "CERTIFICATIONS & CREDENTIALS")
    if lang == "es":
        col1 = [
            "• <b>CRUD Operations in MongoDB</b> — MongoDB (2026)",
            "• <b>AWS Partner: Technical Accredited</b> — AWS (2025)",
            "• <b>AWS Partner: Generative AI Sales</b> — AWS (2025)",
            "• <b>Job Roles in the Cloud</b> — AWS (2025)",
            "• <b>Principios SOLID y Clean Code</b> — Udemy (2025)"
        ]
        col2 = [
            "• <b>Gemini Certified Educator</b> — Google for Education (2025)",
            "• <b>Curso de IA Web (JavaScript)</b> — Udemy (2025)",
            "• <b>Master en PHP, SQL, POO, Laravel</b> — Udemy (2025)",
            "• <b>Copilot & IA Generativa</b> — Santander Open Academy (2025)",
            "• <b>Ethical Hacking / Red Team</b> — HackerMentor (2023)"
        ]
    else:
        col1 = [
            "• <b>CRUD Operations in MongoDB</b> — MongoDB (2026)",
            "• <b>AWS Partner: Technical Accredited</b> — AWS (2025)",
            "• <b>AWS Partner: Generative AI Sales</b> — AWS (2025)",
            "• <b>Job Roles in the Cloud</b> — AWS (2025)",
            "• <b>SOLID Principles & Clean Code</b> — Udemy (2025)"
        ]
        col2 = [
            "• <b>Gemini Certified Educator</b> — Google for Education (2025)",
            "• <b>Web AI: Google Models for JavaScript</b> — Udemy (2025)",
            "• <b>Master in PHP, SQL, OOP, Laravel</b> — Udemy (2025)",
            "• <b>Copilot & Generative AI</b> — Santander Open Academy (2025)",
            "• <b>Ethical Hacking / Red Team</b> — HackerMentor (2023)"
        ]

    cert_rows = []
    for i in range(len(col1)):
        cert_rows.append([Paragraph(col1[i], body_style), Paragraph(col2[i], body_style)])
    t_certs = Table(cert_rows, colWidths=[270, 270])
    t_certs.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(t_certs)
    story.append(Spacer(1, 1.5))

    # 6. HABILIDADES TÉCNICAS / TECHNICAL SKILLS
    add_section("HABILIDADES TÉCNICAS" if lang == "es" else "TECHNICAL SKILLS")
    if lang == "es":
        skills = [
            "• <b>Arquitectura & Cloud:</b> Arquitectura Hexagonal, SOLID, Clean Code, AWS (EC2, ECS, S3, IAM), Docker, Kubernetes, Coolify, CI/CD, Nginx, Linux.",
            "• <b>Backend & Inteligencia Artificial:</b> Node.js, NestJS, TypeScript, MongoDB, PostgreSQL, Redis, Agentes de IA, RAG, LLMs, Chatbots.",
            "• <b>Frontend & Mobile:</b> Vue.js, NuxtJS, ReactJS, Next.js, Flutter, Tailwind CSS, Bootstrap, HTML5/CSS3.",
            "• <b>Metodologías & Idiomas:</b> Scrum, Kanban, Mentoring Técnico, Code Reviews, Git | Español (Nativo), Inglés (Intermedio B2)."
        ]
    else:
        skills = [
            "• <b>Architecture & Cloud:</b> Hexagonal Architecture, SOLID, Clean Code, AWS (EC2, ECS, S3, IAM), Docker, Kubernetes, Coolify, CI/CD, Nginx, Linux.",
            "• <b>Backend & Artificial Intelligence:</b> Node.js, NestJS, TypeScript, MongoDB, PostgreSQL, Redis, AI Agents, RAG, LLMs, Chatbots.",
            "• <b>Frontend & Mobile:</b> Vue.js, NuxtJS, ReactJS, Next.js, Flutter, Tailwind CSS, Bootstrap, HTML5/CSS3.",
            "• <b>Methodologies & Languages:</b> Scrum, Kanban, Technical Mentorship, Code Reviews, Git | Spanish (Native), English (Intermediate B2)."
        ]

    for s in skills:
        story.append(Paragraph(s, body_style))

    doc.build(story)
    print(f"Built Harvard CV ({lang.upper()}) -> {pdf_path}")

    # Validate page count with PyMuPDF
    pdf_doc = fitz.open(pdf_path)
    page_count = len(pdf_doc)
    print(f"==> {filename}: PAGE COUNT = {page_count}")
    assert page_count == 1, f"ERROR: {filename} has {page_count} pages, must be EXACTLY 1 page!"

if __name__ == "__main__":
    generate_harvard_cv("es")
    generate_harvard_cv("en")
