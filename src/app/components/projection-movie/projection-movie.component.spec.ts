import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionMovieComponent } from './projection-movie.component';

describe('ProjectionMovieComponent', () => {
  let component: ProjectionMovieComponent;
  let fixture: ComponentFixture<ProjectionMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectionMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectionMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
