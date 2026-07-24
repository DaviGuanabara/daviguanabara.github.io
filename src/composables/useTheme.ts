import { onMounted, ref, watch } from "vue";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const theme = ref<Theme>("dark");
const initialized = ref(false);

export function useTheme() {
  onMounted(() => {
    if (initialized.value) {
      return;
    }

    const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
    theme.value = savedTheme ?? "dark";
    document.documentElement.classList.toggle("dark", theme.value === "dark");
    initialized.value = true;
  });

  watch(
    theme,
    (value) => {
      if (!initialized.value) {
        return;
      }

      localStorage.setItem(STORAGE_KEY, value);
      document.documentElement.classList.toggle("dark", value === "dark");
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", value === "dark" ? "#0f172a" : "#f8fafc");
    },
    { immediate: false }
  );

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  return {
    theme,
    toggleTheme
  };
}
