import { PriceRepository } from "../repositories/priceRepository";

export class GetAllPrices {
    constructor (
        readonly priceRepository: PriceRepository
    ) {}

    async execute() {
        return this.priceRepository.getAll();
    }
}