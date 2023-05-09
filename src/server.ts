import express from "express";
import { InMemoryPriceRepository } from "./repositories/inMemoryRepository/inMemoryPriceRepository";
import { CreatePrice } from "./useCases/createPrice";
import { GetAllPrices } from "./useCases/getAllPrices";

const PORT = 3030;
const app = express();
const priceRepository = new InMemoryPriceRepository();

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});

app.use(express.json());

app.post('/price', async (req, res) => {
    const createPrice = new CreatePrice(priceRepository);
    await createPrice.execute(req.body);
    res.send(200).end();
});

app.get('/prices', async (req, res) => {
    const getAllPrices = new GetAllPrices(priceRepository);
    const prices = await getAllPrices.execute();
    res.status(200).send(prices);
})
