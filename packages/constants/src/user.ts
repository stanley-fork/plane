export enum EAuthenticationPageType {
  STATIC = "STATIC",
  NOT_AUTHENTICATED = "NOT_AUTHENTICATED",
  AUTHENTICATED = "AUTHENTICATED",
}

export enum EInstancePageType {
  PRE_SETUP = "PRE_SETUP",
  POST_SETUP = "POST_SETUP",
}

export enum EUserStatus {
  ERROR = "ERROR",
  AUTHENTICATION_NOT_DONE = "AUTHENTICATION_NOT_DONE",
  NOT_YET_READY = "NOT_YET_READY",
}

export type TUserStatus = {
  status: EUserStatus | undefined;
  message?: string;
};

export enum EUserPermissionsLevel {
  WORKSPACE = "WORKSPACE",
  PROJECT = "PROJECT",
}

export enum EUserWorkspaceRoles {
  ADMIN = 20,
  MEMBER = 15,
  GUEST = 5,
}

export enum EUserProjectRoles {
  ADMIN = 20,
  MEMBER = 15,
  GUEST = 5,
}
