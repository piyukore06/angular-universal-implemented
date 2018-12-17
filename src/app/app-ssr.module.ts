import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ElementsComponent } from './elements/elements.component';

@NgModule({
  declarations: [
    // do not forget to remove the declarations for app ans element component
    // as they are already included in AppModule
  ],
  imports: [
    // AppModule has to be imported here
    AppModule,
    // ServerModule to run the code on Platform server
    ServerModule,
    // ModuleMapLoaderModule is needed for lazy loading to work
    // since we do not have any routes, it's being commented out
    // ModuleMapLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppSSRModule { }
