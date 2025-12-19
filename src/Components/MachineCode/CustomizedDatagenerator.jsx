/**
 * Generate a large list of users for virtualization testing
 */
export function generateVirtualizedUsers({
  count = 10000,
  roles = ["Admin", "Editor", "Viewer", "Guest"],
  statuses = ["Active", "Inactive"],
  emailDomain = "example.com",
  daysBack = 30,          // last login range
  startId = 1,
  namePrefix = "User",
  randomize = true
} = {}) {
  return Array.from({ length: count }, (_, index) => {
    const id = startId + index;

    return {
      id,

      name: `${namePrefix} ${id}`,

      email: `${namePrefix.toLowerCase()}${id}@${emailDomain}`,

      role: randomize
        ? roles[Math.floor(Math.random() * roles.length)]
        : roles[index % roles.length],

      status: randomize
        ? statuses[Math.floor(Math.random() * statuses.length)]
        : statuses[index % statuses.length],

      lastLogin: new Date(
        Date.now() -
          Math.random() * 1000 * 60 * 60 * 24 * daysBack
      ).toISOString(),
    };
  });
}
