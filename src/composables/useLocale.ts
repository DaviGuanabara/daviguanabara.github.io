import { computed, ref, watch } from "vue";
import { locales, type Locale, type Localized } from "@/i18n/schema";

const STORAGE_KEY = "locale";

export const locale = ref<Locale>("en");
const initialized = ref(false);

export const initializeLocale = () => {
  if (initialized.value || typeof window === "undefined") {
    return;
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY);
  locale.value = locales.includes(savedLocale as Locale) ? (savedLocale as Locale) : "en";
  document.documentElement.lang = locale.value;
  initialized.value = true;
};

watch(
  locale,
  (value) => {
    if (!initialized.value || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, value);
    document.documentElement.lang = value;
  },
  { immediate: false }
);

export const resolveLocalized = <T>(value: Localized<T>, currentLocale: Locale) => value[currentLocale];

export function useLocale() {
  initializeLocale();

  const setLocale = (value: Locale) => {
    locale.value = value;
  };

  const isEnglish = computed(() => locale.value === "en");

  return {
    locale,
    isEnglish,
    setLocale
  };
}
