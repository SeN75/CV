import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsResumesComponent } from './cms-resumes.component';

describe('CmsResumesComponent', () => {
  let component: CmsResumesComponent;
  let fixture: ComponentFixture<CmsResumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsResumesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
