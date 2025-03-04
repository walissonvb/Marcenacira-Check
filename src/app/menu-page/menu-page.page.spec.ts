import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPagePage } from './menu-page.page';

describe('MenuPagePage', () => {
  let component: MenuPagePage;
  let fixture: ComponentFixture<MenuPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
