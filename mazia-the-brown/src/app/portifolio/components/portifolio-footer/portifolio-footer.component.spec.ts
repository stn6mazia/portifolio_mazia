import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifolioFooterComponent } from './portifolio-footer.component';

describe('PortifolioFooterComponent', () => {
  let component: PortifolioFooterComponent;
  let fixture: ComponentFixture<PortifolioFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortifolioFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortifolioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
