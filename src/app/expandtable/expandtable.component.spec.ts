import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandtableComponent } from './expandtable.component';

describe('ExpandtableComponent', () => {
  let component: ExpandtableComponent;
  let fixture: ComponentFixture<ExpandtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
