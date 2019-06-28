import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberdisplayComponent } from './numberdisplay.component';

describe('NumberdisplayComponent', () => {
  let component: NumberdisplayComponent;
  let fixture: ComponentFixture<NumberdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
