export interface TeamListType {
  teamId: number;
  teamName: string;
  teamInfo: string;
  createdAt: string;
  teamLocation: string;
  teamImg: string;
  activityDays: string[];
  teamMemberCount: number;
  members: MembersType[];
  latitude: number;
  longitude: number;
}

export interface MembersType {
  name: string;
  nickname: string;
  position: string;
  role: string;
  ageRange: string;
}

export interface SortedTeamListType {
  teamId: number;
  teamName: string;
  createdAt: string;
  teamLocation: string;
  teamImg: string;
  teamMemberCount: number;
  averageAge: number;
}
