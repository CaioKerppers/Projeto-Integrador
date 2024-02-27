import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparelhosComponent } from './aparelhos.component';

describe('AparelhosComponent', () => {
  let component: AparelhosComponent;
  let fixture: ComponentFixture<AparelhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AparelhosComponent]
    });
    fixture = TestBed.createComponent(AparelhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
