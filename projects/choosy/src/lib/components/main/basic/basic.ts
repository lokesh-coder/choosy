import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ConfigService, OptionsService } from '../../../services';
import { BASE_CONFIG, ChoosyBase } from '../base.class';

@Component({
  ...BASE_CONFIG,
  selector: 'choosy-basic',
  templateUrl: 'basic.html',
  styleUrls: ['./basic.scss']
})
export class Basic extends ChoosyBase implements OnInit {
  constructor(
    protected optionsService: OptionsService,
    protected configService: ConfigService,
    protected elRef: ElementRef,
    protected cdRef: ChangeDetectorRef
  ) {
    super(optionsService, configService, elRef, cdRef);
    console.log('test anno', this);
  }

  ngOnInit() {
    this.init();
    if (this.config.autoComplete.enable) {
      this.autoCompletion();
    }
    this.watchKeyPress();
    this.watchKeyboardActions();
  }

  ngOnDestroy() {
    this._cleanUp();
  }
}
