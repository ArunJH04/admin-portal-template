export interface Projects {
  projectId?: number;
  title?: string;
  lineOfBusiness?: string;
  businessUnit?: string;
  projectType?: string;
  projectStatus?: string;
  startDate: Date;
  endDate?: Date;
  budget: number;
  location: string;
  dateCreated: Date;
  dateModified: Date;
  enteredBy: string;
  vendors: { 1: string; 2: string };
  projectFileName: string;
  projectFileDesc: string;
  projectScope: string;
}
