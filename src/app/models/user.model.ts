export interface User {
  id: number | null;
  name: string;
  username: string;
  email: string;
  phone: string;
  company: { name: string };
}
