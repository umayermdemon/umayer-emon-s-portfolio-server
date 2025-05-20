export interface IAdmin {
  id: string;
  email: string;
  name: string;
  password: string;
  role: "super_admin";
  slug: string;
}
