import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetitlesComponent } from './thetitles.component';

describe('ThetitlesComponent', () => {
  let component: ThetitlesComponent;
  let fixture: ComponentFixture<ThetitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThetitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThetitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
