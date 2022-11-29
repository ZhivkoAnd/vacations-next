export const filterDateAscending = (arr) => {
  return [...arr].sort((a, b) => {
    return Number(a.fields.date) - Number(b.fields.date);
  });
};

export const filterDateDescending = (arr) => {
  return [...arr].sort((a, b) => {
    return Number(b.fields.date) - Number(a.fields.date);
  });
};
