import { Submission } from "./submission";

export class Price {
    constructor (
        readonly id: number,
        readonly product: string,
        readonly quantity: number,
        readonly open: boolean,
        readonly submissions: Submission[]
    ) {}
}