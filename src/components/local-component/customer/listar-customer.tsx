import { CustomerModel } from "app/models/customer";
import { fetchCustomer } from "app/services/customer-service";

export const ListarCustomer = async () => {
  const customers: CustomerModel[] = await fetchCustomer();

  return (
    <div>
      <h1>Listado de clientes</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.customerId}>
            <h1>Cliente: {customer.customerId}</h1>
            <p>{customer.firstName}</p>
            <p>{customer.lastName}</p>
            <p>{customer.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
