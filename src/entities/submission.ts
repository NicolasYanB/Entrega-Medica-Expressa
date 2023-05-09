export class Submission {

    constructor (
        readonly id: number,
        readonly vendor: string,
        readonly brand: string,
        readonly unityPrice: number,
        readonly totalPrice: number,
        readonly delivereyDate: Date
    ) {}
}