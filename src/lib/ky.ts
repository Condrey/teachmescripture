import ky from "ky";

const kyInstance = ky.create({
  timeout: 1 * 1000*60*60, // 1 hour
  retry: 3,  
  parseJson: (text) =>
    JSON.parse(text, (key, value) => {
      if (key.endsWith("At") || key.endsWith("Time")) return new Date(value);
      return value;
    }),
});

export default kyInstance;
