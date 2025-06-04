import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsContentsComponent } from './cms-contents.component';

describe('CmsContentsComponent', () => {
  let component: CmsContentsComponent;
  let fixture: ComponentFixture<CmsContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsContentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
