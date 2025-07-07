import Cookies from "js-cookie";
export const setCookies = (key: string, value: string) => {
  const oneHourFromNow = new Date(new Date().getTime() + 60 * 60 * 1000);
  Cookies.set(key, value, { expires: oneHourFromNow });
  return;
};

export const removeCookies = (key: string) => {
  Cookies.remove(key);
  return;
};

export const getCookies = (key: string) => {
  try {
    const getCookies: string | undefined = Cookies.get(key);
    return getCookies;
  } catch (error) {
    console.error("error", error);
  }
};
