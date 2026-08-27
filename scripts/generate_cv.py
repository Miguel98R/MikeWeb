import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

icons_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "images", "cv_icons"))

def build_pdf(lang="es"):
    filename = "CV_Jose_Miguel_Rosas_Jimenez.pdf" if lang == "es" else "CV_Jose_Miguel_Rosas_Jimenez_EN.pdf"
    pdf_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", filename))

    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=38,
        rightMargin=38,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()

    name_style = ParagraphStyle(
        'NameHeader', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=22, leading=26,
        alignment=1, textColor=colors.HexColor('#111827')
    )

    tagline_style = ParagraphStyle(
        'TaglineHeader', parent=styles['Normal'],
        fontName='Helvetica', fontSize=10.5, leading=14,
        alignment=1, textColor=colors.HexColor('#374151')
    )

    contact_style = ParagraphStyle(
        'ContactCenter', parent=styles['Normal'],
        fontName='Helvetica', fontSize=8.8, leading=13,
        alignment=1, textColor=colors.HexColor('#4b5563')
    )

    section_style = ParagraphStyle(
        'SectionCenter', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=10.5, leading=14,
        alignment=1, spaceBefore=9, spaceAfter=2.5,
        textColor=colors.HexColor('#111827')
    )

    profile_style = ParagraphStyle(
        'Profile', parent=styles['Normal'],
        fontName='Helvetica', fontSize=9.2, leading=13.2,
        alignment=4, textColor=colors.HexColor('#1f2937')
    )

    job_title_style = ParagraphStyle(
        'JobTitle', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=9.4, leading=12.5,
        textColor=colors.HexColor('#111827')
    )

    job_date_style = ParagraphStyle(
        'JobDate', parent=styles['Normal'],
        fontName='Helvetica-Bold', fontSize=9, leading=12.5,
        alignment=2, textColor=colors.HexColor('#111827')
    )

    bullet_style = ParagraphStyle(
        'Bullet', parent=styles['Normal'],
        fontName='Helvetica', fontSize=8.8, leading=12.2,
        leftIndent=11, firstLineIndent=-7,
        textColor=colors.HexColor('#374151')
    )

    body_style = ParagraphStyle(
        'Body', parent=styles['Normal'],
        fontName='Helvetica', fontSize=8.8, leading=12.2,
        textColor=colors.HexColor('#374151')
    )

    story = []

    # 1. HEADER (CENTERED)
    story.append(Paragraph("JOSÉ MIGUEL ROSAS JIMÉNEZ", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Desarrollador Full Stack | Tech Lead | Software Architect" if lang == "es" else "Full Stack Developer | Tech Lead | Software Architect", tagline_style))
    story.append(Spacer(1, 4))

    img_pin = f'<img src="{icons_dir}/location.png" width="8" height="8" valign="-0.5"/>'
    img_phone = f'<img src="{icons_dir}/phone.png" width="8" height="8" valign="-0.5"/>'
    img_mail = f'<img src="{icons_dir}/email.png" width="8" height="8" valign="-0.5"/>'
    img_web = f'<img src="{icons_dir}/web.png" width="8" height="8" valign="-0.5"/>'
    img_li = f'<img src="{icons_dir}/linkedin.png" width="8" height="8" valign="-0.5"/>'
    img_gh = f'<img src="{icons_dir}/github.png" width="8" height="8" valign="-0.5"/>'

    location_str = "Pachuca de Soto, Hidalgo, México" if lang == "es" else "Pachuca de Soto, Hidalgo, Mexico"
    email_str = "mikerosas.dev98@gmail.com"

    l1 = f'{img_phone} +52 771 434 9366 &nbsp;&nbsp;|&nbsp;&nbsp; {img_pin} {location_str} &nbsp;&nbsp;|&nbsp;&nbsp; {img_mail} <link href="mailto:{email_str}">{email_str}</link>'
    l2 = f'{img_web} <link href="https://mikerosasdev.com">mikerosasdev.com</link> &nbsp;&nbsp;|&nbsp;&nbsp; {img_li} <link href="https://linkedin.com/in/josemiguelrosas">/in/josemiguelrosas</link> &nbsp;&nbsp;|&nbsp;&nbsp; {img_gh} <link href="https://github.com/Miguel98R">/Miguel98R</link> &nbsp;&nbsp;|&nbsp;&nbsp; {img_gh} <link href="https://github.com/mikerosasdev98">/mikerosasdev98</link>'

    story.append(Paragraph(l1, contact_style))
    story.append(Paragraph(l2, contact_style))
    story.append(Spacer(1, 4))

    def add_sec(title):
        story.append(Paragraph(title, section_style))
        story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#111827'), spaceBefore=2, spaceAfter=5))

    # 2. PERFIL / PROFILE
    add_sec("PERFIL" if lang == "es" else "PROFESSIONAL PROFILE")
    if lang == "es":
        profile_p = "Desarrollador Full Stack, Tech Lead y Arquitecto de Software con más de 5 años de experiencia liderando equipos técnicos, diseñando arquitecturas escalables y desarrollando soluciones web y móviles orientadas a producción. Especializado en backend robusto con Node.js y NestJS, integración de Agentes de IA y Chatbots inteligentes, despliegues en la nube con AWS y aplicación rigurosa de principios SOLID, Clean Code y Arquitectura Hexagonal."
    else:
        profile_p = "Full Stack Developer, Tech Lead, and Software Architect with over 5 years of experience leading engineering teams, designing scalable architectures, and developing production-ready web and mobile solutions. Specialized in robust backends with Node.js and NestJS, AI Agents and intelligent Chatbots integration, AWS cloud deployments, and strict adherence to SOLID principles, Clean Code, and Hexagonal Architecture."
    story.append(Paragraph(profile_p, profile_style))
    story.append(Spacer(1, 3))

    # 3. EXPERIENCIA LABORAL / WORK EXPERIENCE
    add_sec("EXPERIENCIA LABORAL" if lang == "es" else "WORK EXPERIENCE")

    def add_exp(title, comp, date_str, bullets):
        t = Table([[
            Paragraph(f"<b>{title}</b> — <font color='#4b5563'>{comp}</font>", job_title_style),
            Paragraph(date_str, job_date_style)
        ]], colWidths=[385, 151])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('TOPPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ]))
        story.append(t)
        for b in bullets:
            story.append(Paragraph(f"• {b}", bullet_style))
        story.append(Spacer(1, 3.5))

    if lang == "es":
        add_exp("Director de Tecnología e IA", "SIPCEC", "Ago. 2026 - Presente", [
            "Dirección técnica del área de Salud Digital e IA. Liderazgo en arquitectura de software e integración de agentes de IA para el ecosistema clínico y preventivo (RedVive+)."
        ])
        add_exp("Tech Lead & Software Architect", "Grupo Norte 70", "May. 2025 - Presente", [
            "Lidero equipos bajo Scrum, defino arquitecturas escalables (Hexagonal) con Node.js/NestJS, CI/CD en AWS y code reviews estrictos con Clean Code."
        ])
        add_exp("Full Stack Developer", "Grupo Tecnológico Sorah", "Sept. 2024 - Presente", [
            "Desarrollo de soluciones full stack empresariales con NestJS y Vue.js; optimización de bases de datos PostgreSQL y microservicios de nómina."
        ])
        add_exp("CEO & Full Stack Developer", "MikeDev", "Jul. 2019 - Presente", [
            "Desarrollo e integración de Agentes de IA y Chatbots inteligentes; diseño de arquitecturas cloud con AWS, Docker y bases de datos relacionales y NoSQL."
        ])
        add_exp("Full Stack Developer & Tech Researcher", "Leganux", "Ago. 2022 - Ago. 2024", [
            "Investigación tecnológica, desarrollo de prototipos innovadores, administración de servidores Linux y despliegues productivos en AWS (EC2)."
        ])
        add_exp("Desarrollador Web Jr", "FMB Solutions", "Jun. 2019 - Dic. 2019", [
            "Desarrollo frontend y backend con React.js y Node.js; gestión y consultas en bases de datos relacionales con SQL Server."
        ])
    else:
        add_exp("Director of Technology & AI", "SIPCEC", "Aug. 2026 - Present", [
            "Technical leadership in Digital Health and Artificial Intelligence. Architecture design and AI agents integration for occupational health ecosystems (RedVive+)."
        ])
        add_exp("Tech Lead & Software Architect", "Grupo Norte 70", "May 2025 - Present", [
            "Scrum technical leadership, defining scalable architectures (Hexagonal) with Node.js/NestJS, CI/CD on AWS, and enforcing strict Clean Code reviews."
        ])
        add_exp("Full Stack Developer", "Grupo Tecnológico Sorah", "Sept. 2024 - Present", [
            "Enterprise full-stack development with NestJS and Vue.js; PostgreSQL database optimization and high-concurrency payroll microservices."
        ])
        add_exp("CEO & Full Stack Developer", "MikeDev", "Jul. 2019 - Present", [
            "Development and integration of intelligent AI Agents and Chatbots; cloud architecture with AWS, Docker, and relational/NoSQL databases."
        ])
        add_exp("Full Stack Developer & Tech Researcher", "Leganux", "Aug. 2022 - Aug. 2024", [
            "Technology research, innovative prototype development, Linux server administration, and production deployments on AWS (EC2)."
        ])
        add_exp("Junior Web Developer", "FMB Solutions", "Jun. 2019 - Dec. 2019", [
            "Frontend and backend web development using React.js and Node.js; relational database management with SQL Server."
        ])

    # 4. EDUCACIÓN / EDUCATION
    add_sec("EDUCACIÓN" if lang == "es" else "EDUCATION")
    edu_text = "<b>Centro Universitario Hidalguense A.C.</b> — Licenciatura en Ingeniería en Sistemas Computacionales" if lang == "es" else "<b>Centro Universitario Hidalguense A.C.</b> — Bachelor's Degree in Computer Systems Engineering"
    t_edu = Table([[
        Paragraph(edu_text, job_title_style),
        Paragraph("2018 – 2023", job_date_style)
    ]], colWidths=[420, 116])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 3))

    # 5. CERTIFICACIONES / CERTIFICATIONS
    add_sec("CERTIFICACIONES Y COMPETENCIAS" if lang == "es" else "CERTIFICATIONS & CREDENTIALS")
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
    t_certs = Table(cert_rows, colWidths=[268, 268])
    t_certs.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_certs)
    story.append(Spacer(1, 3))

    # 6. INFORMACIÓN ADICIONAL / ADDITIONAL SKILLS
    add_sec("INFORMACIÓN ADICIONAL & HABILIDADES" if lang == "es" else "ADDITIONAL INFORMATION & SKILLS")
    if lang == "es":
        skills_data = [
            [Paragraph("• <b>Arquitectura & Cloud:</b> Arquitectura Hexagonal, SOLID, Clean Code, AWS (EC2, ECS, S3), Docker, CI/CD, Linux.", body_style),
             Paragraph("• <b>IA & Backend:</b> Agentes de IA, Chatbots, RAG, Node.js, NestJS, TypeScript, MongoDB, PostgreSQL, Redis.", body_style)],
            [Paragraph("• <b>Frontend & Móvil:</b> Vue.js, NuxtJS, ReactJS, Next.js, Flutter, Tailwind CSS, Bootstrap.", body_style),
             Paragraph("• <b>Idiomas & Metodologías:</b> Español (Nativo), Inglés (Intermedio) | Scrum, Kanban, Code Reviews.", body_style)]
        ]
    else:
        skills_data = [
            [Paragraph("• <b>Architecture & Cloud:</b> Hexagonal Architecture, SOLID, Clean Code, AWS (EC2, ECS, S3), Docker, CI/CD, Linux.", body_style),
             Paragraph("• <b>AI & Backend:</b> AI Agents, Chatbots, RAG, Node.js, NestJS, TypeScript, MongoDB, PostgreSQL, Redis.", body_style)],
            [Paragraph("• <b>Frontend & Mobile:</b> Vue.js, NuxtJS, ReactJS, Next.js, Flutter, Tailwind CSS, Bootstrap.", body_style),
             Paragraph("• <b>Languages & Methodologies:</b> Spanish (Native), English (Intermediate) | Scrum, Kanban, Code Reviews.", body_style)]
        ]

    t_skills = Table(skills_data, colWidths=[268, 268])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_skills)

    doc.build(story)
    print(f"Generated {lang.upper()} CV PDF at: {pdf_path}")

if __name__ == "__main__":
    build_pdf("es")
    build_pdf("en")
