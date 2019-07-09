import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export class ComponentService {
  baseUrl = environment.api.base;
  endPointUrl = environment.api.endPoints;
  constructor(private httpClient: HttpClient) {}

  getProjects() {
    return this.httpClient.get(this.baseUrl + this.endPointUrl.getProjects);
  }

  addProject(projectInfo) {
    return this.httpClient.post(
      this.baseUrl + this.endPointUrl.getProjects,
      projectInfo
    );
  }
}
