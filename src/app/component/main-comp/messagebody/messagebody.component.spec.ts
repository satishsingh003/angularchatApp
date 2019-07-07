import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagebodyComponent } from './messagebody.component';

describe('MessagebodyComponent', () => {
  let component: MessagebodyComponent;
  let fixture: ComponentFixture<MessagebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
