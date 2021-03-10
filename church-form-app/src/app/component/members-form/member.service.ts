import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Member } from "./member";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root", })

export class MemberService {

  public baseUrl: string = 'http://localhost:3001/members'

  constructor( private http: HttpClient) {}

  public create(member: Member): Observable<Member> {
    return this.http.post<Member>(this.baseUrl, member).pipe(
      map((obj: any) => obj)
    )
  }
}
