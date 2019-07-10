// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: {
    /* --------------All Base URLs----------------------*/
    // Project,
    baseProject: 'http://106.51.32.211:9090/project/',
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
      getAllCandidates: 'findAllCandidates' // Get All Candidates
    }
  }
};
