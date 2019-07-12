export const environment = {
  production: true,
  api: {
    /* --------------All Base URLs----------------------*/
    // Project,
    baseProject: 'http://106.51.32.211:9090/project/',
    // User,
    baseUser: 'http://106.51.32.211:9090/user/',
    // Vendor,
    baseVendor: 'http://106.51.32.211:9090/vendor/',
    // Candidate,
    baseCandidate: 'http://106.51.32.211:9090/candidate/',

    /* --------------All End Points----------------------*/
    endPoints: {
      // Projects,
      getAllProjects: 'findAllProjects', // Get All Projects
      addProject: 'createProject', // Add New Project
      getProjectTypes: 'projectTypes', // Get All Project Types
      getProjectStatus: 'projectStatus', // Get All Project Status

      // Vendors,
      getAllVendors: 'findAllVendors', // Get All Vendors

      // Candidates,
      getAllCandidates: 'findAllCandidates', // Get All Candidates

      // User
      validateUser: 'validateUser'
    }
  }
};
