import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensaComponent } from './dispensa.component';
import { IntroduzioneComponent } from '../sezioni/introduzione/introduzione.component';

describe('DispensaComponent', () => {
  let component: DispensaComponent;
  let fixture: ComponentFixture<DispensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispensaComponent, IntroduzioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
