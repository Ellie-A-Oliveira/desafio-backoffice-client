export class Transaction {
    transactionId: string;
    accountId: string;
    customerId: string;
    amount: number;
    currency: string;
    timestamp: Date;
    description: string;
    transactionType: string;
    status: string;
    channel: string;

    constructor(transactionId: string, accountId: string, customerId: string, amount: number, currency: string, timestamp: Date, description: string, transactionType: string, status: string, channel: string) {
        this.transactionId = transactionId;
        this.accountId = accountId;
        this.customerId = customerId;
        this.amount = amount;
        this.currency = currency;
        this.timestamp = timestamp;
        this.description = description;
        this.transactionType = transactionType;
        this.status = status;
        this.channel = channel;
    }
}