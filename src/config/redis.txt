import redis  from "../../../config/redis"; // Importa tu cliente Redis configurado
import { getCatalogFromDatabase } from "../services/catalogService"; // Ejemplo de servicio que interactúa con la base de datos

export async function getCatalog(req, res) {
    try {
        const cachedCatalog = await redis.get("catalog");

        if (cachedCatalog) {
            console.log("Catálogo obtenido desde Redis.");
            return res.json(JSON.parse(cachedCatalog));
        }

        // Si no está en Redis, obtenerlo de la base de datos
        const catalog = await getCatalogFromDatabase();

        // Guardar el catálogo en Redis durante 1 hora (3600 segundos)
        await redis.set("catalog", JSON.stringify(catalog), "EX", 3600);

        console.log("Catálogo guardado en Redis.");
        return res.json(catalog);
    } catch (error) {
        console.error("Error al obtener el catálogo:", error);
        return res.status(500).json({ error: "Error al obtener el catálogo." });
    }
}
