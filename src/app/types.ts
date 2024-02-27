export interface NotificationRemind {
  id?: string;
  shortDescription: string;
  fullDescription: string;
  createdAt: string;
  completedAt: string;
  status: string;
}

export interface NotificationsRemind {
  notifications: Notification[];
}
