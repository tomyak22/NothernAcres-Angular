import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCarouselComponent } from './feature-carousel.component';

describe('FeatureCarouselComponent', () => {
  let component: FeatureCarouselComponent;
  let fixture: ComponentFixture<FeatureCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
