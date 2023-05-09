import { CreatePriceDTO } from "../../DTOs/createPriceDTO";
import { Price } from "../../entities/price";
import { PriceRepository } from "../priceRepository";

export class InMemoryPriceRepository implements PriceRepository {
    private prices: Price[] = [];

    async save (input: CreatePriceDTO) : Promise<void> {
        const  {product, quantity} = input;
        const id = this.prices.length + 1;
        const price = new Price(
            id,
            product,
            quantity,
            true,
            []
        );
        this.prices.push(price);
    }

    async get(id: number) : Promise<Price> {
        const price = this.prices.find((price => price.id === id));
        if (!price) {
            throw {message: `Price with id ${id} wasn't found`};
        }
        return price;
    }
}