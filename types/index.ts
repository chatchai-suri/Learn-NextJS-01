export type FormState = SuccessFormState | ErrorFormState;

type SuccessFormState = {
  success: true;
  message?: string;
};

type ErrorFormState = {
  success: false;
  formData: FormData;
  error?: {
    email?: string[];
    firstName?: String[];
    age?: string[];
  };
  message: string;
};
