export const getInstalledApps = () => {
  return JSON.parse(localStorage.getItem("installedApps")) || [];
};

export const isAppInstalled = (appId) => {
  const installedApps = getInstalledApps();
  return installedApps.some((item) => item.id === appId);
};

export const installApp = (app) => {
  const installedApps = getInstalledApps();
  if (!isAppInstalled(app.id)) {
    installedApps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }
};

export const removeApp = (appId) => {
  const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
  const updated = installedApps.filter((app) => app.id !== appId);
  localStorage.setItem("installedApps", JSON.stringify(updated));
};
export const sortInstalledApps = (apps, type) => {
  let sorted = [...apps];
  if (type === "name") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else if (type === "size") {
    sorted.sort((a, b) => a.size - b.size);
  } else if (type === "rating") {
    sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
  }
  return sorted;
};

