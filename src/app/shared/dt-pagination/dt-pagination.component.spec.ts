import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtPaginationComponent } from './dt-pagination.component';

describe('DtPaginationComponent', () => {
  let component: DtPaginationComponent;
  let fixture: ComponentFixture<DtPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
