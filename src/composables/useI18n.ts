import { computed } from "vue";
import { messages } from "@/i18n/messages";
import type { Localized } from "@/i18n/schema";
import { resolveLocalized, useLocale } from "./useLocale";

export function useI18n() {
  const { locale, setLocale, isEnglish } = useLocale();

  const currentMessages = computed(() => messages[locale.value]);

  const localize = <T>(value: Localized<T>) => resolveLocalized(value, locale.value);

  return {
    locale,
    isEnglish,
    messages: currentMessages,
    setLocale,
    localize
  };
}
