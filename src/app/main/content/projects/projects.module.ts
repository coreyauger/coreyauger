import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TranslateModule } from "@ngx-translate/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { AngularMaterialModule } from "./../../angular-material/angular-material.module";
import { ProjectsComponent } from "./projects.component";
import { GithubComponent } from "./github/github.component";
import { GithubDetailComponent } from "./github-detail/github-detail.component";
import { GithubService } from "../../../github.service";
import { MarkdownModule } from "ngx-markdown";

const routes = [
  {
    path: "project/:id",
    component: ProjectsComponent,
  },
  {
    path: "github",
    component: GithubComponent,
  },
  {
    path: "github/:id",
    component: GithubDetailComponent,
  },
];

@NgModule({
  declarations: [ProjectsComponent, GithubComponent, GithubDetailComponent],
  providers: [GithubService],
  imports: [
    RouterModule.forChild(routes),
    MarkdownModule.forRoot(),
    TranslateModule,
    FuseSharedModule,
    AngularMaterialModule,
  ],
  exports: [ProjectsComponent, GithubComponent, GithubDetailComponent],
})
export class ProjectsModule {}
