import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class VendorService {
  // Base URL
  baseVendor = environment.api.baseVendor; // "Vendor"
  baseCandidate = environment.api.baseCandidate; // "Candidate"

  endPointUrl = environment.api.endPoints; // Common End Point URL

  constructor(private httpClient: HttpClient) {}
  getAllVendors() {
    return this.httpClient.get(
      this.baseVendor + this.endPointUrl.getAllVendors
    );
  }
  getAllCandidates() {
    return this.httpClient.get(
      this.baseCandidate + this.endPointUrl.getAllCandidates
    );
  }
}
