export type UserType = {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  site_admin: false;
}

export default interface UserData {
  total_count: number,
  items: Array<UserType>
}