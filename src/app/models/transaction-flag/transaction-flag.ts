import { StaffMember } from "../staff-member/staff-member";
import { Transaction } from "../transaction/transaction";

export enum TransactionFlagSeverity {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    CRITICAL = 'CRITICAL'
}

export enum TransactionFlagType {
    FRAUD_SUSPECT = 'FRAUD_SUSPECT',
    AML_CHECK = 'AML_CHECK',
    HIGH_VALUE = 'HIGH_VALUE',
    UNUSUAL_BEHAVIOR = 'UNUSUAL_BEHAVIOR',
    MANUAL_REVIEW = 'MANUAL_REVIEW'
}

export enum TransactionFlagStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    RESOLVED = 'RESOLVED',
    ESCALATED = 'ESCALATED'
}

export class TransactionFlag {
    flagId: string;
    flagType: TransactionFlagType;
    reason: string;
    createdAt: Date;
    severity: TransactionFlagSeverity;
    status: TransactionFlagStatus;
    transaction: Transaction;
    createdBy: StaffMember;

    constructor(flagId: string, flagType: TransactionFlagType, reason: string, createdAt: Date, severity: TransactionFlagSeverity, status: TransactionFlagStatus, transaction: Transaction, createdBy: StaffMember) {
        this.flagId = flagId;
        this.flagType = flagType;
        this.reason = reason;
        this.createdAt = createdAt;
        this.severity = severity;
        this.status = status;
        this.transaction = transaction;
        this.createdBy = createdBy;
    }
}
