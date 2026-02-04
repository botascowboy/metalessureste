const fs = require('fs');
const path = require('path');

const locksmith24hData = [
    {
        slug: 'huercal-overa',
        metaTitle: 'Cerrajero 24 Horas en Huércal-Overa | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Huércal-Overa, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 15-30 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Huércal-Overa',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Somos tu cerrajero de confianza en Huércal-Overa. Ofrecemos servicios de cerrajería urgente las 24 horas: apertura de puertas, cambio de cerraduras, instalación de cerraduras de seguridad and atención inmediata ante cualquier emergencia. Profesionales cualificados con años de experiencia en la comarca.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Apertura de cajas fuertes',
            'Cerraduras para comunidades',
            'Puertas blindadas y acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 15-30 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '15-30 minutos'
    },
    {
        slug: 'vera',
        metaTitle: 'Cerrajero 24 Horas en Vera | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Vera, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 15-30 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Vera',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Tu cerrajero de emergencia en Vera. Atendemos urgencias de cerrajería a cualquier hora: aperturas de puertas sin daños, sustitución de cerraduras, refuerzo de seguridad and todo tipo de servicios de cerrajería. Cobertura en todo el municipio de Vera and alrededores.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Apertura de cajas fuertes',
            'Cerraduras para comunidades',
            'Puertas blindadas y acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 15-30 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '15-30 minutos'
    },
    {
        slug: 'overa',
        metaTitle: 'Cerrajero 24 Horas en Overa | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Overa, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 20-35 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Overa',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Cerrajeros profesionales en Overa con servicio de urgencias 24 horas. Resolvemos cualquier problema con tu cerradura de forma rápida y eficaz: aperturas, cambios, reparaciones and mejoras de seguridad. Atención inmediata garantizada.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Apertura de cajas fuertes',
            'Cerraduras para comunidades',
            'Puertas blindadas y acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 20-35 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '20-35 minutos'
    },
    {
        slug: 'vera-playa',
        metaTitle: 'Cerrajero 24 Horas en Vera Playa | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Vera Playa, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 15-30 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Vera Playa',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Cerrajero de emergencias en Vera Playa. Especializados en aperturas de apartamentos, hoteles and viviendas turísticas. Servicio rápido and discreto las 24 horas. Cobertura completa en toda la zona costera.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Cerrajería para hoteles and apartamentos',
            'Cerraduras para comunidades',
            'Puertas blindadas and acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 15-30 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '15-30 minutos'
    },
    {
        slug: 'puerto-rey',
        metaTitle: 'Cerrajero 24 Horas en Puerto Rey | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Puerto Rey, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 15-30 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Puerto Rey',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Servicio de cerrajería urgente en Puerto Rey. Atendemos emergencias en viviendas, apartamentos turísticos and locales comerciales. Respuesta rápida and profesional a cualquier hora del día o la noche.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Cerrajería para apartamentos turísticos',
            'Cerraduras para comunidades',
            'Puertas blindadas and acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 15-30 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '15-30 minutos'
    },
    {
        slug: 'garrucha',
        metaTitle: 'Cerrajero 24 Horas en Garrucha | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Garrucha, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 15-25 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Garrucha',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Cerrajeros de confianza en Garrucha. Ofrecemos soluciones inmediatas para cualquier emergencia de cerrajería: aperturas sin daños, cambios de cerraduras, instalación de sistemas de seguridad and mucho más.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Apertura de cajas fuertes',
            'Cerraduras para comunidades',
            'Puertas blindadas and acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 15-25 minutos',
            'Sin daños en su puerta',
            "Presupuesto sin compromiso",
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '15-25 minutos'
    },
    {
        slug: 'villaricos',
        metaTitle: 'Cerrajero 24 Horas en Villaricos | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Villaricos, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 20-35 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Villaricos',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Tu cerrajero 24 horas en Villaricos. Especialistas en aperturas de emergencia and seguridad para el hogar. Llegamos rápidamente a tu ubicación para resolver cualquier problema con tu cerradura.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Apertura de cajas fuertes',
            'Cerraduras para comunidades',
            'Puertas blindadas and acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 20-35 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '20-35 minutos'
    },
    {
        slug: 'mojacar',
        metaTitle: 'Cerrajero 24 Horas en Mojácar | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Mojácar, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 15-25 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Mojácar',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Cerrajería de urgencias en Mojácar pueblo and playa. Atendemos hoteles, apartamentos turísticos and viviendas particulares. Servicio rápido, profesional and con garantía. Disponibles todos los días del año.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Cerrajería para hoteles',
            'Cerraduras para comunidades',
            'Puertas blindadas and acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 15-25 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '15-25 minutos'
    },
    {
        slug: 'palomares',
        metaTitle: 'Cerrajero 24 Horas en Palomares | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Palomares, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 15-30 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Palomares',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Cerrajeros profesionales en Palomares con atención 24 horas. Resolvemos emergencias de cerrajería de forma rápida and eficiente: aperturas, cambios de cerraduras, reparaciones and sistemas de seguridad.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Apertura de cajas fuertes',
            'Cerraduras para comunidades',
            'Puertas blindadas and acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 15-30 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '15-30 minutos'
    },
    {
        slug: 'cuevas-de-almanzora',
        metaTitle: 'Cerrajero 24 Horas en Cuevas de Almanzora | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Cuevas de Almanzora, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 20-35 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Cuevas de Almanzora',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Servicio de cerrajería urgente en Cuevas de Almanzora and pedanías. Profesionales con amplia experiencia en todo tipo de cerraduras and sistemas de seguridad. Atención inmediata las 24 horas.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Apertura de cajas fuertes',
            'Cerraduras para comunidades',
            'Puertas blindadas and acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 20-35 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '20-35 minutos'
    },
    {
        slug: 'albox',
        metaTitle: 'Cerrajero 24 Horas en Albox | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Albox, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 25-40 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Albox',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Cerrajeros de emergencia en Albox. Ofrecemos servicios de cerrajería urgente para viviendas, comercios e industrias. Profesionales cualificados con respuesta rápida ante cualquier situación.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Apertura de cajas fuertes',
            'Cerraduras para comunidades',
            'Puertas blindadas and acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 25-40 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '25-40 minutos'
    },
    {
        slug: 'zurgena',
        metaTitle: 'Cerrajero 24 Horas en Zurgena | Urgencias ☎ Disponible Ya',
        metaDescription: 'Cerrajero de urgencias 24h en Zurgena, Almería. Apertura de puertas, cambio de cerraduras, cerrajería urgente. Llegamos en 20-35 minutos. Llama ahora.',
        heroTitle: 'Cerrajero 24 Horas en Zurgena',
        heroSubtitle: 'Servicio de cerrajería urgente disponible las 24 horas del día, los 365 días del año',
        description: 'Tu cerrajero de confianza en Zurgena. Servicio de urgencias 24 horas para todo tipo de problemas con cerraduras: aperturas, cambios, reparaciones e instalación de sistemas de alta seguridad.',
        services: [
            'Apertura de puertas urgente',
            'Cambio de cerraduras de seguridad',
            'Reparación de cerraduras',
            'Instalación de bombillos antibumping',
            'Apertura de cajas fuertes',
            'Cerraduras para comunidades',
            'Puertas blindadas and acorazadas',
            'Amaestramiento de llaves'
        ],
        emergencyFeatures: [
            'Disponibilidad 24/7',
            'Llegada en 20-35 minutos',
            'Sin daños en su puerta',
            'Presupuesto sin compromiso',
            'Profesionales certificados',
            'Garantía en todos los trabajos'
        ],
        responseTime: '20-35 minutos'
    }
];

const esLocksmith = {};
const newLocksmithData = locksmith24hData.map(town => {
    const slug = town.slug;
    esLocksmith[slug] = {
        metaTitle: town.metaTitle,
        metaDescription: town.metaDescription,
        heroTitle: town.heroTitle,
        heroSubtitle: town.heroSubtitle,
        description: town.description,
        services: town.services,
        emergencyFeatures: town.emergencyFeatures,
        responseTime: town.responseTime
    };

    const newTown = { ...town };
    newTown.metaTitle = `locksmith_24h_data.${slug}.metaTitle`;
    newTown.metaDescription = `locksmith_24h_data.${slug}.metaDescription`;
    newTown.heroTitle = `locksmith_24h_data.${slug}.heroTitle`;
    newTown.heroSubtitle = `locksmith_24h_data.${slug}.heroSubtitle`;
    newTown.description = `locksmith_24h_data.${slug}.description`;
    newTown.services = town.services.map((_, i) => `locksmith_24h_data.${slug}.services.${i}`);
    newTown.emergencyFeatures = town.emergencyFeatures.map((_, i) => `locksmith_24h_data.${slug}.emergencyFeatures.${i}`);
    newTown.responseTime = `locksmith_24h_data.${slug}.responseTime`;

    return newTown;
});

const esJsonPath = path.join(__dirname, '../src/locales/es.json');
const esJson = JSON.parse(fs.readFileSync(esJsonPath, 'utf8'));
esJson.locksmith_24h_data = esLocksmith;
fs.writeFileSync(esJsonPath, JSON.stringify(esJson, null, 2));

console.log('Updated es.json with locksmith data');
console.log('---EN_LOCKSMITH_DATA---');
console.log(JSON.stringify(esLocksmith, null, 2));
console.log('---EN_LOCKSMITH_END---');
console.log('---NEW_LOCKSMITH_DATA---');
console.log(JSON.stringify(newLocksmithData, null, 2));
console.log('---NEW_LOCKSMITH_END---');
