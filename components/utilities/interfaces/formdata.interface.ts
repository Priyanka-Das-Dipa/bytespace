export interface FormData {
  fullName: string;
  email: string;
  password: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  general?: string;
}
