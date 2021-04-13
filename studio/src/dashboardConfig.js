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
                    "607619426ae6e31007c7aa03",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-1-studio-432dwig6",
                  apiId: "856daab5-5f37-4132-9587-1ade8774c413",
                },
                {
                  buildHookId: "6076194281fe0500bf4ece68",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-1-web-31dhuahm",
                  apiId: "9447d420-a08f-4eb8-8ef3-6318d8d77223",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kiim/sanity-gatsby-blog_1",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-1-web-31dhuahm.netlify.app",
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
