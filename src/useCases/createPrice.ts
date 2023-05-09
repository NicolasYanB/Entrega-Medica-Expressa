import { CreatePriceDTO } from "../DTOs/createPriceDTO";
import { PriceRepository } from "../repositories/priceRepository";

export class CreatePrice {
    constructor (
        readonly priceRepository : PriceRepository
    ) {}

    async execute (input: CreatePriceDTO) {
        await this.priceRepository.save(input);
    };
}