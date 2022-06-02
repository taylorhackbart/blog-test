export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62990b1f51fbb10e5b468513",
                  title: "Sanity Studio",
                  name: "blog-test-studio",
                  apiId: "041ab95f-68f0-4af9-ae59-c67da9386c28",
                },
                {
                  buildHookId: "62990b1f69fd1e0f56e27495",
                  title: "Blog Website",
                  name: "blog-test-web",
                  apiId: "d55d8b0e-2129-4f2a-afc4-39fa31c853d3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/taylorhackbart/blog-test",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://blog-test-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
