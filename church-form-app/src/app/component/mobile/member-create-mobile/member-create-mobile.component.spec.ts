import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCreateMobileComponent } from './member-create-mobile.component';

describe('MemberCreateMobileComponent', () => {
  let component: MemberCreateMobileComponent;
  let fixture: ComponentFixture<MemberCreateMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCreateMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCreateMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
