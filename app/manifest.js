export default function manifest() {
  return {
    name: "ResumAI - Free AI Resume Builder",
    short_name: "ResumAI",
    description: "Create ATS-friendly resumes in minutes with AI keyword optimization",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#207a75",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
