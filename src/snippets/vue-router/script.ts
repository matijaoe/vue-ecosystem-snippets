import { XSnippetDefinition } from "../../models/app.ts";

export const script: XSnippetDefinition = {
  meta: {
    title: "Vue Router (script)",
    lang: "javascript",
  },
  snippets: {
    vrouter: {
      name: "Vue router",
      body: "const ${1:router} = useRouter()",
    },
    vroute: {
      name: "Vue route",
      body: "const ${1:route} = useRoute()",
    },
    "vrouter:create": {
      name: "Create Vue router",
      body: [
        "const router = createRouter({",
        "\thistory: createWebHashHistory(),",
        "\troutes: ${1:routes},",
        "\tscrollBehavior(to, from, savedPosition) {",
        "\t\t$2",
        "\t}",
        "})"
      ],
    },
  }
}
