import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedTaskComponent } from './edited-task.component';

describe('EditedTaskComponent', () => {
  let component: EditedTaskComponent;
  let fixture: ComponentFixture<EditedTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditedTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
