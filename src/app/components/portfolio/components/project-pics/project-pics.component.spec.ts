import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPicsComponent } from './project-pics.component';

describe('ProjectPicsComponent', () => {
  let component: ProjectPicsComponent;
  let fixture: ComponentFixture<ProjectPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
