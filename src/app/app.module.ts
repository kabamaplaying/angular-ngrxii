import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostService } from './post.service';
import { PostEffectService } from './post-effect.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostReducer } from './post.reducer';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment'; // Angular CLI environment
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule,
    StoreModule.forRoot({ posts: PostReducer }),
    EffectsModule.forRoot([PostEffectService]),
        StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [PostService, PostEffectService]
})
export class AppModule { }
