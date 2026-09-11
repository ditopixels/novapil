// Configuración de envíos de Novapil-MD. Origen de despacho: Tunja (Boyacá).
// Este archivo se puede editar directamente en GitHub sin tocar el resto del sitio.
//
// 1. "tiers": las tarifas disponibles (precio en pesos colombianos, sin puntos).
// 2. "departments": a qué tarifa pertenece cada departamento.
//    Los valores posibles son las claves de "tiers": regional, nacional, extendido, especial.
//    - regional:  Boyacá y departamentos vecinos con trayecto corto desde Tunja.
//    - nacional:  capitales y ciudades principales con cobertura estándar de transportadora.
//    - extendido: departamentos con trayecto largo o cobertura limitada.
//    - especial:  zonas de difícil acceso (envío aéreo o fluvial).
// 3. "defaultTier": tarifa que se usa si un departamento no aparece en la lista.

const SHIPPING = {
    tiers: {
        regional: { label: "Envío regional", price: 12000 },
        nacional: { label: "Envío nacional estándar", price: 16000 },
        extendido: { label: "Envío nacional extendido", price: 22000 },
        especial: { label: "Destino especial / difícil acceso", price: 30000 }
    },
    defaultTier: "nacional",
    departments: {
        "Amazonas": "especial",
        "Antioquia": "nacional",
        "Arauca": "extendido",
        "Atlántico": "nacional",
        "Bogotá D.C.": "regional",
        "Bolívar": "nacional",
        "Boyacá": "regional",
        "Caldas": "nacional",
        "Caquetá": "extendido",
        "Casanare": "regional",
        "Cauca": "nacional",
        "Cesar": "nacional",
        "Chocó": "extendido",
        "Córdoba": "nacional",
        "Cundinamarca": "regional",
        "Guainía": "especial",
        "Guaviare": "especial",
        "Huila": "nacional",
        "La Guajira": "extendido",
        "Magdalena": "nacional",
        "Meta": "nacional",
        "Nariño": "extendido",
        "Norte de Santander": "nacional",
        "Putumayo": "extendido",
        "Quindío": "nacional",
        "Risaralda": "nacional",
        "San Andrés y Providencia": "especial",
        "Santander": "regional",
        "Sucre": "nacional",
        "Tolima": "nacional",
        "Valle del Cauca": "nacional",
        "Vaupés": "especial",
        "Vichada": "especial"
    }
};
