export interface UserInfo {
  name: string;
}

export interface AuthProviderInformation {
  setUser: (info: UserInfo) => void;
  user?: UserInfo;
  init: boolean;
}
