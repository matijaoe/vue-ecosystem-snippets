const SYMBOL = "🟢";

export const replaceSymbol = (str: string) => str.replace(` ${SYMBOL}`, "");
export const addSymbol = (str: string) => `${str} ${SYMBOL}`;

export const parseMultiline = (s: string | string[]) => {
  return Array.isArray(s) ? s.join("\n") : s;
};

export const replaceTabs = (s: string) => s.replace(/\t/g, "  ");
