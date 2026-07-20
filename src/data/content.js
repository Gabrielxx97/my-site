export const SITE = {
  name: 'Gabriel Cunha',
  age: 29,
  role: {
    pt: 'Web Developer',
    en: 'Web Developer',
  },
  email: 'gabrielsantospl@gmail.com',
  phone: '+5511953393626',
  location: {
    pt: 'Osasco, SP',
    en: 'Osasco, SP',
  },
  githubUsername: 'Gabrielxx97',
  // Total de projetos (públicos + privados). Ajuste este número manualmente.
  projetosEnvolvidos: 12,
  cvUrl: '/cv.pdf',
  socials: {
    github: 'https://github.com/Gabrielxx97',
    linkedin: 'https://www.linkedin.com/in/gabrielcunha9797/',
    whatsapp: 'https://wa.me/5511953393626',
    email: 'mailto:gabrielsantospl@gmail.com',
  },
}

export const navItems = [
  { id: 'inicio', label: { pt: 'Início', en: 'Home' } },
  { id: 'sobre', label: { pt: 'Sobre', en: 'About' } },
  { id: 'experiencia', label: { pt: 'Experiência', en: 'Experience' } },
  { id: 'servicos', label: { pt: 'Serviços', en: 'Services' } },
  { id: 'skills', label: { pt: 'Skills', en: 'Skills' } },
  { id: 'contato', label: { pt: 'Contato', en: 'Contact' } },
]

export const hero = {
  greeting: { pt: 'Olá, eu sou', en: "Hi, I'm" },
  description: {
    pt: 'Desenvolvedor Front-end movido pela curiosidade e pela vontade de aprender. Gosto de criar soluções modernas, intuitivas e eficientes, sempre com foco na qualidade e na experiência do usuário',
    en: 'Front-end Developer driven by curiosity and a passion for continuous learning. I enjoy building modern, intuitive, and efficient solutions, always focusing on code quality and delivering the best possible user experience.',
  },
  ctaProjects: { pt: 'Ver Serviços', en: 'View Services' },
  ctaCv: { pt: 'Download CV', en: 'Download CV' },
  ctaContact: { pt: 'Entrar em Contato', en: 'Get in Touch' },
  scrollDown: { pt: 'Saiba mais', en: 'Learn more' },
}

export const about = {
  title: { pt: 'Sobre Mim', en: 'About Me' },
  subtitle: {
    pt: 'História, visão e o que me move no front-end.',
    en: 'Story, vision and what drives me in front-end.',
  },
  story: {
    pt: 'Desde criança, sempre sonhei em trabalhar com computadores. Minha trajetória na Tecnologia da Informação começou há mais de 10 anos, iniciando com a formação como Técnico em Informática e, posteriormente, em Redes de Computadores. Em 2021, descobri minha verdadeira paixão pela programação e decidi seguir carreira como Desenvolvedor Front-end, área em que atuo há mais de 5 anos.',
    en: 'Since I was a child, I have always dreamed of working with computers. My journey in Information Technology began over 10 years ago with a degree as an IT Technician, followed by a specialization in Computer Networks. In 2021, I discovered my true passion for software development and decided to pursue a career as a Front-end Developer, a role I have been dedicated to for over 5 years.',
  },
  experience: {
    pt: 'Ao longo da minha carreira, participei do desenvolvimento de sites e aplicações web, criando interfaces modernas, intuitivas e interativas para grandes empresas. Toda a minha trajetória profissional como desenvolvedor foi construída na [Venosa](https://www.venosa.io/), onde iniciei como Desenvolvedor Front-end Júnior e, com dedicação e evolução contínua, conquistei a posição de Desenvolvedor Front-end Pleno, cargo que ocupo atualmente.',
    en: 'Throughout my career, I have contributed to the development of websites and web applications, creating modern, intuitive, and interactive interfaces for major companies. My entire professional journey as a developer has been built at [Venosa](https://www.venosa.io/), where I started as a Junior Front-end Developer and, through dedication and continuous growth, progressed to my current role as a Mid-level Front-end Developer.',
  },
  goals: {
    pt: 'Meu principal objetivo é continuar evoluindo como desenvolvedor, aprofundando meus conhecimentos em novas tecnologias e participando de projetos que gerem impacto real. Busco criar aplicações cada vez mais eficientes, escaláveis e centradas na experiência do usuário, sempre encarando novos desafios como oportunidades para aprender, inovar e crescer profissionalmente.',
    en: 'My main goal is to continue growing as a developer by expanding my knowledge of new technologies and contributing to projects that create real impact. I strive to build applications that are increasingly efficient, scalable, and user-centered, while embracing every new challenge as an opportunity to learn, innovate, and grow professionally.',
  },
  favoritesLabel: { pt: 'Tecnologias favoritas', en: 'Favorite technologies' },
  favorites: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
}

export const stats = [
  { key: 'years', value: 5, label: { pt: 'Anos de experiência', en: 'Years of experience' }, suffix: '+' },
  { key: 'commits', value: 139, label: { pt: 'Contribuições no Git (nos últimos 12 meses)', en: 'Git contributions (last 12 months)' }, suffix: '' },
]

export const skills = {
  title: { pt: 'O que eu faço', en: 'What I do' },
  subtitle: {
    pt: 'Stack que uso para entregar produtos polidos e escaláveis.',
    en: 'Stack I use to ship polished and scalable products.',
  },
  filters: [
    { id: 'frontend', label: { pt: 'Front', en: 'Front' } },
    { id: 'backend', label: { pt: 'Back', en: 'Back' } },
    { id: 'database', label: { pt: 'Database', en: 'Database' } },
    { id: 'tools', label: { pt: 'Tools', en: 'Tools' } },
  ],
  items: [
    { name: 'HTML', category: 'frontend', icon: 'html' },
    { name: 'CSS', category: 'frontend', icon: 'css' },
    { name: 'Sass', category: 'frontend', icon: 'sass' },
    { name: 'JavaScript', category: 'frontend', icon: 'js' },
    { name: 'React', category: 'frontend', icon: 'react' },
    { name: 'React Native', category: 'frontend', icon: 'react' },
    { name: 'Next.js', category: 'frontend', icon: 'nextjs' },
    { name: 'Tailwind CSS', category: 'frontend', icon: 'tailwind' },
    { name: 'Node.js', category: 'backend', icon: 'nodejs' },
    { name: 'Express', category: 'backend', icon: 'express' },
    { name: 'Python', category: 'backend', icon: 'python' },
    { name: 'Supabase', category: 'database', icon: 'supabase' },
    {
      name: 'Strapi',
      category: 'database',
      iconUrl: 'https://cdn.simpleicons.org/strapi/8E75FF',
    },
    { name: 'Git', category: 'tools', icon: 'git' },
    { name: 'GitHub', category: 'tools', icon: 'github' },
    {
      name: 'Cursor',
      category: 'tools',
      iconUrl: 'https://cdn.simpleicons.org/cursor/1DB954',
    },
    { name: 'VS Code', category: 'tools', icon: 'vscode' },
    { name: 'Figma', category: 'tools', icon: 'figma' },
    {
      name: 'Processing',
      category: 'tools',
      iconUrl: 'https://cdn.simpleicons.org/processingfoundation/006699',
    },
    { name: 'Arduino', category: 'tools', icon: 'arduino' },
  ],
}

export const projects = {
  title: { pt: 'Projetos', en: 'Projects' },
  subtitle: {
    pt: 'Seleção de trabalhos com foco em UX, performance e design system.',
    en: 'Selected work focused on UX, performance and design systems.',
  },
  filterAll: { pt: 'Todos', en: 'All' },
  items: [
    {
      id: 'aurora-dashboard',
      title: 'Aurora Dashboard',
      description: {
        pt: 'Dashboard analítico com visualizações em tempo real, tema escuro e microinterações fluidas.',
        en: 'Analytics dashboard with real-time visuals, dark theme and fluid micro-interactions.',
      },
      image:
        'https://images.unsplash.com/photo-1551281044-8d8c15e4f2c2?auto=format&fit=crop&w=1200&q=80',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
    {
      id: 'pulse-commerce',
      title: 'Pulse Commerce',
      description: {
        pt: 'E-commerce headless com checkout rápido, SEO técnico e UI inspirada em marketplaces premium.',
        en: 'Headless e-commerce with fast checkout, technical SEO and premium marketplace-inspired UI.',
      },
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      tech: ['Next.js', 'Tailwind CSS', 'Supabase'],
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
    {
      id: 'nova-landing',
      title: 'Nova Landing',
      description: {
        pt: 'Landing page de produto SaaS com hero full-bleed, animações de scroll e conversão otimizada.',
        en: 'SaaS product landing with full-bleed hero, scroll animations and conversion-focused layout.',
      },
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      tech: ['React', 'Framer Motion', 'CSS'],
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
    {
      id: 'folio-kit',
      title: 'Folio Kit',
      description: {
        pt: 'Design system e componentes reutilizáveis para portfólios e sites institucionais.',
        en: 'Design system and reusable components for portfolios and institutional sites.',
      },
      image:
        'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
      tech: ['Vue', 'Sass', 'Vite'],
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
    {
      id: 'signal-app',
      title: 'Signal App',
      description: {
        pt: 'Aplicação web colaborativa com autenticação, estados complexos e performance otimizada.',
        en: 'Collaborative web app with auth, complex state and optimized performance.',
      },
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
    {
      id: 'orbit-admin',
      title: 'Orbit Admin',
      description: {
        pt: 'Painel administrativo com tabelas densas, filtros avançados e acessibilidade de teclado.',
        en: 'Admin panel with dense tables, advanced filters and keyboard accessibility.',
      },
      image:
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
      tech: ['Next.js', 'Express', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
  ],
}

export const experience = {
  title: { pt: 'Experiência', en: 'Experience' },
  subtitle: {
    pt: 'Trajetória em desenvolvimento web e suporte de TI.',
    en: 'Path in web development and IT support.',
  },
  items: [
    {
      id: 'venosa-pleno',
      role: { pt: 'Desenvolvedor Web Pleno', en: 'Mid-level Web Developer' },
      company: 'Venosa',
      period: { pt: 'Jan 2024 — Atual', en: 'Jan 2024 — Present' },
      location: { pt: 'São Paulo, Brasil', en: 'São Paulo, Brazil' },
      description: {
        pt: 'Atuação como desenvolvedor pleno na Venosa, com maior autonomia em interfaces, qualidade de código, entregas e colaboração com o time de produto.',
        en: 'Working as a mid-level developer at Venosa, with greater ownership of interfaces, code quality, deliveries and collaboration with the product team.',
      },
    },
    {
      id: 'venosa-junior',
      role: { pt: 'Desenvolvedor Web Júnior', en: 'Junior Web Developer' },
      company: 'Venosa',
      period: { pt: 'Jan 2021 — Dez 2023', en: 'Jan 2021 — Dec 2023' },
      location: { pt: 'São Paulo, Brasil', en: 'São Paulo, Brazil' },
      description: {
        pt: 'Início da trajetória como desenvolvedor web júnior na Venosa, construindo bases em front-end, boas práticas e entrega de soluções digitais.',
        en: 'Started as a junior web developer at Venosa, building foundations in front-end, best practices and digital product delivery.',
      },
    },
    {
      id: 'venosa-ti',
      role: { pt: 'Técnico de suporte em TI', en: 'IT Support Technician' },
      company: 'Venosa',
      period: { pt: 'Set 2016 — Dez 2020', en: 'Sep 2016 — Dec 2020' },
      location: {
        pt: 'São Paulo e Região, Brasil',
        en: 'São Paulo and Region, Brazil',
      },
      description: {
        pt: 'Suporte técnico em TI na Venosa, atuando em atendimento, manutenção e resolução de problemas de infraestrutura e sistemas por mais de 4 anos.',
        en: 'IT support at Venosa, handling service desk, maintenance and troubleshooting of infrastructure and systems for over 4 years.',
      },
    },
  ],
  education: [
    {
      id: 'fiap',
      school: 'FIAP',
      course: {
        pt: 'Graduação em Redes de Computadores',
        en: 'Computer Networks Degree',
      },
      period: { pt: '2018 — 2019', en: '2018 — 2019' },
    },
    {
      id: 'etec',
      school: 'ETEC - Albert Einstein',
      course: {
        pt: 'Técnico em Informática',
        en: 'Technical Degree in Computing',
      },
      period: { pt: '2014 — 2015', en: '2014 — 2015' },
    },
  ],
}

export const services = {
  title: { pt: 'Serviços', en: 'Services' },
  subtitle: {
    pt: 'Soluções front-end do conceito à entrega em produção.',
    en: 'Front-end solutions from concept to production delivery.',
  },
  items: [
    {
      title: { pt: 'Landing Pages', en: 'Landing Pages' },
      description: {
        pt: 'Páginas de alta conversão com narrativa visual forte e performance.',
        en: 'High-conversion pages with strong visual narrative and performance.',
      },
      icon: 'Layout',
    },
    {
      title: { pt: 'Sites Institucionais', en: 'Institutional Sites' },
      description: {
        pt: 'Presença digital elegante, acessível e alinhada à marca.',
        en: 'Elegant, accessible digital presence aligned with the brand.',
      },
      icon: 'Building2',
    },
    {
      title: { pt: 'Dashboards', en: 'Dashboards' },
      description: {
        pt: 'Painéis densos, claros e usáveis para dados e operação.',
        en: 'Dense, clear and usable panels for data and operations.',
      },
      icon: 'LayoutDashboard',
    },
    {
      title: { pt: 'Aplicações Web', en: 'Web Applications' },
      description: {
        pt: 'SPAs e apps completas com arquitetura escalável.',
        en: 'SPAs and full apps with scalable architecture.',
      },
      icon: 'AppWindow',
    },
    {
      title: { pt: 'Refatoração Front-end', en: 'Front-end Refactoring' },
      description: {
        pt: 'Modernização de código legado com menos risco e mais clareza.',
        en: 'Legacy modernization with less risk and more clarity.',
      },
      icon: 'RefreshCw',
    },
    {
      title: { pt: 'Otimização de Performance', en: 'Performance Optimization' },
      description: {
        pt: 'Lighthouse, Core Web Vitals e experiência mais rápida.',
        en: 'Lighthouse, Core Web Vitals and a faster experience.',
      },
      icon: 'Gauge',
    },
  ],
}

export const process = {
  title: { pt: 'Processo', en: 'Process' },
  subtitle: {
    pt: 'Um fluxo claro do briefing ao deploy.',
    en: 'A clear flow from briefing to deploy.',
  },
  steps: [
    {
      title: { pt: 'Planejamento', en: 'Planning' },
      description: {
        pt: 'Entendimento de objetivos, personas e escopo técnico.',
        en: 'Understanding goals, personas and technical scope.',
      },
    },
    {
      title: { pt: 'Design', en: 'Design' },
      description: {
        pt: 'Direção visual, prototipagem e validação de fluxos.',
        en: 'Visual direction, prototyping and flow validation.',
      },
    },
    {
      title: { pt: 'Desenvolvimento', en: 'Development' },
      description: {
        pt: 'Implementação React com componentes reutilizáveis.',
        en: 'React implementation with reusable components.',
      },
    },
    {
      title: { pt: 'Testes', en: 'Testing' },
      description: {
        pt: 'QA visual, acessibilidade e regressões críticas.',
        en: 'Visual QA, accessibility and critical regressions.',
      },
    },
    {
      title: { pt: 'Deploy', en: 'Deploy' },
      description: {
        pt: 'Publicação, monitoramento e iterações pós-lançamento.',
        en: 'Release, monitoring and post-launch iterations.',
      },
    },
  ],
}

export const testimonials = {
  title: { pt: 'Depoimentos', en: 'Testimonials' },
  subtitle: {
    pt: 'O que clientes e parceiros dizem sobre o trabalho.',
    en: 'What clients and partners say about the work.',
  },
  items: [
    {
      name: 'Marina Costa',
      role: { pt: 'Product Manager', en: 'Product Manager' },
      quote: {
        pt: 'Entregou uma interface impecável, com atenção rara a detalhes de UX e performance.',
        en: 'Delivered an impeccable interface, with rare attention to UX and performance details.',
      },
    },
    {
      name: 'Rafael Mendes',
      role: { pt: 'CEO, Startup SaaS', en: 'CEO, SaaS Startup' },
      quote: {
        pt: 'Nosso site passou a transmitir o nível premium que a marca sempre quis. Conversões subiram.',
        en: 'Our site finally conveyed the premium level the brand always wanted. Conversions went up.',
      },
    },
    {
      name: 'Helena Souza',
      role: { pt: 'Design Lead', en: 'Design Lead' },
      quote: {
        pt: 'Parceria excelente entre design e engenharia. Animações elegantes sem sacrificar acessibilidade.',
        en: 'Excellent design–engineering partnership. Elegant motion without sacrificing accessibility.',
      },
    },
  ],
}

export const contact = {
  title: { pt: 'Contato', en: 'Contact' },
  subtitle: {
    pt: 'Vamos conversar sobre o seu próximo projeto.',
    en: "Let's talk about your next project.",
  },
  name: { pt: 'Nome', en: 'Name' },
  email: { pt: 'Email', en: 'Email' },
  message: { pt: 'Mensagem', en: 'Message' },
  send: { pt: 'Enviar mensagem', en: 'Send message' },
  success: {
    pt: 'Mensagem preparada! Seu cliente de email será aberto.',
    en: 'Message ready! Your email client will open.',
  },
  placeholders: {
    name: { pt: 'Seu nome', en: 'Your name' },
    email: { pt: 'voce@email.com', en: 'you@email.com' },
    message: {
      pt: 'Conte um pouco sobre o projeto...',
      en: 'Tell me a bit about the project...',
    },
  },
}

export const githubSection = {
  title: { pt: 'GitHub', en: 'GitHub' },
  subtitle: {
    pt: 'Atividade recente, repositórios e tecnologias mais usadas.',
    en: 'Recent activity, repositories and most used technologies.',
  },
  repos: { pt: 'Últimos repositórios', en: 'Latest repositories' },
  projectsInvolved: {
    pt: 'Projetos envolvidos',
    en: 'Projects involved',
  },
  languages: { pt: 'Tecnologias mais utilizadas', en: 'Most used technologies' },
  contributions: { pt: 'Contribuições', en: 'Contributions' },
  contributionsYear: {
    pt: 'Contribuições (12 meses)',
    en: 'Contributions (12 months)',
  },
  followers: { pt: 'Seguidores', en: 'Followers' },
  stars: { pt: 'Stars', en: 'Stars' },
  notePrivate: {
    pt: 'Contribuições incluem repositórios privados (se habilitado no GitHub). O total de projetos é informado manualmente.',
    en: 'Contributions include private repositories (if enabled on GitHub). Project totals are set manually.',
  },
  profile: { pt: 'Ver perfil no GitHub', en: 'View GitHub profile' },
  emptyRepos: {
    pt: 'Nenhum repositório público listado no momento. Acesse o perfil para ver a atividade completa.',
    en: 'No public repositories listed right now. Visit the profile to see full activity.',
  },
  emptyLanguages: {
    pt: 'Sem dados de linguagens disponíveis ainda.',
    en: 'No language data available yet.',
  },
  loading: { pt: 'Carregando dados do GitHub...', en: 'Loading GitHub data...' },
  error: {
    pt: 'Não foi possível carregar os dados do GitHub no momento.',
    en: 'Could not load GitHub data right now.',
  },
}

export const footer = {
  rights: {
    pt: 'Todos os direitos reservados.',
    en: 'All rights reserved.',
  },
  built: {
    pt: 'Feito com React, Vite e Tailwind CSS.',
    en: 'Built with React, Vite and Tailwind CSS.',
  },
}

export const notFound = {
  title: { pt: 'Página não encontrada', en: 'Page not found' },
  description: {
    pt: 'O caminho que você acessou não existe ou foi movido.',
    en: 'The path you accessed does not exist or was moved.',
  },
  cta: { pt: 'Voltar ao início', en: 'Back to home' },
}

export const ui = {
  backToTop: { pt: 'Voltar ao topo', en: 'Back to top' },
  themeLight: { pt: 'Modo claro', en: 'Light mode' },
  themeDark: { pt: 'Modo escuro', en: 'Dark mode' },
  openMenu: { pt: 'Abrir menu', en: 'Open menu' },
  closeMenu: { pt: 'Fechar menu', en: 'Close menu' },
  language: { pt: 'Idioma', en: 'Language' },
  loading: { pt: 'Carregando portfólio', en: 'Loading portfolio' },
}
