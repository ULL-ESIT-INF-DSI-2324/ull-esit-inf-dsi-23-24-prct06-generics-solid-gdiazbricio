export interface PrintableBill {
  setBill(newBill: Bill): void;
  print(): string;
}

export class Bill {
  constructor(
    public readonly client: string,
    public readonly provider: string,
    public readonly date: string,
    public readonly price: number,
    public readonly elements: string[]
  ) {}
}
