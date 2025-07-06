import Cookies from "js-cookie";
export const setCookies = (key: string, value: string) => {
  Cookies.set(key, value, { expires: 30 });
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
