export const resolveAssetPath = (path?: string) => {
  if (!path) {
    return path;
  }

  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${baseUrl}${normalizedPath}`;
};
