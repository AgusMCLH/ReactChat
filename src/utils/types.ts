export type UserTypo = {
    name: string;
    role: string;
  } | null;
  
export type SetUserFn = React.Dispatch<React.SetStateAction<UserTypo>>;