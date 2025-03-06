import CryptoJS from "crypto-js";

export const generateHash = (seed, salt) => {
  return CryptoJS.SHA256(seed + salt).toString();
};
