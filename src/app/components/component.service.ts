import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export class ComponentService {
  // Base URL
  baseProject = environment.api.baseProject; // "Project"
  baseVendor = environment.api.baseVendor; // "Vendor"

  endPointUrl = environment.api.endPoints; // Common End Point URL

  constructor(private httpClient: HttpClient) {}

  getAllProjects() {
    return this.httpClient.get(
      this.baseProject + this.endPointUrl.getAllProjects
    );
  }
  addProject(projectInfo) {
    return this.httpClient.post(
      this.baseProject + this.endPointUrl.getAllProjects,
      projectInfo
    );
  }

  getAllVendors() {
    return this.httpClient.get(
      this.baseVendor + this.endPointUrl.getAllVendors
    );
  }
}
