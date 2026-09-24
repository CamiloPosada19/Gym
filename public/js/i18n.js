// Chidaoba Bilingual Translation Engine (Single Button ES/EN)
(function () {
  const translations = {
    es: {
      "page.title": "CHIDAOBA | Club de Judo Olímpico y Brazilian Jiu-Jitsu en Alicante",
      "page.metaDesc": "Club de Judo Olímpico y Brazilian Jiu-Jitsu (BJJ) CHIDAOBA en Alicante: Salvador Cases (Olímpico París 2024), Carlos Cases y Mirco Biscarini. Consulta horarios oficiales y clases.",

      "announcement.text": "<strong class=\"text-white font-black\">CHIDAOBA</strong>: Judo Olímpico y Brazilian Jiu-Jitsu · C/ de Perú, 14 (Alicante)",
      "announcement.cta": "Ver Horarios de Clases →",
      "nav.club": "El Club",
      "nav.coaches": "Entrenadores",
      "nav.disciplines": "Disciplinas",
      "nav.facility": "Instalaciones",
      "nav.schedule": "Horarios",
      "nav.mobileCta": "Hablar con los Entrenadores",

      "hero.badge1": "JUDO OLÍMPICO & BJJ",
      "hero.badge2": "📍 Alicante · C/ de Perú, 14 (Planta G)",
      "hero.titlePre": "CLUB DEPORTIVO",
      "hero.titleSuffix": "JUDO OLÍMPICO &",
      "hero.subtitle": "El centro de referencia en combate y grappling de los hermanos <strong>Salvador Cases</strong> (Olímpico París 2024, Subcampeón de Europa) y <strong>Carlos Cases</strong> (Campeón de España y Maestro Nacional), junto a los maestros de BJJ <strong class=\"text-red-400\">Mirco Biscarini</strong> (@mibisjj) y <strong>Luis Planelles</strong> en Alicante.",
      "hero.stripTitle": "Clases Abiertas · Todos los Niveles",
      "hero.stripDesc": "Iniciación, infantil, adultos y competición con atletas olímpicos",
      "hero.stripCta": "Ver Horarios →",
      "hero.ctaTrial": "Solicitar Clase de Prueba",
      "hero.ctaSchedule": "Ver Horarios de Clases",
      "hero.trust1": "Clase de prueba sin compromiso",
      "hero.trust2": "Desde iniciación a competición",
      "hero.trust3": "2 Tatamis (100m² + 70m²)",
      "hero.photoBadge": "FOTO REAL EN COMPETICIÓN",
      "hero.photoRole": "Olímpico París 2024 · Subcampeón de Europa",
      "hero.schedBadge": "HORARIOS DE CLASES",
      "hero.schedMornings": "Turno Mañanas",
      "hero.schedMorningsDesc": "Tatami Abierto, Gi & No-Gi",
      "hero.schedAfternoons": "Turno Tardes & Noches",
      "hero.schedAfternoonsDesc": "BJJ Gi, No-Gi & Femenino",
      "hero.schedDays": "Lunes a Sábado",
      "hero.schedFullGrid": "Ver parrilla completa →",

      "countdown.badge": "CUENTA ATRÁS · APERTURA 5 DE OCTUBRE",
      "countdown.title": "EL TATAMI ABRE SUS PUERTAS EN:",
      "countdown.subtitle": "Estamos finalizando el acondicionamiento del nuevo dojo en Alicante para abrir el 5 de octubre. Asegura tu plaza antes del inicio de clases.",
      "countdown.days": "Días",
      "countdown.hours": "Horas",
      "countdown.minutes": "Min",
      "countdown.seconds": "Seg",
      "countdown.progressText": "Progreso de obras e instalaciones: <strong class=\"text-white\">88%</strong>",
      "countdown.spotsText": "Plazas: 38/50 reservadas",
      "countdown.schedLink": "Ver Horarios de Clases →",

      "about.badge": "STAFF TÉCNICO DE ÉLITE EN ALICANTE",
      "about.title": "LOS ENTRENADORES",
      "about.subtitle": "Cuatro referentes del combate unen sus fuerzas para ofrecer la formación de Judo y Brazilian Jiu-Jitsu más avanzada del país: los hermanos Salvador Cases y Carlos Cases junto a los maestros de BJJ Mirco Biscarini y Luis Planelles.",
      "about.paris2024": "PARÍS 2024",
      "about.salvaRole": "HEAD COACH · JUDO OLÍMPICO",
      "about.salvaSubtitle": "Subcampeón de Europa · Ne-Waza Specialist",
      "about.salvaBio": "Judoka olímpico en París 2024 y medallista en el World Judo Tour (–73 kg). Su estilo ofensivo y su dominio del suelo lideran el método de combate y proyección en Chidaoba.",
      "about.salvaAchievements": "Logros Destacados:",
      "about.salvaPalm1Title": "Juegos Olímpicos París 2024",
      "about.salvaPalm1Tag": "Olímpico",
      "about.salvaPalm2Title": "Campeonato de Europa 2023",
      "about.salvaPalm2Tag": "Plata Europea",
      "about.salvaPalm3Title": "Grand Slam Circuit (IJF World Tour)",
      "about.salvaPalm3Tag": "Grand Slam",
      "about.salvaPalm4Title": "Grand Prix Internacional",
      "about.salvaPalm4Tag": "Grand Prix",
      "about.salvaQuote": "\"El judo de competición llevado a la máxima exigencia y efectividad.\"",

      "about.carlosRole": "DIRECTOR TÉCNICO · MAESTRO NACIONAL",
      "about.carlosSubtitle": "Maestro Nacional · Campeón de España",
      "about.carlosBio": "Pilar pedagógico y hermano mayor de Salvador. Campeón de España en todas las categorías (Sub-15, Sub-17, Sub-21 y Absoluto) y formador de decenas de cinturones negros y campeones en Alicante.",
      "about.carlosSpecialties": "Especialidades:",
      "about.carlosPalm1Title": "Campeonatos de España (Todas las categorías)",
      "about.carlosPalm1Tag": "Campeón Pleno",
      "about.carlosPalm2Title": "Selección Nacional Española",
      "about.carlosPalm2Tag": "Internacional",
      "about.carlosPalm3Title": "Dirección Deportiva Chidaoba",
      "about.carlosPalm3Tag": "Head Coach",
      "about.carlosPalm4Title": "Preparación Física & Fuerza",
      "about.carlosPalm4Tag": "Preparador",
      "about.carlosQuote": "\"Formar atletas y personas con respeto, carácter y perseverancia.\"",

      "about.mircoRole": "HEAD COACH BRAZILIAN JIU-JITSU",
      "about.mircoSubtitle": "Cinturón Negro BJJ · Team Kurama",
      "about.mircoBio": "Campeón de Europa y competidor de élite en el circuito IBJJF y AJP Tour. Especialista en la enseñanza de BJJ con Gi y No-Gi Grappling, guardias de presión y sumisiones avanzadas.",
      "about.mircoTitles": "Palmarés & Títulos:",
      "about.mircoPalm1Title": "Campeonato de Europa BJJ",
      "about.mircoPalm1Tag": "Oro Europeo",
      "about.mircoPalm2Title": "Spain BJJ Tour 2026",
      "about.mircoPalm2Tag": "Plata Nacional",
      "about.mircoPalm3Title": "Europe Cup BJJ 2025 & World Cup 2025",
      "about.mircoPalm3Tag": "Podio Mundial",
      "about.mircoPalm4Title": "Spain Cup BJJ Gi 2021",
      "about.mircoPalm4Tag": "Oro Copa España",
      "about.mircoQuote": "\"El Jiu-Jitsu es un ajedrez corporal donde la técnica vence a la fuerza.\"",

      "about.luisRole": "PROFESOR BJJ · ESPECIALISTA KIDS",
      "about.luisSubtitle": "Cinturón Negro BJJ · +15 Años de Experiencia",
      "about.luisBio": "Con más de 15 años sobre el tatami y cinturón negro de Brazilian Jiu-Jitsu, Luis lidera el programa pedagógico de BJJ Infantil (Kids) y adultos. Especialista en motricidad, disciplina, respeto y valores para las nuevas generaciones de deportistas.",
      "about.luisSpecialties": "Especialidades:",
      "about.luisPalm1Title": "+15 Años de Experiencia en BJJ",
      "about.luisPalm1Tag": "Faixa Preta",
      "about.luisPalm2Title": "Especialista en BJJ Infantil & Juvenil",
      "about.luisPalm2Tag": "Kids Coach",
      "about.luisPalm3Title": "Desarrollo Psicomotriz & Disciplina",
      "about.luisPalm3Tag": "Pedagogía",
      "about.luisPalm4Title": "Defensa Personal & Fundamentos",
      "about.luisPalm4Tag": "Grappling",
      "about.luisQuote": "\"La disciplina, el respeto y la diversión en el tatami forjan la confianza para toda la vida.\"",

      "about.galleryBadge": "GALERÍA REAL",
      "about.galleryTitle": "Momentos Reales de Competición y Entrenamiento",
      "about.badgePhoto1": "Éxito Nacional",
      "about.caption1": "Salvador Cases en lo más alto del podio de España",
      "about.badgePhoto2": "Grand Prix Final",
      "about.caption2": "Lucha por el oro en el circuito mundial",
      "about.badgePhoto3": "World Cup BJJ",
      "about.caption3": "Mirco Biscarini en acción oficial de competición",
      "about.badgePhoto4": "Tatami Chidaoba",
      "about.caption4": "Nuevo centro en C/ de Perú, 14 (Planta G)",

      "disciplines.badge": "NUESTRO PROGRAMA MARCIAL",
      "disciplines.title": "DISCIPLINAS IMPARTIDAS EN",
      "disciplines.subtitle": "Un currículum integral que abarca desde la lucha olímpica de pie hasta el control total y las sumisiones en el suelo, con programas adaptados para todas las edades y niveles.",
      "disciplines.bannerBadge": "FILOSOFÍA DE ENTRENAMIENTO",
      "disciplines.quote": "\"De pie te derribo con Judo. En el suelo te someto con BJJ.\"",
      "disciplines.quoteAuthor": "Filosofía de Combate Total · Chidaoba Alicante",
      "disciplines.allLevels": "Todos los niveles",
      "disciplines.learnHeading": "¿Qué aprenderás?",
      "disciplines.recommendedLabel": "Recomendado para:",
      
      "disciplines.d1Name": "Judo Olímpico (Tachi-Waza & Ne-Waza)",
      "disciplines.d1Badge": "Arte Olímpico",
      "disciplines.d1Subtitle": "El poder del derribo y la máxima efectividad de agarres",
      "disciplines.d1Desc": "Metodología olímpica directa de los hermanos Cases. Aprende la biomecánica de proyecciones limpias, desequilibrio (kuzushi), caídas seguras y transiciones letales.",
      "disciplines.d1F1": "Ukemi: el arte de caer con total seguridad y sin lesiones",
      "disciplines.d1F2": "Proyecciones olímpicas: Uchi-Mata, Seoi-Nage, Harai-Goshi",
      "disciplines.d1F3": "Kumi-Kata táctico (dominio absoluto de solapas y mangas)",
      "disciplines.d1F4": "Transición inmediata de pie a inmovilización y estrangulación",
      "disciplines.d1Ideal": "Adultos y jóvenes que buscan potencia, agilidad, derribos de élite y disciplina marcial.",
      "disciplines.d1Cta": "Preguntar por horarios de Judo Olímpico",

      "disciplines.d2Name": "Brazilian Jiu-Jitsu (BJJ Gi & No-Gi)",
      "disciplines.d2Badge": "Grappling & BJJ",
      "disciplines.d2Subtitle": "El arte suave y el ajedrez de sumisiones en el tatami",
      "disciplines.d2Desc": "La disciplina de suelo más técnica del mundo. Aprende a controlar, revertir y finalizar a oponentes de cualquier tamaño mediante palancas articulares y estrangulaciones.",
      "disciplines.d2F1": "BJJ con Kimono (Gi): control posicional, solapas y palancas",
      "disciplines.d2F2": "No-Gi Grappling: velocidad, lucha cuerpo a cuerpo y sumisiones",
      "disciplines.d2F3": "Pases de guardia, raspados y sumisiones de alta eficiencia",
      "disciplines.d2F4": "Sparring técnico progresivo con máximo respeto entre compañeros",
      "disciplines.d2Ideal": "Quienes buscan defensa personal inteligente, acondicionamiento y fluidez en suelo.",
      "disciplines.d2Cta": "Preguntar por horarios de Brazilian Jiu-Jitsu",

      "disciplines.d3Name": "Chidaoba Kids & Juniors (4 a 15 Años)",
      "disciplines.d3Badge": "Escuela Infantil",
      "disciplines.d3Subtitle": "Valores inmutables, psicomotricidad, respeto y anti-bullying",
      "disciplines.d3Desc": "Pedagogía marcial liderada por Carlos y Salva Cases. Fomentamos la confianza en uno mismo, la concentración escolar, la coordinación motora y el juego limpio.",
      "disciplines.d3F1": "Código moral del Judo: Respeto, Cortesía, Modestia y Autocontrol",
      "disciplines.d3F2": "Psicomotricidad, equilibrio, fuerza funcional y agilidad",
      "disciplines.d3F3": "Prevención activa del acoso escolar (seguridad sin agresividad)",
      "disciplines.d3F4": "Grupos adaptados por edades (4-7, 8-11 y 12-15 años)",
      "disciplines.d3Ideal": "Padres que quieren una formación integral en valores deportivos y fortaleza física para sus hijos.",
      "disciplines.d3Cta": "Preguntar por horarios de Chidaoba Kids & Juniors",

      "facility.badge": "NUESTRO ESPACIO EN ALICANTE",
      "facility.title": "INSTALACIONES DISEÑADAS PARA EL",
      "facility.titleHighlight": "ALTO NIVEL",
      "facility.subtitle": "Ubicado en C/ de Perú, 14 (Planta G), 03008 Alicante. Dos plantas con 170 m² de tatami homologado dedicados exclusivamente al judo y al brazilian jiu-jitsu.",
      "facility.matBadge": "TATAMI OFICIAL DE COMPETICIÓN",
      "facility.matTitle": "2 Tatamis Oficiales de Competición (100 m² + 70 m²)",
      "facility.matDesc": "Dos plantas con tatamis independientes (100 m² en planta baja y 70 m² en altillo), amortiguación anti-impactos y climatización de alta potencia.",
      "facility.matStatLabel": "Dos Tatamis",
      "facility.matStatValue": "100 m² + 70 m²",
      "facility.f1Title": "Tatami Planta Baja (100 m²)",
      "facility.f1Desc": "100 m² de tatami oficial de competición con cámara de amortiguación anti-impactos para Judo Olímpico y BJJ.",
      "facility.f2Title": "Tatami Planta Alta (70 m²)",
      "facility.f2Desc": "70 m² de tatami independiente en la planta superior, ideal para tecnificación, randori y grupos de combate.",
      "facility.f3Title": "Vestuarios Amplios & Nuevos",
      "facility.f3Desc": "Duchas individuales, zonas de taquillas, limpieza y desinfección diaria bajo los más estrictos estándares higiénicos.",
      "facility.f4Title": "C/ de Perú, 14 (Planta G), 03008 Alicante",
      "facility.f4Desc": "Nueva sede de Chidaoba en Alicante, con fácil acceso, zona de aparcamiento y excelentes conexiones de transporte para entrenar al máximo nivel.",

      "schedule.badge": "PLANIFICA TU SEMANA",
      "schedule.title": "HORARIOS OFICIALES",
      "schedule.subtitle": "Clases de Judo Olímpico, Brazilian Jiu-Jitsu (Gi & No-Gi), Kids y Tatami Abierto de Lunes a Sábado dirigidas por Salvador Cases, Carlos Cases y Mirco Biscarini.",
      "schedule.badgeTrial": "<span class=\"w-2 h-2 rounded-full bg-emerald-500 animate-pulse\"></span><strong class=\"text-white\">Empieza hoy</strong> · Tu primera clase es 100% gratis",
      "schedule.filterAll": "Todas las Clases",
      "schedule.filterJudo": "🥋 Judo Olímpico",
      "schedule.filterBjjGi": "🥋 BJJ Gi",
      "schedule.filterNoGi": "🤼 No-Gi",
      "schedule.filterKids": "👶 Judo Kids & Juniors",
      "schedule.filterWomen": "👩 BJJ Femenino",
      "schedule.filterOpenMat": "✋ Tatami Abierto",
      "schedule.viewDay": "📱 Vista por Día",
      "schedule.viewTable": "🗓️ Tabla Semanal",
      "schedule.slotsCount": "7 franjas horarias",
      "schedule.noClass": "Sin sesión programada",
      "schedule.bookBtn": "Reservar",
      "schedule.hoverBook": "Reservar →",
      "schedule.legendJudo": "Judo Olímpico",
      "schedule.legendBjjGi": "BJJ Gi",
      "schedule.legendNoGi": "No-Gi",
      "schedule.legendWomen": "BJJ Femenino",
      "schedule.legendKids": "Judo Kids",
      "schedule.legendOpenMat": "Tatami Abierto",
      "schedule.legendNotice": "Pulsa en cualquier clase para reservar por WhatsApp",
      "schedule.bannerBadge": "SALVADOR & CARLOS CASES · MIRCO BISCARINI · LUIS PLANELLES",
      "schedule.bannerTitle": "¡EMPIEZA HOY! TU PRIMERA CLASE ES 100% GRATIS",
      "schedule.bannerDesc": "Prueba una clase de Judo Olímpico o Brazilian Jiu-Jitsu en el horario que elijas. Conoce el tatami en <strong>C/ de Perú, 14 (Alicante)</strong>.",
      "schedule.bannerBtn": "Reservar Clase Gratis →",

      "faqs.badge": "PREGUNTAS FRECUENTES",
      "faqs.title": "TODO LO QUE NECESITAS SABER SOBRE CHIDAOBA",
      "faqs.q1": "¿Por qué el club se llama 'Chidaoba'?",
      "faqs.a1": "'Chidaoba' es el nombre del estilo tradicional de lucha de Georgia, famoso por sus agarres dinámicos y derribos que enriquecieron al judo moderno. Es la denominación elegida por la familia Cases para este proyecto de artes marciales en Alicante, integrando Judo Olímpico de élite, Brazilian Jiu-Jitsu (BJJ) con Mirco Biscarini y acondicionamiento marcial avanzado.",
      "faqs.q2": "¿Cuáles son los horarios de las clases y cómo puedo empezar?",
      "faqs.a2": "Ofrecemos clases distribuidas en turnos de mañana (09:30 Tatami Abierto y 10:00 Judo Olímpico / BJJ Gi / No-Gi), mediodía (15:00 BJJ), tarde para niños y jóvenes (17:30 y 18:30 Judo Kids & Juniors y BJJ Femenino) y noche para adultos y competición (19:30 y 20:45 Judo Olímpico y No-Gi). ¡Tu primera clase de prueba es 100% gratis! Escríbenos por WhatsApp para reservar tu hueco en el horario que prefieras.",
      "faqs.q3": "¿Quién imparte las clases de Judo y quién las de BJJ?",
      "faqs.a3": "Las clases de Judo Olímpico e infantil están dirigidas personalmente por Salvador Cases (Olímpico en París 2024 y Subcampeón de Europa) y Carlos Cases (Maestro Nacional y Campeón de España en todas las categorías). Las clases de Brazilian Jiu-Jitsu están lideradas por Mirco Biscarini (@mibisjj), Cinturón Negro y Campeón de Europa de BJJ (Team Kurama / Team Kong), junto a Luis Planelles Mira, Cinturón Negro con más de 15 años de experiencia y especialista en BJJ infantil y desarrollo pedagógico.",
      "faqs.q4": "¿Puedo entrenar tanto Judo como BJJ con la misma cuota?",
      "faqs.a4": "¡Sí! Disponemos de tarifa plana combinada ilimitada para que puedas entrenar indistintamente tanto Judo Olímpico como Brazilian Jiu-Jitsu (con Gi y No-Gi Grappling), además de acceso libre a todas las sesiones de Tatami Abierto y Open Mat en nuestras dos plantas.",
      "faqs.q5": "¿Puedo empezar desde cero si nunca he hecho artes marciales?",
      "faqs.a5": "¡Por supuesto! El 70% de nuestros alumnos comienzan sin experiencia marcial previa. Nuestro método de enseñanza progresivo prioriza aprender a caer con seguridad (ukemi), el control biomecánico y el respeto entre compañeros, para disfrutar desde el primer día sin riesgo de lesiones.",
      "faqs.q6": "¿Dónde está ubicado el club en Alicante?",
      "faqs.a6": "Estamos en la Calle de Perú, 14 (Planta G), 03008 Alicante. Una ubicación excelente, con fácil acceso, zona de aparcamiento y muy buenas conexiones de transporte público.",

      "footer.coachingTeam": "JUDO & BJJ · EQUIPO TÉCNICO",
      "footer.tagline": "El nuevo templo de las artes marciales en Alicante, liderado por <strong>Salvador Cases</strong> (Olímpico París 2024), <strong>Carlos Cases</strong> (Maestro Nacional) y <strong class=\"text-red-400\">Mirco Biscarini</strong> (Campeón de Europa BJJ).",
      "footer.quote": "\"Jita Kyoei (Prosperidad mutua) · Seiryoku Zen'yo (Máxima eficacia con el mínimo esfuerzo)\"",
      "footer.navTitle": "Navegación",
      "footer.locTitle": "Ubicación & WhatsApp",
      "footer.address": "C/ de Perú, 14 (Planta G), 03008 Alicante",
      "footer.hours": "Horarios: Mañanas y Tardes (Lunes a Sábado)",
      "footer.rights": "© 2026 Club de Judo & BJJ Chidaoba · Salvador Cases, Carlos Cases & Mirco Biscarini. Todos los derechos reservados.",
      "footer.legal": "Aviso Legal",
      "footer.privacy": "Política de Privacidad",
      "footer.keywords": "Artes Marciales Alicante",

      "wa.online": "Salva, Carlos & Mirco · En línea",
      "wa.bubbleText": "👋 ¡Hola! ¿Tienes dudas sobre los horarios o clases de <strong>Judo o BJJ</strong>? Escríbenos para consultar turnos o reservar tu <strong class=\"text-white\">clase de prueba</strong> sin compromiso.",
      "wa.bubbleBtn": "Chatear por WhatsApp ahora"
    },

    en: {
      "page.title": "CHIDAOBA | Olympic Judo & Brazilian Jiu-Jitsu Club in Alicante",
      "page.metaDesc": "CHIDAOBA Olympic Judo & Brazilian Jiu-Jitsu (BJJ) Club in Alicante: Salvador Cases (Paris 2024 Olympian), Carlos Cases, and Mirco Biscarini. View official timetable and book a trial class.",

      "announcement.text": "<strong class=\"text-white font-black\">CHIDAOBA</strong>: Olympic Judo and Brazilian Jiu-Jitsu · C/ de Perú, 14 (Alicante)",
      "announcement.cta": "View Class Timetable →",
      "nav.club": "The Club",
      "nav.coaches": "Coaches",
      "nav.disciplines": "Disciplines",
      "nav.facility": "Facility",
      "nav.schedule": "Timetable",
      "nav.mobileCta": "Chat with Coaches",

      "hero.badge1": "OLYMPIC JUDO & BJJ",
      "hero.badge2": "📍 Alicante · C/ de Perú, 14 (Ground Floor)",
      "hero.titlePre": "SPORTS CLUB",
      "hero.titleSuffix": "OLYMPIC JUDO &",
      "hero.subtitle": "The premier combat and grappling center founded by brothers <strong>Salvador Cases</strong> (Paris 2024 Olympian, European Silver Medalist) and <strong>Carlos Cases</strong> (Spanish Champion & National Master), alongside BJJ masters <strong class=\"text-red-400\">Mirco Biscarini</strong> (@mibisjj) and <strong>Luis Planelles</strong> in Alicante.",
      "hero.stripTitle": "Open Classes · All Levels Welcome",
      "hero.stripDesc": "Beginners, kids, adults, and competition coached by Olympic athletes",
      "hero.stripCta": "View Timetable →",
      "hero.ctaTrial": "Claim Your Free Trial Class",
      "hero.ctaSchedule": "View Class Timetable",
      "hero.trust1": "No-obligation free trial session",
      "hero.trust2": "From beginner to competitive elite",
      "hero.trust3": "2 Official Tatamis (100m² + 70m²)",
      "hero.photoBadge": "REAL COMPETITION PHOTO",
      "hero.photoRole": "Paris 2024 Olympian · European Silver Medalist",
      "hero.schedBadge": "CLASS TIMETABLE",
      "hero.schedMornings": "Morning Shifts",
      "hero.schedMorningsDesc": "Open Mat, Gi & No-Gi",
      "hero.schedAfternoons": "Afternoon & Evening Shifts",
      "hero.schedAfternoonsDesc": "BJJ Gi, No-Gi & Women",
      "hero.schedDays": "Monday to Saturday",
      "hero.schedFullGrid": "View full schedule →",

      "countdown.badge": "COUNTDOWN · OCTOBER 5TH OPENING",
      "countdown.title": "THE TATAMI OPENS ITS DOORS IN:",
      "countdown.subtitle": "We are completing the new dojo facilities in Alicante to open on October 5th. Reserve your spot before classes begin.",
      "countdown.days": "Days",
      "countdown.hours": "Hours",
      "countdown.minutes": "Min",
      "countdown.seconds": "Sec",
      "countdown.progressText": "Facility preparation progress: <strong class=\"text-white\">88%</strong>",
      "countdown.spotsText": "Spots: 38/50 reserved",
      "countdown.schedLink": "View Class Timetable →",

      "about.badge": "ELITE COACHING STAFF IN ALICANTE",
      "about.title": "THE COACHES",
      "about.subtitle": "Four martial arts authorities unite to offer the most advanced Judo and Brazilian Jiu-Jitsu training in Spain: brothers Salvador Cases and Carlos Cases together with BJJ masters Mirco Biscarini and Luis Planelles.",
      "about.paris2024": "PARIS 2024",
      "about.salvaRole": "HEAD COACH · OLYMPIC JUDO",
      "about.salvaSubtitle": "European Silver Medalist · Ne-Waza Specialist",
      "about.salvaBio": "Paris 2024 Olympian and World Judo Tour medalist (–73 kg). His aggressive attacking style and elite ground game spearhead the throwing and submission methodology at Chidaoba.",
      "about.salvaAchievements": "Key Achievements:",
      "about.salvaPalm1Title": "Paris 2024 Olympic Games",
      "about.salvaPalm1Tag": "Olympian",
      "about.salvaPalm2Title": "2023 European Championships",
      "about.salvaPalm2Tag": "European Silver",
      "about.salvaPalm3Title": "Grand Slam Circuit (IJF World Tour)",
      "about.salvaPalm3Tag": "Grand Slam",
      "about.salvaPalm4Title": "International Grand Prix",
      "about.salvaPalm4Tag": "Grand Prix",
      "about.salvaQuote": "\"Competitive judo executed with the highest level of rigor and real-world efficiency.\"",

      "about.carlosRole": "TECHNICAL DIRECTOR · NATIONAL MASTER",
      "about.carlosSubtitle": "National Master · Spanish National Champion",
      "about.carlosBio": "Pedagogical cornerstone and Salvador's elder brother. Spanish Champion across all divisions (U-15, U-17, U-21, and Senior) who has developed dozens of black belts and champions in Alicante.",
      "about.carlosSpecialties": "Specialties:",
      "about.carlosPalm1Title": "Spanish Championships (All categories)",
      "about.carlosPalm1Tag": "Grand Champion",
      "about.carlosPalm2Title": "Spanish National Team",
      "about.carlosPalm2Tag": "International",
      "about.carlosPalm3Title": "Chidaoba Sports Director",
      "about.carlosPalm3Tag": "Head Coach",
      "about.carlosPalm4Title": "Strength & Conditioning",
      "about.carlosPalm4Tag": "Conditioning",
      "about.carlosQuote": "\"Forging athletes and people with respect, moral character, and unrelenting perseverance.\"",

      "about.mircoRole": "HEAD COACH BRAZILIAN JIU-JITSU",
      "about.mircoSubtitle": "BJJ Black Belt · Team Kurama",
      "about.mircoBio": "European Champion and elite competitor across the IBJJF and AJP Tour circuit. Specialist in Gi BJJ and No-Gi Grappling, pressure passing, and high-percentage submissions.",
      "about.mircoTitles": "Titles & Honors:",
      "about.mircoPalm1Title": "European BJJ Championship",
      "about.mircoPalm1Tag": "European Gold",
      "about.mircoPalm2Title": "Spain BJJ Tour 2026",
      "about.mircoPalm2Tag": "National Silver",
      "about.mircoPalm3Title": "Europe Cup BJJ 2025 & World Cup 2025",
      "about.mircoPalm3Tag": "World Podium",
      "about.mircoPalm4Title": "Spain Cup BJJ Gi 2021",
      "about.mircoPalm4Tag": "Spain Cup Gold",
      "about.mircoQuote": "\"Jiu-Jitsu is physical chess where flawless technique always overcomes sheer strength.\"",

      "about.luisRole": "BJJ INSTRUCTOR · KIDS SPECIALIST",
      "about.luisSubtitle": "BJJ Black Belt · 15+ Years Experience",
      "about.luisBio": "With over 15 years on the mats and a Brazilian Jiu-Jitsu Black Belt, Luis leads the youth (Kids) and adult instructional program. Specialist in martial pedagogy, discipline, respect, and motor skill development for future champions.",
      "about.luisSpecialties": "Specialties:",
      "about.luisPalm1Title": "15+ Years of BJJ Experience",
      "about.luisPalm1Tag": "Faixa Preta",
      "about.luisPalm2Title": "Youth & Kids BJJ Specialist",
      "about.luisPalm2Tag": "Kids Coach",
      "about.luisPalm3Title": "Motor Skills & Discipline",
      "about.luisPalm3Tag": "Pedagogy",
      "about.luisPalm4Title": "Self Defense & Core Grappling",
      "about.luisPalm4Tag": "Grappling",
      "about.luisQuote": "\"Discipline, respect, and joy on the mats forge lifelong self-confidence.\"",

      "about.galleryBadge": "OFFICIAL GALLERY",
      "about.galleryTitle": "Real Moments of Competition and Training",
      "about.badgePhoto1": "National Success",
      "about.caption1": "Salvador Cases at the top of the Spanish National podium",
      "about.badgePhoto2": "Grand Prix Final",
      "about.caption2": "Fighting for gold on the World Judo Tour circuit",
      "about.badgePhoto3": "World Cup BJJ",
      "about.caption3": "Mirco Biscarini in official high-level competition",
      "about.badgePhoto4": "Tatami Chidaoba",
      "about.caption4": "New facility at C/ de Perú, 14 (Ground Floor)",

      "disciplines.badge": "OUR MARTIAL ARTS CURRICULUM",
      "disciplines.title": "DISCIPLINES TAUGHT AT",
      "disciplines.subtitle": "A comprehensive combat curriculum spanning Olympic standing throws to total ground control and submissions, structured for all ages and skill levels.",
      "disciplines.bannerBadge": "TRAINING PHILOSOPHY",
      "disciplines.quote": "\"On the feet I throw you with Judo. On the ground I submit you with BJJ.\"",
      "disciplines.quoteAuthor": "Total Combat Philosophy · Chidaoba Alicante",
      "disciplines.allLevels": "All levels",
      "disciplines.learnHeading": "What you will learn",
      "disciplines.recommendedLabel": "Recommended for:",
      
      "disciplines.d1Name": "Olympic Judo (Tachi-Waza & Ne-Waza)",
      "disciplines.d1Badge": "Olympic Martial Art",
      "disciplines.d1Subtitle": "The power of the throw and maximum grip mastery",
      "disciplines.d1Desc": "Direct Olympic training methodology from the Cases brothers. Master the biomechanics of clean throws, off-balancing (kuzushi), safe falling, and lethal transitions.",
      "disciplines.d1F1": "Ukemi: the art of falling safely without injuries",
      "disciplines.d1F2": "Olympic throws: Uchi-Mata, Seoi-Nage, Harai-Goshi",
      "disciplines.d1F3": "Tactical Kumi-Kata (complete lapel and sleeve control)",
      "disciplines.d1F4": "Immediate standing-to-ground pins and submissions",
      "disciplines.d1Ideal": "Adults and youth looking for power, agility, elite throws, and martial discipline.",
      "disciplines.d1Cta": "Ask for Olympic Judo schedules",

      "disciplines.d2Name": "Brazilian Jiu-Jitsu (BJJ Gi & No-Gi)",
      "disciplines.d2Badge": "Grappling & BJJ",
      "disciplines.d2Subtitle": "The gentle art and the chess of submissions on the mat",
      "disciplines.d2Desc": "The world's most technical ground fighting martial art. Learn to control, reverse, and submit opponents of any size through leverage, joint locks, and chokes.",
      "disciplines.d2F1": "Gi BJJ: positional control, lapels, and joint locks",
      "disciplines.d2F2": "No-Gi Grappling: speed, body-lock wrestling, and submissions",
      "disciplines.d2F3": "Guard passes, sweeps, and high-percentage submissions",
      "disciplines.d2F4": "Progressive technical sparring with total mutual respect",
      "disciplines.d2Ideal": "Anyone seeking intelligent self-defense, peak conditioning, and ground fluency.",
      "disciplines.d2Cta": "Ask for Brazilian Jiu-Jitsu schedules",

      "disciplines.d3Name": "Chidaoba Kids & Juniors (Ages 4 to 15)",
      "disciplines.d3Badge": "Kids & Youth Academy",
      "disciplines.d3Subtitle": "Timeless values, psychomotor skills, respect, and anti-bullying",
      "disciplines.d3Desc": "Martial youth pedagogy led by Carlos and Salvador Cases. We foster self-confidence, academic concentration, motor coordination, and fair play.",
      "disciplines.d3F1": "Judo Moral Code: Respect, Courtesy, Modesty, and Self-Control",
      "disciplines.d3F2": "Motor skills, balance, functional strength, and agility",
      "disciplines.d3F3": "Active anti-bullying defense (confidence without aggression)",
      "disciplines.d3F4": "Age-tailored groups (4-7, 8-11, and 12-15 years old)",
      "disciplines.d3Ideal": "Parents seeking holistic sports values and physical resilience for their children.",
      "disciplines.d3Cta": "Ask for Chidaoba Kids & Juniors schedules",

      "facility.badge": "OUR VENUE IN ALICANTE",
      "facility.title": "FACILITIES DESIGNED FOR",
      "facility.titleHighlight": "ELITE PERFORMANCE",
      "facility.subtitle": "Located at C/ de Perú, 14 (Ground Floor), 03008 Alicante. Two floors with 170 m² of certified tatami dedicated exclusively to Olympic judo and Brazilian jiu-jitsu.",
      "facility.matBadge": "OFFICIAL COMPETITION TATAMI",
      "facility.matTitle": "2 Official Competition Tatamis (100 m² + 70 m²)",
      "facility.matDesc": "Two floors with independent tatamis (100 m² ground floor and 70 m² mezzanine), shock-absorbing subfloor, and high-capacity climate control.",
      "facility.matStatLabel": "Dos Tatamis",
      "facility.matStatValue": "100 m² + 70 m²",
      "facility.f1Title": "Ground Floor Tatami (100 m²)",
      "facility.f1Desc": "100 m² of official competition tatami with impact-absorption subflooring for Olympic Judo and BJJ.",
      "facility.f2Title": "Mezzanine Tatami (70 m²)",
      "facility.f2Desc": "70 m² of independent tatami on the upper floor, designed for technical drills, randori, and specialized sessions.",
      "facility.f3Title": "Spacious & Modern Locker Rooms",
      "facility.f3Desc": "Individual private showers, personal lockers, and daily sanitization under the strictest hygiene standards.",
      "facility.f4Title": "C/ de Perú, 14 (Ground Floor), 03008 Alicante",
      "facility.f4Desc": "New Chidaoba headquarters in Alicante, featuring easy street parking, convenient ground-floor access, and excellent transit connections.",

      "schedule.badge": "PLAN YOUR WEEK",
      "schedule.title": "OFFICIAL TIMETABLE",
      "schedule.subtitle": "Olympic Judo, Brazilian Jiu-Jitsu (Gi & No-Gi), Kids, and Open Mat classes from Monday to Saturday coached by Salvador Cases, Carlos Cases, and Mirco Biscarini.",
      "schedule.badgeTrial": "<span class=\"w-2 h-2 rounded-full bg-emerald-500 animate-pulse\"></span><strong class=\"text-white\">Start today</strong> · Your first trial class is 100% free",
      "schedule.filterAll": "All Classes",
      "schedule.filterJudo": "🥋 Olympic Judo",
      "schedule.filterBjjGi": "🥋 BJJ Gi",
      "schedule.filterNoGi": "🤼 No-Gi",
      "schedule.filterKids": "👶 Judo Kids & Juniors",
      "schedule.filterWomen": "👩 Women's BJJ",
      "schedule.filterOpenMat": "✋ Open Mat",
      "schedule.viewDay": "📱 Day View",
      "schedule.viewTable": "🗓️ Weekly Table",
      "schedule.slotsCount": "7 time slots",
      "schedule.noClass": "No scheduled session",
      "schedule.bookBtn": "Book",
      "schedule.hoverBook": "Book →",
      "schedule.legendJudo": "Olympic Judo",
      "schedule.legendBjjGi": "BJJ Gi",
      "schedule.legendNoGi": "No-Gi",
      "schedule.legendWomen": "Women's BJJ",
      "schedule.legendKids": "Judo Kids",
      "schedule.legendOpenMat": "Open Mat",
      "schedule.legendNotice": "Click any class to book via WhatsApp",
      "schedule.bannerBadge": "SALVADOR & CARLOS CASES · MIRCO BISCARINI · LUIS PLANELLES",
      "schedule.bannerTitle": "START TODAY! YOUR FIRST CLASS IS 100% FREE",
      "schedule.bannerDesc": "Experience an Olympic Judo or Brazilian Jiu-Jitsu class at your preferred time. Come visit our tatami at <strong>C/ de Perú, 14 (Alicante)</strong>.",
      "schedule.bannerBtn": "Book Free Trial Class →",

      "faqs.badge": "FREQUENTLY ASKED QUESTIONS",
      "faqs.title": "EVERYTHING YOU NEED TO KNOW ABOUT CHIDAOBA",
      "faqs.q1": "Why is the club named 'Chidaoba'?",
      "faqs.a1": "'Chidaoba' is Georgia's ancient folk wrestling style, world-renowned for explosive grips and throws that heavily influenced modern Olympic judo. The Cases family chose this name for their Alicante martial arts center, integrating elite Olympic Judo, Brazilian Jiu-Jitsu (BJJ) with Mirco Biscarini, and high-performance grappling conditioning.",
      "faqs.q2": "What are the class schedules and how can I get started?",
      "faqs.a2": "We offer sessions across morning hours (09:30 Open Mat and 10:00 Olympic Judo / BJJ Gi / No-Gi), midday (15:00 BJJ), afternoon for children and youth (17:30 and 18:30 Judo Kids & Juniors and Women's BJJ), and evening for adults and competitive fighters (19:30 and 20:45 Olympic Judo & No-Gi). Your first trial class is 100% free! Message us on WhatsApp to book your spot.",
      "faqs.q3": "Who coaches the Judo classes and who coaches BJJ?",
      "faqs.a3": "Olympic and youth Judo classes are coached directly by Salvador Cases (Paris 2024 Olympian and European Silver Medalist) and Carlos Cases (National Master and Spanish Champion across all divisions). Brazilian Jiu-Jitsu classes are spearheaded by Mirco Biscarini (@mibisjj), Black Belt and European BJJ Champion (Team Kurama / Team Kong), alongside Luis Planelles Mira, Black Belt with over 15 years of experience and specialist in kids BJJ and pedagogical development.",
      "faqs.q4": "Can I train both Judo and BJJ under the same membership?",
      "faqs.a4": "Yes! We provide an all-inclusive membership giving you unlimited access to both Olympic Judo and Brazilian Jiu-Jitsu (Gi and No-Gi Grappling), plus open access to Open Mat and sparring sessions across both floors.",
      "faqs.q5": "Can I start from scratch if I have never practiced martial arts?",
      "faqs.a5": "Absolutely! 70% of our new members have no prior martial arts background. Our progressive teaching methodology focuses on safe falling technique (ukemi), biomechanical leverage, and mutual respect, ensuring a rewarding start free of injury risk.",
      "faqs.q6": "Where is the club located in Alicante?",
      "faqs.a6": "We are located at Calle de Perú, 14 (Ground Floor), 03008 Alicante. A prime central location with easy parking, ground-floor accessibility, and seamless public transit connections.",

      "footer.coachingTeam": "JUDO & BJJ · COACHING TEAM",
      "footer.tagline": "The premier martial arts academy in Alicante, led by <strong>Salvador Cases</strong> (Paris 2024 Olympian), <strong>Carlos Cases</strong> (National Master), and <strong class=\"text-red-400\">Mirco Biscarini</strong> (European BJJ Champion).",
      "footer.quote": "\"Jita Kyoei (Mutual welfare & benefit) · Seiryoku Zen'yo (Maximum efficiency with minimum effort)\"",
      "footer.navTitle": "Navigation",
      "footer.locTitle": "Location & WhatsApp",
      "footer.address": "C/ de Perú, 14 (Ground Floor), 03008 Alicante",
      "footer.hours": "Schedules: Mornings & Evenings (Monday to Saturday)",
      "footer.rights": "© 2026 Chidaoba Judo & BJJ Club · Salvador Cases, Carlos Cases & Mirco Biscarini. All rights reserved.",
      "footer.legal": "Legal Notice",
      "footer.privacy": "Privacy Policy",
      "footer.keywords": "Martial Arts Alicante",

      "wa.online": "Salva, Carlos & Mirco · Online",
      "wa.bubbleText": "👋 Hello! Have questions about schedules or classes in <strong>Judo or BJJ</strong>? Text us on WhatsApp to inquire or book your <strong class=\"text-white\">free trial class</strong> without commitment.",
      "wa.bubbleBtn": "Chat on WhatsApp Now"
    }
  };

  const slotNameTranslations = {
    en: {
      "TATAMI ABIERTO": "OPEN MAT",
      "BJJ GI": "BJJ GI",
      "CHIDAOBA KIDS": "CHIDAOBA KIDS",
      "CHIDAOBA JUNIORS": "CHIDAOBA JUNIORS",
      "NOGI": "NO-GI",
      "JUDO OLÍMPICO": "OLYMPIC JUDO",
      "JUDO BASE": "BASIC JUDO",
      "BJJ FEMENINO": "WOMEN'S BJJ",
      "NE-WAZA MASTER": "NE-WAZA MASTER",
      "JUDO TÉCNICO": "TECHNICAL JUDO",
      "BJJ FUNDAMENTALS": "BJJ FUNDAMENTALS",
      "JUDO RANDORI": "JUDO RANDORI",
      "OPEN MAT CHIDAOBA": "CHIDAOBA OPEN MAT",
      "GRAPPLING & LUCHA": "GRAPPLING & WRESTLING",
      "MASTERCLASS JUDO": "JUDO MASTERCLASS",
      "OPEN MAT SOCIAL": "SOCIAL OPEN MAT"
    },
    es: {
      "TATAMI ABIERTO": "TATAMI ABIERTO",
      "BJJ GI": "BJJ GI",
      "CHIDAOBA KIDS": "CHIDAOBA KIDS",
      "CHIDAOBA JUNIORS": "CHIDAOBA JUNIORS",
      "NOGI": "NOGI",
      "JUDO OLÍMPICO": "JUDO OLÍMPICO",
      "JUDO BASE": "JUDO BASE",
      "BJJ FEMENINO": "BJJ FEMENINO",
      "NE-WAZA MASTER": "NE-WAZA MASTER",
      "JUDO TÉCNICO": "JUDO TÉCNICO",
      "BJJ FUNDAMENTALS": "BJJ FUNDAMENTALS",
      "JUDO RANDORI": "JUDO RANDORI",
      "OPEN MAT CHIDAOBA": "OPEN MAT CHIDAOBA",
      "GRAPPLING & LUCHA": "GRAPPLING & LUCHA",
      "MASTERCLASS JUDO": "MASTERCLASS JUDO",
      "OPEN MAT SOCIAL": "OPEN MAT SOCIAL"
    }
  };

  const slotLabelTranslations = {
    en: {
      "Tatami Abierto & Warm Up": "Open Mat & Warm Up",
      "BJJ Todos los Niveles": "BJJ All Levels",
      "Judo Infantil (4-9 años)": "Kids Judo (Ages 4-9)",
      "Judo Juvenil (10-15 años)": "Youth Judo (Ages 10-15)",
      "Submission Grappling": "Submission Grappling",
      "Adultos & Competición (Salva Cases)": "Adults & Competition (Salva Cases)",
      "Tachi-Waza & Kumi-Kata": "Tachi-Waza & Kumi-Kata",
      "BJJ Turno Mediodía": "BJJ Midday Session",
      "Psicomotricidad & Caídas Seguras": "Motor Skills & Safe Falls",
      "Grupo Exclusivo Femenino": "Exclusive Women's Group",
      "BJJ Técnica & Sparring": "BJJ Technique & Sparring",
      "Judo Suelo & Transiciones": "Ground Judo & Transitions",
      "Grappling & Lucha Suelo": "Grappling & Ground Fighting",
      "Perfeccionamiento Marcial": "Martial Refinement",
      "BJJ con Kimono": "BJJ with Kimono (Gi)",
      "Adultos & Randori (Hnos. Cases)": "Adults & Randori (Cases Brothers)",
      "Derribos & Kuzushi Biomecánico": "Takedowns & Biomechanical Kuzushi",
      "Iniciación Adultos": "Adult Beginners",
      "Combates & Táctica de Élite": "Elite Sparring & Tactics",
      "BJJ Técnica & Roll": "BJJ Technique & Rolling",
      "Roll & Sparring Supervisado": "Supervised Roll & Sparring",
      "Competición & Táctica Multidisciplinar": "Competition & Multi-Style Tactics",
      "Tatami Abierto & Calentamiento": "Open Mat & Warm Up",
      "Hermanos Cases (Olímpico)": "Cases Brothers (Olympic)",
      "Comunidad Chidaoba (Judo & BJJ)": "Chidaoba Community (Judo & BJJ)"
    },
    es: {
      "Tatami Abierto & Warm Up": "Tatami Abierto & Warm Up",
      "BJJ Todos los Niveles": "BJJ Todos los Niveles",
      "Judo Infantil (4-9 años)": "Judo Infantil (4-9 años)",
      "Judo Juvenil (10-15 años)": "Judo Juvenil (10-15 años)",
      "Submission Grappling": "Submission Grappling",
      "Adultos & Competición (Salva Cases)": "Adultos & Competición (Salva Cases)",
      "Tachi-Waza & Kumi-Kata": "Tachi-Waza & Kumi-Kata",
      "BJJ Turno Mediodía": "BJJ Turno Mediodía",
      "Psicomotricidad & Caídas Seguras": "Psicomotricidad & Caídas Seguras",
      "Grupo Exclusivo Femenino": "Grupo Exclusivo Femenino",
      "BJJ Técnica & Sparring": "BJJ Técnica & Sparring",
      "Judo Suelo & Transiciones": "Judo Suelo & Transiciones",
      "Grappling & Lucha Suelo": "Grappling & Lucha Suelo",
      "Perfeccionamiento Marcial": "Perfeccionamiento Marcial",
      "BJJ con Kimono": "BJJ con Kimono",
      "Adultos & Randori (Hnos. Cases)": "Adultos & Randori (Hnos. Cases)",
      "Derribos & Kuzushi Biomecánico": "Derribos & Kuzushi Biomecánico",
      "Iniciación Adultos": "Iniciación Adultos",
      "Combates & Táctica de Élite": "Combates & Táctica de Élite",
      "BJJ Técnica & Roll": "BJJ Técnica & Roll",
      "Roll & Sparring Supervisado": "Roll & Sparring Supervisado",
      "Competición & Táctica Multidisciplinar": "Competición & Táctica Multidisciplinar",
      "Tatami Abierto & Calentamiento": "Tatami Abierto & Calentamiento",
      "Hermanos Cases (Olímpico)": "Hermanos Cases (Olímpico)",
      "Comunidad Chidaoba (Judo & BJJ)": "Comunidad Chidaoba (Judo & BJJ)"
    }
  };

  const dayTranslations = {
    es: {
      "Lunes": "Lunes", "Martes": "Martes", "Miércoles": "Miércoles",
      "Jueves": "Jueves", "Viernes": "Viernes", "Sábado": "Sábado"
    },
    en: {
      "Lunes": "Monday", "Martes": "Tuesday", "Miércoles": "Wednesday",
      "Jueves": "Thursday", "Viernes": "Friday", "Sábado": "Saturday"
    }
  };

  const daysShort = {
    es: ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"],
    en: ["MON", "TUE", "WED", "THU", "FRI", "SAT"]
  };

  const daysFull = {
    es: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };

  const waMessages = {
    es: {
      hero: "¡Hola Salva, Carlos y Mirco! Quiero consultar los horarios y solicitar una clase de prueba en CHIDAOBA Alicante.",
      banner: "¡Hola Salva, Carlos y Mirco! Quiero reservar mi PRIMERA CLASE GRATIS de Judo o BJJ en Chidaoba Alicante.",
      nav: "¡Hola! Quiero consultar los horarios de Judo y BJJ en CHIDAOBA y solicitar información sobre cómo empezar.",
      waBtn: "¡Hola Salva, Carlos y Mirco! Quiero consultar los horarios de Judo y BJJ en CHIDAOBA Alicante y solicitar una clase de prueba."
    },
    en: {
      hero: "Hello Salva, Carlos and Mirco! I would like to check the timetable and request a free trial class at CHIDAOBA Alicante.",
      banner: "Hello Salva, Carlos and Mirco! I want to book my FIRST FREE TRIAL CLASS of Judo or BJJ at Chidaoba Alicante.",
      nav: "Hello! I would like to check the Judo and BJJ timetable at CHIDAOBA and get details on how to get started.",
      waBtn: "Hello Salva, Carlos and Mirco! I would like to check the timetable for Judo and BJJ at CHIDAOBA Alicante and book a trial class."
    }
  };

  let currentLang = 'es';

  function cleanStr(s) {
    if (!s) return '';
    return s.replace(/&amp;/g, '&').trim();
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    const dict = translations[lang] || translations.es;

    // Document title and meta description
    if (dict["page.title"]) {
      document.title = dict["page.title"];
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["page.metaDesc"]) {
      metaDesc.setAttribute('content', dict["page.metaDesc"]);
    }

    // 1. Update text & HTML nodes matching data-i18n / data-i18n-html
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 2. Update dynamic slot names and labels across timetable (mobile cards & desktop table)
    document.querySelectorAll('.slot-name-text[data-slot-name]').forEach((el) => {
      const origRaw = el.getAttribute('data-slot-name');
      const orig = cleanStr(origRaw);
      const targetMap = slotNameTranslations[lang] || slotNameTranslations.es;
      if (targetMap && targetMap[orig]) {
        el.textContent = targetMap[orig];
      } else {
        el.textContent = orig;
      }
    });

    document.querySelectorAll('.slot-label-text[data-slot-label]').forEach((el) => {
      const origRaw = el.getAttribute('data-slot-label');
      const orig = cleanStr(origRaw);
      const targetMap = slotLabelTranslations[lang] || slotLabelTranslations.es;
      if (targetMap && targetMap[orig]) {
        el.textContent = targetMap[orig];
      } else {
        el.textContent = orig;
      }
    });

    // 3. Update day buttons on mobile and table headers
    const dayBtns = document.querySelectorAll('.day-tab-btn');
    dayBtns.forEach((btn, idx) => {
      const span = btn.querySelector('span') || btn;
      if (daysShort[lang] && daysShort[lang][idx]) {
        span.textContent = daysShort[lang][idx];
      }
    });

    const dayHeaders = document.querySelectorAll('.day-table-header');
    dayHeaders.forEach((th, idx) => {
      if (daysFull[lang] && daysFull[lang][idx]) {
        th.textContent = daysFull[lang][idx];
      }
    });

    const dayPanelTitles = document.querySelectorAll('.day-panel h3');
    dayPanelTitles.forEach((h3, idx) => {
      if (daysFull[lang] && daysFull[lang][idx]) {
        h3.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-red-600"></span> ${daysFull[lang][idx]}`;
      }
    });

    const hourTh = document.querySelector('#full-table-view th');
    if (hourTh) {
      hourTh.textContent = lang === 'en' ? 'TIME' : 'HORA';
    }

    // 4. Update WhatsApp booking links on every slot card (desktop table & mobile view)
    const waPhone = "34600000000";
    document.querySelectorAll('[data-wa-slot]').forEach((linkEl) => {
      const rawSlotName = linkEl.getAttribute('data-wa-slot-name') || linkEl.getAttribute('data-slot-name');
      const slotNameClean = cleanStr(rawSlotName);
      const rawDay = linkEl.getAttribute('data-slot-day');
      const time = linkEl.getAttribute('data-slot-time') || '';

      const slotMap = slotNameTranslations[lang] || slotNameTranslations.es;
      const dayMap = dayTranslations[lang] || dayTranslations.es;

      const translatedName = slotMap[slotNameClean] || slotNameClean;
      const translatedDay = dayMap[rawDay] || rawDay;

      let msg = '';
      if (lang === 'en') {
        msg = `Hello! I would like to book my free trial class for ${translatedName} (${translatedDay} at ${time}) at Chidaoba Alicante.`;
      } else {
        msg = `¡Hola! Quiero reservar mi clase gratis de ${slotNameClean} (${rawDay} a las ${time}) en Chidaoba Alicante.`;
      }
      linkEl.href = `https://wa.me/${waPhone}?text=${encodeURIComponent(msg)}`;
      if (linkEl.hasAttribute('title')) {
        linkEl.setAttribute('title', lang === 'en' ? `Book ${translatedName} - ${translatedDay} ${time}` : `Reservar ${slotNameClean} - ${rawDay} ${time}`);
      }
    });

    // 5. Update main static WhatsApp buttons
    const waHero = document.getElementById('hero-wa-btn');
    if (waHero) {
      waHero.href = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMessages[lang].hero)}`;
    }
    const waBanner = document.getElementById('banner-wa-btn');
    if (waBanner) {
      waBanner.href = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMessages[lang].banner)}`;
    }
    const waNavbar = document.getElementById('navbar-wa-btn');
    if (waNavbar) {
      waNavbar.href = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMessages[lang].nav)}`;
    }
    const waMobile = document.getElementById('mobile-wa-btn');
    if (waMobile) {
      waMobile.href = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMessages[lang].nav)}`;
    }
    const waBubbleBtn = document.getElementById('wa-bubble-link');
    if (waBubbleBtn) {
      waBubbleBtn.href = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMessages[lang].waBtn)}`;
    }
    const waMainBtn = document.getElementById('wa-main-link');
    if (waMainBtn) {
      waMainBtn.href = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMessages[lang].waBtn)}`;
    }

    // 6. Update the single Toggle Button active pill state
    const pillEs = document.getElementById('lang-pill-es');
    const pillEn = document.getElementById('lang-pill-en');
    if (pillEs && pillEn) {
      if (lang === 'es') {
        pillEs.className = 'flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-black transition-all duration-200 bg-red-600 text-white shadow-sm';
        pillEn.className = 'flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-bold transition-all duration-200 text-zinc-400 hover:text-zinc-200';
      } else {
        pillEs.className = 'flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-bold transition-all duration-200 text-zinc-400 hover:text-zinc-200';
        pillEn.className = 'flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-black transition-all duration-200 bg-red-600 text-white shadow-sm';
      }
    }

    try {
      localStorage.setItem('chidaoba_lang', lang);
    } catch (e) {}
  }

  function toggleLanguage() {
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    applyLanguage(nextLang);
  }

  window.toggleChidaobaLanguage = toggleLanguage;

  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('lang-toggle-btn');
    const pillEs = document.getElementById('lang-pill-es');
    const pillEn = document.getElementById('lang-pill-en');

    if (pillEs) {
      pillEs.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentLang !== 'es') applyLanguage('es');
      });
    }

    if (pillEn) {
      pillEn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentLang !== 'en') applyLanguage('en');
      });
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        toggleLanguage();
      });
    }

    // Check saved preference or default to Spanish
    let initialLang = 'es';
    try {
      const saved = localStorage.getItem('chidaoba_lang');
      if (saved === 'en' || saved === 'es') {
        initialLang = saved;
      }
    } catch (e) {}

    applyLanguage(initialLang);
  });
})();
