export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  gender: "M" | "F" | "O";
  image: string;
  roleId: "R1" | "R2" | "R3";
  positionId: "P0" | "P1" | "P2" | "P3" | "P4";
}
