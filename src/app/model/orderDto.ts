import { ProductDto } from "./productDto";

export class OrderDto  {
    id?: string;
    costumerId: number;
    productAmount : {Product: ProductDto , amount: number}[];
  
    constructor(order : OrderDto) {
      this.id = order.id;
      this.costumerId = order.costumerId;
      this.productAmount = order.productAmount;
    }
  }