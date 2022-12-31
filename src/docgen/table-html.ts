export const joinInline = (s: string[]) => s.join("");
export const joinByNewLine = (s: string[]) => s.join("\n");
export const joinByDoubleNewLine = (s: string[]) => s.join("\n\n");
export const indent = (s: string, size = 2) => `${" ".repeat(size)}${s}`;
export const escapeBackticks = (s: string) => s.replace(/`/g, "\`");

export const htmlComment = (s: string) => `<!-- ${s} -->`;
export const code = (s: string) => {
  return `<code>${s}</code>`;
};

export const codeBlock = (s: string, lang = "javascript") => {
  return joinByNewLine([
    `${escapeBackticks("```" + lang)}`,
    s,
    `${escapeBackticks("```")}`,
  ]);
};

export const $row = (s: string) => {
  return joinByNewLine(["", "<tr>", s, "</tr>"]);
};

export const $col = (s: string) => {
  return `<td>${s}</td>`;
};
export const $colCode = (s: string | string[]) => {
  if (Array.isArray(s)) {
    return joinInline(["<td>", s.map(code).join(" / "), "</td>"]);
  }
  return joinInline(["<td>", code(s), "</td>"]);
};

export const $colCodeBlock = (s: string, lang?: string) => {
  return joinByDoubleNewLine(["<td>", codeBlock(s, lang), "</td>"]);
};

export const $headerRow = (headers: string[]) => {
  const cols = joinByNewLine(headers.map($col));
  return $row(cols);
};

export const $table = (headings: string[], rows: string[]) => {
  return joinByNewLine([
    '<table width="100%">',
    $headerRow(headings),
    joinByNewLine(rows),
    "</table>",
  ]);
};
