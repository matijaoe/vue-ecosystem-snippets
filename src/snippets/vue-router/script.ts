import { XSnippetDefinition } from "../../models/app.ts";

export const script: XSnippetDefinition = {
  meta: {
    title: "Script",
    description: "Script setup and composables",
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
        "  history: createWebHashHistory(),",
        "  routes: ${1:routes}",
        "  scrollBehavior(to, from, savedPosition) {",
        "    $2",
        "  }",
        "})"
      ],
    },
  }
}
