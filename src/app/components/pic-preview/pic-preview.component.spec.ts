import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicPreviewComponent } from './pic-preview.component';

describe('PicPreviewComponent', () => {
  let component: PicPreviewComponent;
  let fixture: ComponentFixture<PicPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
