export const parseTime = (timeStr: string): Date => {
  const today = new Date();
  const [hours, minutes] = timeStr.split(':').map(Number);
  return new Date(today.setHours(hours, minutes, 0, 0));
};

export const isCurrentlyOpen = (opening: string, closing: string): boolean => {
  const now = new Date();
  const openTime = parseTime(opening);
  const closeTime = parseTime(closing);
  
  // Handle cases where closing time is on the next day
  if (closeTime < openTime) {
    closeTime.setDate(closeTime.getDate() + 1);
  }
  
  return now >= openTime && now <= closeTime;
};

export const getNextOpeningTime = (groups: Record<string, Record<string, { opening: string; closing: string }>>): { group: string; time: string } | null => {
  const now = new Date();
  let nextOpening: { group: string; time: Date } | null = null;

  Object.entries(groups).forEach(([groupName, restaurants]) => {
    Object.values(restaurants).forEach(({ opening }) => {
      const openingTime = parseTime(opening);
      if (openingTime > now && (!nextOpening || openingTime < nextOpening.time)) {
        nextOpening = { group: groupName, time: openingTime };
      }
    });
  });

  if (!nextOpening) return null;
  
  return {
    group: nextOpening.group,
    time: nextOpening.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
};