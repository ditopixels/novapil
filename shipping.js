// Configuración de envíos de Novapil-MD.
// Este archivo se puede editar directamente en GitHub sin tocar el resto del sitio.
//
// 1. "tiers": las tarifas disponibles (precio en pesos colombianos, sin puntos).
// 2. "departments": a qué tarifa pertenece cada departamento.
//    Los valores posibles son las claves de "tiers": regional, nacional, extendido, especial.
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
        "Arauca": "nacional",
        "Atlántico": "nacional",
        "Bogotá D.C.": "nacional",
        "Bolívar": "nacional",
        "Boyacá": "nacional",
        "Caldas": "nacional",
        "Caquetá": "nacional",
        "Casanare": "nacional",
        "Cauca": "nacional",
        "Cesar": "nacional",
        "Chocó": "nacional",
        "Córdoba": "nacional",
        "Cundinamarca": "nacional",
        "Guainía": "especial",
        "Guaviare": "especial",
        "Huila": "nacional",
        "La Guajira": "nacional",
        "Magdalena": "nacional",
        "Meta": "nacional",
        "Nariño": "nacional",
        "Norte de Santander": "nacional",
        "Putumayo": "nacional",
        "Quindío": "nacional",
        "Risaralda": "nacional",
        "San Andrés y Providencia": "especial",
        "Santander": "nacional",
        "Sucre": "nacional",
        "Tolima": "nacional",
        "Valle del Cauca": "nacional",
        "Vaupés": "especial",
        "Vichada": "especial"
    }
};
