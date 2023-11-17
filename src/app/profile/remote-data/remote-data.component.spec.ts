import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDataComponent } from './remote-data.component';

describe('RemoteDataComponent', () => {
  let component: RemoteDataComponent;
  let fixture: ComponentFixture<RemoteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
