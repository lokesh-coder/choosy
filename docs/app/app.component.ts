import { Component } from '@angular/core';

export function Me(config): any {
  return function(target) {
    return Component({ ...config, age: 21 })(target);
  };
}

@Component({
  selector: 'doc-root',
  templateUrl: './app.component.html',
  styles: []
})
@Me({})
export class AppComponent {
  title = 'doc';
}
