import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class LoginService {
  // Base URL
  baseUser = environment.api.baseUser; // "User"

  endPointUrl = environment.api.endPoints; // Common End Point URL

  constructor(private httpClient: HttpClient) {}

  authenticateUser(data) {
    return this.httpClient.post(this.baseUser + this.endPointUrl.validateUser, data);
  }
}
