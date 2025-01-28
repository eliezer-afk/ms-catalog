// catalogService.ts

export async function getCatalogFromDatabase() {
    // Lógica para obtener el catálogo de la base de datos
    const catalog = [
        // Ejemplo de datos del catálogo
        { id: 1, name: "Producto 1", price: 100 },
        { id: 2, name: "Producto 2", price: 200 },
    ];
    return catalog;
}
export default getCatalogFromDatabase;