import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { ChildComponent } from './nuclearfamily/child/child.component';
import { ReviewComponent } from './review/review/review.component';
import { TitleComponent } from './review/title/title.component';
import { ThumbnailComponent } from './review/thumbnail/thumbnail.component';
import { DescriptionComponent } from './review/description/description.component';
import { DirectiveComponent } from './super-html/directive/directive.component';
import { InBuiltComponent } from './in-built/in-built.component';
import { BadrouteComponent } from './notfound/badroute/badroute.component';
import { ServicesComponent } from './Angularservices/services/services.component';
import { Consume1Component } from './Angularservices/consume1/consume1.component';
import { Consume2Component } from './Angularservices/consume2/consume2.component';
import { ChildcompComponent } from './Angularservices/childcomp/childcomp.component';
import { NospecComponent } from './delete/nospec/nospec.component';
import { TemplateformComponent } from './Forms/templateform/templateform.component';
import { ReactiveorModuleComponent } from './Forms/reactiveor-module/reactiveor-module.component';
import { AnimationComponent } from './animate/animation/animation.component';
import { RemoteComponent } from './restapi/remote/remote.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    ChildComponent,
    ReviewComponent,
    TitleComponent,
    ThumbnailComponent,
    DescriptionComponent,
    DirectiveComponent,
    InBuiltComponent,
    BadrouteComponent,
    ServicesComponent,
    Consume1Component,
    Consume2Component,
    ChildcompComponent,
    NospecComponent,
    TemplateformComponent,
    ReactiveorModuleComponent,
    AnimationComponent,
    RemoteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'pipes',
        pathMatch:'full'
      },
      {
        path:'family',
        component:FamilyComponent,
        children:[
          {
            path:'',
            redirectTo:'father',
            pathMatch:'full'
          },
          {
        path:'father',
        component:FatherComponent
        },
        {
          path:'mother',
          component:MotherComponent
          },
          {
            path:'children',
            component:ChildComponent
            },
            {
              path:'**',
              component:BadrouteComponent
            }
      ]

      },
      {
        path:'review',
        component:ReviewComponent
      },
      {
        path:'directive',
        component:DirectiveComponent
      },
      {
        path:'pipes',
        component:InBuiltComponent
      },
      {
        path:'services',
        component:ServicesComponent,
        children:[
          {
            path:'',
            redirectTo:'consume1',
            pathMatch:'full'
          },
          {
        path:'consume1',
        component:Consume1Component
        },
        {
          path:'consume2',
          component:Consume2Component
          }]
      },
      {
        path:'template',
        component:TemplateformComponent
      },
      {
        path:'reactive',
        component:ReactiveorModuleComponent
      },
      {
        path:'animate',
        component:AnimationComponent
      },
      {
        path:'remote',
        component:RemoteComponent
      },
      {
        path:'**',
        component:BadrouteComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
