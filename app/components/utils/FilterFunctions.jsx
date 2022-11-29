export const setFilterDateAscending = (arr) => {
  return [...arr].sort((a, b) => {
    return Number(b.fields.date) - Number(a.fields.date);
  });
};

export const setFilterDateDescending = (arr) => {
  return [...arr].sort((a, b) => {
    return Number(a.fields.date) - Number(b.fields.date);
  });
};
