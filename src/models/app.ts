export type VscSnippet = {
  prefix: string | string[];
  body: string | string[];
  description?: string;
};
export type VscSnippetDict = Record<string, VscSnippet>;

export type XSnippet = Omit<VscSnippet, "prefix"> & { name: string, alt?: string[] };
export type XSnippetDict = Record<string, XSnippet>;

export type SnippetMeta = {
  title: string;
  description?: string;
  lang?: string;
};

export type SnippetDefinition<T> = {
  meta: SnippetMeta;
  snippets: T;
};
export type XSnippetDefinition = SnippetDefinition<XSnippetDict>;
export type VscSnippetDefinition = SnippetDefinition<VscSnippetDict>;

export type SnippetVariant<T> = {
  label: string;
  description?: string;
  fileName: string;
  snippetDefinitions: T[];
};

export type XSnippetVariant = SnippetVariant<XSnippetDefinition>;
export type VscSnippetVariant = SnippetVariant<VscSnippetDefinition>;
