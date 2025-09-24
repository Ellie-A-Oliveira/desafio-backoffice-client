export class StaffMember {
    staffId: string;
    fullName: string;
    email: string;
    role: string;
    status: string;

    constructor(staffId: string, fullName: string, email: string, role: string, status: string) {
        this.staffId = staffId;
        this.fullName = fullName;
        this.email = email;
        this.role = role;
        this.status = status;
    }
}