import { SITE_TITLE } from "../constants";

export const getHeadPageTitle = (parts: (string | number | undefined | null)[]): string => {
  const filteredParts = parts.filter(Boolean);
  return [...filteredParts, SITE_TITLE].join(" | ");
}