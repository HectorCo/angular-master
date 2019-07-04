import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeberManagerComponent } from './memeber-manager.component';

describe('MemeberManagerComponent', () => {
  let component: MemeberManagerComponent;
  let fixture: ComponentFixture<MemeberManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeberManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeberManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
