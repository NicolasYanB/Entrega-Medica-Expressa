import {it, expect, describe, beforeAll} from 'vitest';
import { InMemoryPriceRepository } from './inMemoryPriceRepository';
import { PriceRepository } from '../priceRepository';
import { Price } from '../../entities/price';


describe ('Create Price', () => {
    let priceRepository: PriceRepository;

    beforeAll(() => {
        priceRepository = new InMemoryPriceRepository();
    });

    it('Should create a price', async () => {
        const input = {
            product: 'mascara descartável',
            quantity: 1000
        };

        await priceRepository.save(input);
        const price = await priceRepository.get(1);
        expect(price).toBeInstanceOf(Price);
    });

    it('Should have 1 price in the list', async () => {
        const prices = await priceRepository.getAll();
        expect(prices.length).toBe(1);
    })
});