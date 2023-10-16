export const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (1 + today.getMonth())).slice(-2);
  const date = ("0" + today.getDate()).slice(-2);
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const seconds = ("0" + today.getSeconds()).slice(-2);

  return `${year}${month}${date} ${hours}:${minutes}:${seconds}`;
};
