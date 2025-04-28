export function convertSearchParams(params: SearchParams) {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([Key, value]) => {
    if (typeof value === "string") {
      searchParams.append(Key, value);
    } else if (Array.isArray(value)) {
      value.forEach((v) => {
        searchParams.append(Key, v);
      });
    }
    // Skip undefined
  });

  return searchParams;
}
