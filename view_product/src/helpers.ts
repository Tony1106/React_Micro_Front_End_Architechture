import faker from "faker";
import { MProduct } from "shared_library";

export const mkProduct = (): MProduct => {
  return new MProduct({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.datatype.number(300),
    quantity: 1,
    discount: faker.datatype.boolean()
      ? {
          type: faker.datatype.boolean() ? "fixed" : "percentage",
          value: faker.datatype.number(50),
        }
      : null,
  });
};
