import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhivesComponent } from './arhives.component';

describe('ArhivesComponent', () => {
  let component: ArhivesComponent;
  let fixture: ComponentFixture<ArhivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArhivesComponent]
    });
    fixture = TestBed.createComponent(ArhivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
