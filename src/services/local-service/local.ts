export async function fetchLocalStores(): Promise<any> {
  const url = process.env.LOCAL_HOSTNAME + 'api/v1/local/findAll'; // Endpoint de la API: Local-Nestor

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al traer el listado de locales:", error);
    throw error;
  }
}
