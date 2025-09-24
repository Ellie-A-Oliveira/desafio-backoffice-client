export type CreateTransactionFlagDto = {
    type: 'FRAUD_SUSPECT' | 'AML_CHECK' | 'HIGH_VALUE' | 'UNUSUAL_BEHAVIOR' | 'MANUAL_REVIEW';
    reason: string;
};