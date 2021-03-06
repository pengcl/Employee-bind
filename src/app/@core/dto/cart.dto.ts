import {ProductDto} from './product.dto';

export class CartDto {
  key?: string;
  productId: number; // ååid
  qty: number; // æ°é
}

export class AddCartInputDto extends CartDto {
  key: string;
}

export class CartProductDto extends ProductDto {
  specid?: number;
  totalprice: number;
  product_num: number;
}

export class RemarkCartDto {
  cartId: number;
  remark: string;
}

export class AddRemarkCartDto {
  key: string;
  cartId: number;
  remark: string;
}
