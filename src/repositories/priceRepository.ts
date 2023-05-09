import { CreatePriceDTO } from "../DTOs/createPriceDTO";
import { Price } from "../entities/price";

export interface PriceRepository {
    save (input : CreatePriceDTO) : Promise<void>;
    get (id: number) : Promise<Price>;
    getAll () : Promise<Price[]>;
}