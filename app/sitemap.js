export default async function sitemap() {
  const baseUrl = "https://resumai.com";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/pricing",
    "/templates",
    "/about",
    "/contact",
    "/feedback",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/pricing" || route === "/templates" ? 0.8 : 0.6,
  }));
}
