import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfleComponent } from './user-profle.component';

describe('UserProfleComponent', () => {
  let component: UserProfleComponent;
  let fixture: ComponentFixture<UserProfleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
