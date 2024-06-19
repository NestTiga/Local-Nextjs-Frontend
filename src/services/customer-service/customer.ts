import { CustomerModel } from "app/models/customer";

export async function fetchCustomer(): Promise<CustomerModel[]> {
  const url = process.env.LOCAL_HOSTNAME + "api/v1/customer/findAll"; // Endpoint de la API: Customer-Nestor

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al traer el listado de clientes:", error);
    throw error;
  }
}
