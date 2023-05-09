import {it, expect, describe, beforeAll} from 'vitest';
import { CreatePrice } from './createPrice';
import { PriceRepository } from '../repositories/priceRepository';
import { InMemoryPriceRepository } from '../repositories/inMemoryRepository/inMemoryPriceRepository';

describe('Create price use case', () => {
    let createPrice: CreatePrice;
    let priceRepository: PriceRepository;

    beforeAll(() => {
        priceRepository = new InMemoryPriceRepository();
        createPrice = new CreatePrice(priceRepository);
    })

    it('Should create a price', async () => {
        const input = {
            product: 'Máscara descartável',
            quantity: 1000
        };
        await createPrice.execute(input);
        const price = await priceRepository.get(1);
        expect(price.product).toBe('Máscara descartável');
    })
});