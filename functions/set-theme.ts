export default function setTheme(darkTheme: boolean) {
  
  if (darkTheme) {
    localStorage.setItem("dark-theme", "true")
    document.getElementsByTagName("html")[0].setAttribute("theme", "dark");
    return
  }
  
  localStorage.setItem("dark-theme", "false")
  document.getElementsByTagName("html")[0].setAttribute("theme", "light");
}
