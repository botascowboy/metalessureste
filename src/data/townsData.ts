export interface TownData {
  slug: string
  name: string
  province: string
  description: string
  longDescription: string
  services: string[]
  features: string[]
  images: {
    src: string
    alt: string
  }[]
  testimonial?: {
    quote: string
    author: string
    location: string
  }
  lat: number
  lng: number
  mapQuery: string
}

export const townsData: TownData[] = [
  {
    "slug": "huercal-overa",
    "name": "Huércal-Overa",
    "province": "Almería",
    "description": "towns_data.huercal-overa.description",
    "longDescription": "towns_data.huercal-overa.longDescription",
    "services": [
      "towns_data.huercal-overa.services.0",
      "towns_data.huercal-overa.services.1",
      "towns_data.huercal-overa.services.2",
      "towns_data.huercal-overa.services.3",
      "towns_data.huercal-overa.services.4",
      "towns_data.huercal-overa.services.5"
    ],
    "features": [
      "towns_data.huercal-overa.features.0",
      "towns_data.huercal-overa.features.1",
      "towns_data.huercal-overa.features.2",
      "towns_data.huercal-overa.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        "alt": "Estructura metálica industrial"
      }
    ],
    "testimonial": {
      "quote": "towns_data.huercal-overa.testimonial.quote",
      "author": "José García",
      "location": "towns_data.huercal-overa.testimonial.location"
    },
    "lat": 37.3875,
    "lng": -1.9439,
    "mapQuery": "Hu%C3%A9rcal-Overa%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "vera",
    "name": "Vera",
    "province": "Almería",
    "description": "towns_data.vera.description",
    "longDescription": "towns_data.vera.longDescription",
    "services": [
      "towns_data.vera.services.0",
      "towns_data.vera.services.1",
      "towns_data.vera.services.2",
      "towns_data.vera.services.3",
      "towns_data.vera.services.4",
      "towns_data.vera.services.5"
    ],
    "features": [
      "towns_data.vera.features.0",
      "towns_data.vera.features.1",
      "towns_data.vera.features.2",
      "towns_data.vera.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1525570665650-76bb26af503d?q=80",
        "alt": "Edificio con carpintería de aluminio"
      }
    ],
    "testimonial": {
      "quote": "towns_data.vera.testimonial.quote",
      "author": "María López",
      "location": "towns_data.vera.testimonial.location"
    },
    "lat": 37.2481,
    "lng": -1.8633,
    "mapQuery": "Vera%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "overa",
    "name": "Overa",
    "province": "Almería",
    "description": "towns_data.overa.description",
    "longDescription": "towns_data.overa.longDescription",
    "services": [
      "towns_data.overa.services.0",
      "towns_data.overa.services.1",
      "towns_data.overa.services.2",
      "towns_data.overa.services.3",
      "towns_data.overa.services.4",
      "towns_data.overa.services.5"
    ],
    "features": [
      "towns_data.overa.features.0",
      "towns_data.overa.features.1",
      "towns_data.overa.features.2",
      "towns_data.overa.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1662624915046-02d9d4ee724d",
        "alt": "Estructura de invernadero"
      }
    ],
    "testimonial": {
      "quote": "towns_data.overa.testimonial.quote",
      "author": "Antonio Martínez",
      "location": "towns_data.overa.testimonial.location"
    },
    "lat": 37.3622,
    "lng": -1.9711,
    "mapQuery": "Overa%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "vera-playa",
    "name": "Vera Playa",
    "province": "Almería",
    "description": "towns_data.vera-playa.description",
    "longDescription": "towns_data.vera-playa.longDescription",
    "services": [
      "towns_data.vera-playa.services.0",
      "towns_data.vera-playa.services.1",
      "towns_data.vera-playa.services.2",
      "towns_data.vera-playa.services.3",
      "towns_data.vera-playa.services.4",
      "towns_data.vera-playa.services.5"
    ],
    "features": [
      "towns_data.vera-playa.features.0",
      "towns_data.vera-playa.features.1",
      "towns_data.vera-playa.features.2",
      "towns_data.vera-playa.features.3"
    ],
    "images": [
      {
        "src": "https://plus.unsplash.com/premium_photo-1661906854568-8964f58ed859",
        "alt": "Apartamentos en la costa"
      }
    ],
    "testimonial": {
      "quote": "towns_data.vera-playa.testimonial.quote",
      "author": "Carmen Ruiz",
      "location": "towns_data.vera-playa.testimonial.location"
    },
    "lat": 37.2069,
    "lng": -1.8325,
    "mapQuery": "Vera+Playa%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "puerto-rey",
    "name": "Puerto Rey",
    "province": "Almería",
    "description": "towns_data.puerto-rey.description",
    "longDescription": "towns_data.puerto-rey.longDescription",
    "services": [
      "towns_data.puerto-rey.services.0",
      "towns_data.puerto-rey.services.1",
      "towns_data.puerto-rey.services.2",
      "towns_data.puerto-rey.services.3",
      "towns_data.puerto-rey.services.4",
      "towns_data.puerto-rey.services.5"
    ],
    "features": [
      "towns_data.puerto-rey.features.0",
      "towns_data.puerto-rey.features.1",
      "towns_data.puerto-rey.features.2",
      "towns_data.puerto-rey.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1662624919582-007c57fdc3dd",
        "alt": "Trabajo de metal"
      }
    ],
    "testimonial": {
      "quote": "towns_data.puerto-rey.testimonial.quote",
      "author": "Pedro Sánchez",
      "location": "towns_data.puerto-rey.testimonial.location"
    },
    "lat": 37.2139,
    "lng": -1.8289,
    "mapQuery": "Puerto+Rey%2C+Vera%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "garrucha",
    "name": "Garrucha",
    "province": "Almería",
    "description": "towns_data.garrucha.description",
    "longDescription": "towns_data.garrucha.longDescription",
    "services": [
      "towns_data.garrucha.services.0",
      "towns_data.garrucha.services.1",
      "towns_data.garrucha.services.2",
      "towns_data.garrucha.services.3",
      "towns_data.garrucha.services.4",
      "towns_data.garrucha.services.5"
    ],
    "features": [
      "towns_data.garrucha.features.0",
      "towns_data.garrucha.features.1",
      "towns_data.garrucha.features.2",
      "towns_data.garrucha.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1765728614194-881a2a837b97",
        "alt": "Puerto pesquero"
      }
    ],
    "testimonial": {
      "quote": "towns_data.garrucha.testimonial.quote",
      "author": "Francisco Navarro",
      "location": "towns_data.garrucha.testimonial.location"
    },
    "lat": 37.1836,
    "lng": -1.8247,
    "mapQuery": "Garrucha%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "villaricos",
    "name": "Villaricos",
    "province": "Almería",
    "description": "towns_data.villaricos.description",
    "longDescription": "towns_data.villaricos.longDescription",
    "services": [
      "towns_data.villaricos.services.0",
      "towns_data.villaricos.services.1",
      "towns_data.villaricos.services.2",
      "towns_data.villaricos.services.3",
      "towns_data.villaricos.services.4",
      "towns_data.villaricos.services.5"
    ],
    "features": [
      "towns_data.villaricos.features.0",
      "towns_data.villaricos.features.1",
      "towns_data.villaricos.features.2",
      "towns_data.villaricos.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1579424098101-7249e9009151",
        "alt": "Carpintería metálica"
      }
    ],
    "testimonial": {
      "quote": "towns_data.villaricos.testimonial.quote",
      "author": "Ana Fernández",
      "location": "towns_data.villaricos.testimonial.location"
    },
    "lat": 37.2389,
    "lng": -1.7981,
    "mapQuery": "Villaricos%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "mojacar",
    "name": "Mojácar",
    "province": "Almería",
    "description": "towns_data.mojacar.description",
    "longDescription": "towns_data.mojacar.longDescription",
    "services": [
      "towns_data.mojacar.services.0",
      "towns_data.mojacar.services.1",
      "towns_data.mojacar.services.2",
      "towns_data.mojacar.services.3",
      "towns_data.mojacar.services.4",
      "towns_data.mojacar.services.5"
    ],
    "features": [
      "towns_data.mojacar.features.0",
      "towns_data.mojacar.features.1",
      "towns_data.mojacar.features.2",
      "towns_data.mojacar.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1769394002578-3a3e359130bd",
        "alt": "Trabajo de forja"
      }
    ],
    "testimonial": {
      "quote": "towns_data.mojacar.testimonial.quote",
      "author": "Isabel Torres",
      "location": "towns_data.mojacar.testimonial.location"
    },
    "lat": 37.1428,
    "lng": -1.8508,
    "mapQuery": "Moj%C3%A1car%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "palomares",
    "name": "Palomares",
    "province": "Almería",
    "description": "towns_data.palomares.description",
    "longDescription": "towns_data.palomares.longDescription",
    "services": [
      "towns_data.palomares.services.0",
      "towns_data.palomares.services.1",
      "towns_data.palomares.services.2",
      "towns_data.palomares.services.3",
      "towns_data.palomares.services.4",
      "towns_data.palomares.services.5"
    ],
    "features": [
      "towns_data.palomares.features.0",
      "towns_data.palomares.features.1",
      "towns_data.palomares.features.2",
      "towns_data.palomares.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1605317039225-0001f706cdef",
        "alt": "Carpintería metálica"
      }
    ],
    "testimonial": {
      "quote": "towns_data.palomares.testimonial.quote",
      "author": "Miguel Hernández",
      "location": "towns_data.palomares.testimonial.location"
    },
    "lat": 37.2317,
    "lng": -1.8072,
    "mapQuery": "Palomares%2C+Cuevas+del+Almanzora%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "cuevas-de-almanzora",
    "name": "Cuevas de Almanzora",
    "province": "Almería",
    "description": "towns_data.cuevas-de-almanzora.description",
    "longDescription": "towns_data.cuevas-de-almanzora.longDescription",
    "services": [
      "towns_data.cuevas-de-almanzora.services.0",
      "towns_data.cuevas-de-almanzora.services.1",
      "towns_data.cuevas-de-almanzora.services.2",
      "towns_data.cuevas-de-almanzora.services.3",
      "towns_data.cuevas-de-almanzora.services.4",
      "towns_data.cuevas-de-almanzora.services.5"
    ],
    "features": [
      "towns_data.cuevas-de-almanzora.features.0",
      "towns_data.cuevas-de-almanzora.features.1",
      "towns_data.cuevas-de-almanzora.features.2",
      "towns_data.cuevas-de-almanzora.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1680034733365-ad7263988417",
        "alt": "Carpintería industrial"
      }
    ],
    "testimonial": {
      "quote": "towns_data.cuevas-de-almanzora.testimonial.quote",
      "author": "Roberto Jiménez",
      "location": "towns_data.cuevas-de-almanzora.testimonial.location"
    },
    "lat": 37.2975,
    "lng": -1.8808,
    "mapQuery": "Cuevas+de+Almanzora%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "albox",
    "name": "Albox",
    "province": "Almería",
    "description": "towns_data.albox.description",
    "longDescription": "towns_data.albox.longDescription",
    "services": [
      "towns_data.albox.services.0",
      "towns_data.albox.services.1",
      "towns_data.albox.services.2",
      "towns_data.albox.services.3",
      "towns_data.albox.services.4",
      "towns_data.albox.services.5"
    ],
    "features": [
      "towns_data.albox.features.0",
      "towns_data.albox.features.1",
      "towns_data.albox.features.2",
      "towns_data.albox.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1759691555010-7f3f8674d2f2",
        "alt": "Carpintería metálica local"
      }
    ],
    "testimonial": {
      "quote": "towns_data.albox.testimonial.quote",
      "author": "Laura Gómez",
      "location": "towns_data.albox.testimonial.location"
    },
    "lat": 37.3819,
    "lng": -2.1503,
    "mapQuery": "Albox%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  },
  {
    "slug": "zurgena",
    "name": "Zurgena",
    "province": "Almería",
    "description": "towns_data.zurgena.description",
    "longDescription": "towns_data.zurgena.longDescription",
    "services": [
      "towns_data.zurgena.services.0",
      "towns_data.zurgena.services.1",
      "towns_data.zurgena.services.2",
      "towns_data.zurgena.services.3",
      "towns_data.zurgena.services.4",
      "towns_data.zurgena.services.5"
    ],
    "features": [
      "towns_data.zurgena.features.0",
      "towns_data.zurgena.features.1",
      "towns_data.zurgena.features.2",
      "towns_data.zurgena.features.3"
    ],
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1758565811272-e79917ca0adc",
        "alt": "Trabajo de metal rural"
      }
    ],
    "testimonial": {
      "quote": "towns_data.zurgena.testimonial.quote",
      "author": "Juan Pérez",
      "location": "towns_data.zurgena.testimonial.location"
    },
    "lat": 37.3478,
    "lng": -2.0167,
    "mapQuery": "Zurgena%2C+Almer%C3%ADa%2C+Espa%C3%B1a"
  }
]

export const getTownBySlug = (slug: string): TownData | undefined => {
  return townsData.find(town => town.slug === slug)
}

export const getAllTownSlugs = (): string[] => {
  return townsData.map(town => town.slug)
}
