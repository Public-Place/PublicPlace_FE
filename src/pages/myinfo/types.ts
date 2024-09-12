export interface UserInfoType {
  ageRange: string;
  createdAt: string;
  email: string;
  foot: string;
  gender: string;
  loginApproach: string;
  name: string;
  nickname: string;
  phoneNumber: string;
  position: string;
  profileImg: string;
  updatedAt: string;
  userId: number;
}

export interface AppliedTeamsType {
  teamId: number;
  teamName: string;
  teamImg: string;
  teamMembers: number;
  teamLocation: string;
  teamCreationDate: string;
}

export interface JoinedTeamsType {
  teamId: number;
  teamName: string;
  teamImg: string;
  teamMembers: number;
  teamLocation: string;
  teamCreationDate: string;
}

export interface CancleJoinTeamType {
  teamId: number;
  teamName: string;
}
