interface IDiscount {
  type: "percentage" | "fixed";
  value: number;
}
interface IProduct {
  id: string | null;
  name: string | null;
  description: string | null;
  price: number;
  quantity: number;
  discount?: IDiscount;
}
export class Product {
  id: string | null = null;
  name: string | null = null;
  description: string | null = null;
  price: number = 0;
  quantity: number = 0;
  discount: null | IDiscount = null;
  constructor(payload: IProduct) {
    this.id = payload.id;
    this.name = payload.name;
    this.price = payload.price;
    this.description = payload.description;
    this.discount = payload.discount || null;
    this.quantity = payload.quantity || 0;
  }
  addQuantity(number: number) {
    this.quantity = this.quantity + number;
  }
  get total(): number {
    return this.quantity * this.price;
  }
  get priceAfterDiscount(): number {
    const discount = this.discount;
    console.log(discount, "ass");
    if (!discount) return this.price;
    const { type, value } = discount;

    switch (type) {
      case "percentage":
        return this.price * (1 - value / 100);
      case "fixed":
        return this.price - value;
    }
  }
}
