export const initialData = {
  id: "root",
  name: "root",
  type: "folder",
  children: [
    {
      id: "1",
      name: "src",
      type: "folder",
      children: [
        {
          id: "3",
          name: "App.js",
          type: "file",
        },
        {
          id: "4",
          name: "Components",
          type: "folder",
          children: [
            {
              id: "7",
              name: "App.js",
              type: "file",
            },
            {
              id: "8",
              name: "App.js",
              type: "file",
            },
          ],
        },
        {
          id: "5",
          name: "style.js",
          type: "file",
        },
        {
          id: "6",
          name: "util.js",
          type: "file",
        },
      ],
    },
    {
      id: "2",
      name: "package.json",
      type: "file",
    },
  ],
};
