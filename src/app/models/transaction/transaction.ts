
export enum TransactionChannel {
    ATM = 'ATM',
    ONLINE_BANKING = 'ONLINE_BANKING',
    MOBILE_APP = 'MOBILE_APP',
    BRANCH = 'BRANCH'
}

export enum TransactionStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    REJECTED = 'REJECTED',
    FLAGGED = 'FLAGGED',
    UNDER_REVIEW = 'UNDER_REVIEW'
}

export enum TransactionType {
    DEPOSIT = 'DEPOSIT',
    WITHDRAWAL = 'WITHDRAWAL',
    TRANSFER = 'TRANSER',
    PAYMENT = 'PAYMENT'
}

export class Transaction {
    transactionId: string;
    accountId: string;
    customerId: string;
    amount: number;
    currency: string;
    timestamp: Date;
    description: string;
    transactionType: TransactionType;
    status: TransactionStatus;
    channel: TransactionChannel;

    constructor(
        transactionId: string,
        accountId: string,
        customerId: string,
        amount: number,
        currency: string,
        timestamp: Date,
        description: string,
        transactionType: TransactionType,
        status: TransactionStatus,
        channel: TransactionChannel
    ) {
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