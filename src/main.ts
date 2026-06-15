import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { Component, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideTaiga, TuiRoot } from '@taiga-ui/core';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'root',
  imports: [App, TuiRoot],
  template: '<tui-root> <app/> </tui-root>',
})
class Root {}

bootstrapApplication(Root, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter([]),
    provideTaiga(),
    {
      provide: 'Pythons',
      useValue: ['John Cleese', 'Eric Idle', 'Michael Palin', 'Graham Chapman', 'Terry Gilliam', 'Terry Jones'],
    },
  ],
}).catch((err) => console.error(err));
