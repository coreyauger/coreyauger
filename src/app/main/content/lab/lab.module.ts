import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TranslateModule } from "@ngx-translate/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { AngularMaterialModule } from "./../../angular-material/angular-material.module";
import { GithubService } from "../../../github.service";
import { MarkdownModule } from "ngx-markdown";
import { QuestionComponent } from "./question/question.component";
import { LabComponent } from "./lab.component";
import { QuestionDetailsComponent } from "./question-details/question-details.component";

const routes = [
  {
    path: "questions",
    component: QuestionComponent,
  },
  {
    path: "lab",
    component: LabComponent,
  },
  {
    path: "question/:id",
    component: QuestionDetailsComponent,
  },
];

@NgModule({
  declarations: [QuestionComponent, LabComponent, QuestionDetailsComponent],
  providers: [GithubService],
  imports: [
    RouterModule.forChild(routes),
    MarkdownModule.forRoot(),
    TranslateModule,
    FuseSharedModule,
    AngularMaterialModule,
  ],
  exports: [QuestionComponent, LabComponent],
})
export class LabModule {}
