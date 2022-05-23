import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCardPageComponent } from './wild-card-page.component';

describe('WildCardPageComponent', () => {
  let component: WildCardPageComponent;
  let fixture: ComponentFixture<WildCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
