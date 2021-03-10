import { MemberService } from './../member.service';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Member } from '../member';

@Component({
  selector: 'app-member-read',
  templateUrl: './member-read.component.html',
  styleUrls: ['./member-read.component.scss']
})
export class MemberReadComponent implements OnInit {

  public members: Array<Member> = [];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.read().subscribe((members) => {
      this.members = members
      console.log('lista', this.members);
    })

  }

  drop(event: CdkDragDrop<string[]>) {
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
