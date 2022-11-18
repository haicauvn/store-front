import {AbstractModel} from "./abstractModel";
import * as Process from "process";


export type Product =  {
    id?: number,
    name: string,
    price: number,
    category: string,
}

export class ProductModel extends AbstractModel<Product> {
    constructor() {
        super('products');
    }

    async create(product: Product): Promise<Product> {
        const params = [product.name, product.price, product.category];
        const result = await this.runQuery(`INSERT INTO ${this.databaseName}(name, price, category) VALUES($1,$2,$3) RETURNING *`, params);
        return result.rows[0];
    }

}