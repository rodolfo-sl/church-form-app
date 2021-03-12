import { Conection } from './../conection';
import { MemberService } from '../member.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from '../member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})
export class MemberCreateComponent implements OnInit {

  public memberForm: FormGroup = this.fb.group({});
  public conectionGroup: Array<Conection> = []

  constructor(private fb: FormBuilder, private memberService: MemberService, private router: Router) { }

  ngOnInit(): void {
    this.memberService.readConections().subscribe((gc) => {
      this.conectionGroup = gc;
      console.log('gc', this.conectionGroup);
    })
    this.initialValues();
  }

  public createMember(): void {
    this.memberService.create(this.memberForm.value).subscribe(() => {
      this.initialValues();
      this.router.navigate(["/member-list"]);
      console.log('tocado', this.memberForm.get('name')?.touched);


    })
  }

  public initialValues() {
    this.memberForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(28)]],
      cel: ['', [Validators.required, Validators.minLength(11)]],
      address: ['', [Validators.required, Validators.minLength(1)]],
      age: ['', [Validators.required, Validators.minLength(2)]],
      conection: ['', [Validators.required]],
      visitor: false,
      status: true
    })
  }

}
