export default function darkThemeEnabled() {
  const darkTheme: string | null = localStorage.getItem("dark-theme")

  return darkTheme === "true"
};
