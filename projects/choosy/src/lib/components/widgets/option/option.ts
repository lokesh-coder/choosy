import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ChoosyOption } from '../../../models';
import { OptionsService } from '../../../services';

@Component({
  selector: 'choosy-option-widget',
  templateUrl: 'option.html'
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionWidget implements OnInit {
  @Input() option: ChoosyOption;
  @Input() optionTpl: TemplateRef<any>;
  @ViewChild('defaultOptionTpl', { read: TemplateRef })
  defaultOptionTpl: TemplateRef<any>;
  @Output() hover: EventEmitter<any> = new EventEmitter();
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  constructor(private optionsService: OptionsService) {}
  ngOnInit() {
    this.optionTpl = this.optionTpl || this.defaultOptionTpl;
  }

  hoverStatus(option, status) {
    this.hover.emit({ option, status });
    // this.optionsService.updateOptionHoverState(option);
  }
}
