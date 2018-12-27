import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChoosyModule } from 'choosy';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './choosy-demo/autocomplete/autocomplete.component';
import { BasicButtonComponent } from './choosy-demo/basic-button/basic-button.component';
import { BasicSelectComponent } from './choosy-demo/basic-select/basic-select.component';
import { BasicComponent } from './choosy-demo/basic/basic.component';
import { CheckboxComponent } from './choosy-demo/checkbox/checkbox.component';
import { CustomTemplateComponent } from './choosy-demo/custom-template/custom-template.component';
import { GroupPageComponent } from './choosy-demo/group-page/group-page.component';
import { GroupComponent } from './choosy-demo/group/group.component';
import { IconicComponent } from './choosy-demo/iconic/iconic.component';
import { MultiselectComponent } from './choosy-demo/multiselect/multiselect.component';
import { PreviewComponent } from './choosy-demo/preview/preview.component';
import { ChoosyTestComponent } from './choosy-test/choosy-test.component';
import { SectionComponent } from './choosy-utils/section/section.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoosyTestComponent,
    HomeComponent,
    BasicComponent,
    MultiselectComponent,
    GroupComponent,
    AutocompleteComponent,
    CheckboxComponent,
    IconicComponent,
    PreviewComponent,
    BasicSelectComponent,
    BasicButtonComponent,
    SectionComponent,
    CustomTemplateComponent,
    GroupPageComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ChoosyModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
