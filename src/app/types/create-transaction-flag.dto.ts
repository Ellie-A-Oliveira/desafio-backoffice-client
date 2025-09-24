import { TransactionFlagType } from "../models/transaction-flag/transaction-flag";

export type CreateTransactionFlagDto = {
    type: TransactionFlagType;
    reason: string;
};