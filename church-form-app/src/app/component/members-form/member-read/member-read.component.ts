import { MemberService } from './../member.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Member } from '../member';

@Component({
  selector: 'app-member-read',
  templateUrl: './member-read.component.html',
  styleUrls: ['./member-read.component.scss']
})
export class MemberReadComponent implements OnInit {

  public members: Array<Member> = [];
  public membersActive: Array<Member> = [];
  public membersInactive: Array<Member> = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.read().subscribe((members) => {
      this.members = members
      this.filterActiveEndInactive();
    });

  }

  public filterActiveEndInactive() {
    this.membersActive = this.members.filter((member) => member.status === true);
    this.membersInactive = this.members.filter((member) => member.status === false);
    this.membersActive.sort((a, b) => a.name.localeCompare(b.name));
    this.membersInactive.sort((a, b) => a.name.localeCompare(b.name));
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
