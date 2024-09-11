export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  gender: boolean;
  image: string;
  roleId: "Admin" | "Doctor" | "Patient";
  positionId: string;
}
