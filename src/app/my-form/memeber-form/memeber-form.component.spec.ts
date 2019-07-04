import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeberFormComponent } from './memeber-form.component';

describe('MemeberFormComponent', () => {
  let component: MemeberFormComponent;
  let fixture: ComponentFixture<MemeberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
