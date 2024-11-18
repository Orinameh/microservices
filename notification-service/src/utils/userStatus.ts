// A singleton class for managing user's online/offline status
export class UserStatus {
  private static instance: UserStatus;
  private userStatuses: Record<string, boolean>;

  constructor() {
    this.userStatuses = {};
  }

  public static getInstance(): UserStatus {
    if (!UserStatus.instance) {
      UserStatus.instance = new UserStatus();
    }
    return UserStatus.instance;
  }

  setUserOnline(userId: string) {
    this.userStatuses[userId] = true;
  }

  setUserOffline(userId: string) {
    this.userStatuses[userId] = false;
  }

  isUserOnline(userId: string): boolean {
    return !!this.userStatuses[userId];
  }
}
