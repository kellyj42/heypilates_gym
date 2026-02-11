// app/utils/notifications.ts
export const requestNotificationPermission = (): Promise<boolean> => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || !('Notification' in window)) {
    console.warn('Notifications are not supported in this environment');
    return Promise.resolve(false);
  }

  // If already granted, return true
  if (Notification.permission === 'granted') {
    return Promise.resolve(true);
  }

  // If not denied, request permission
  if (Notification.permission !== 'denied') {
    return Notification.requestPermission().then((permission) => {
      console.log('Notification permission:', permission);
      return permission === 'granted';
    }).catch((error) => {
      console.error('Error requesting notification permission:', error);
      return false;
    });
  }

  // If previously denied, return false
  console.warn('Notification permission was previously denied');
  return Promise.resolve(false);
};

export const sendNotification = (
  title: string,
  options?: NotificationOptions
): Notification | null => {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return null;
  }

  if (Notification.permission !== 'granted') {
    console.warn('Cannot send notification: permission not granted');
    return null;
  }

  try {
    return new Notification(title, {
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      ...options,
    });
  } catch (error) {
    console.error('Error sending notification:', error);
    return null;
  }
};

export const playNotificationSound = (soundUrl?: string) => {
  if (typeof window === 'undefined' || typeof Audio === 'undefined') {
    return;
  }

  try {
    const audio = new Audio(soundUrl || '/sounds/notification.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {
      // Fallback to a simple beep if audio file fails
      console.log('🔔 New message!');
    });
  } catch (error) {
    console.error('Error playing notification sound:', error);
  }
};

export const checkNotificationSupport = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  return (
    'Notification' in window &&
    'serviceWorker' in navigator &&
    'PushManager' in window
  );
};

// Optional: Add a function to schedule a notification
export const scheduleNotification = (
  title: string,
  body: string,
  delay: number = 30000
): number => {
  if (typeof window === 'undefined') {
    return -1;
  }

  return window.setTimeout(() => {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/favicon.ico',
      });
    }
  }, delay);
};