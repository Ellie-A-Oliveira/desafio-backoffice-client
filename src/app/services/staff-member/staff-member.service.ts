import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { StaffMember } from 'src/app/models/staff-member/staff-member';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffMemberService extends BaseHttpService<StaffMember> {
  private readonly uri = `/api/${environment.transactionMonitorApiVersion}/staff-member`;

  constructor(protected override readonly http: HttpClient) {
    super(http);
  }

  public getStaffMembers(): Observable<StaffMember[]> {
    return this.getAll(this.uri);
  }

  public getStaffMember(staffId: string): Observable<StaffMember> {
    return this.get(`${this.uri}/${staffId}`);
  }

  public createStaffMember(staffMember: StaffMember): Observable<string> {
    return this.post(this.uri, staffMember);
  }

  public updateStaffMember(staffMember: StaffMember): Observable<string> {
    return this.put(`${this.uri}/${staffMember.staffId}`, staffMember);
  }

  public deleteStaffMember(staffId: string): Observable<void> {
    return this.delete(`${this.uri}/${staffId}`);
  }
}
