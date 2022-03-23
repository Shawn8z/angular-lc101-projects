import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeButtonComponent } from './joke-button.component';

describe('JokeButtonComponent', () => {
  let component: JokeButtonComponent;
  let fixture: ComponentFixture<JokeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
