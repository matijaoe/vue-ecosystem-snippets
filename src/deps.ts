export { ensureDirSync } from "https://deno.land/std@0.141.0/fs/ensure_dir.ts";
export { parse } from "https://deno.land/std@0.168.0/flags/mod.ts";
export { markdownTable } from "https://esm.sh/markdown-table@3";

import replace, * as _replace from "npm:replace-in-file";

// Fix types
export const replaceInFile = replace as unknown as (
  config: _replace.ReplaceInFileConfig,
) => Promise<_replace.ReplaceResult[]>;
