import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickeventComponent } from './clickevent.component';

describe('ClickeventComponent', () => {
  let component: ClickeventComponent;
  let fixture: ComponentFixture<ClickeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickeventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
