import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDuckComponent } from './create-duck.component';

describe('CreateDuckComponent', () => {
  let component: CreateDuckComponent;
  let fixture: ComponentFixture<CreateDuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDuckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
