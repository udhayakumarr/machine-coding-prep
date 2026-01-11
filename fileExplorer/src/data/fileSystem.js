// data/complexFileSystem.js
export const fileSystem = {
    id: "root",
    name: "Home",
    type: "folder",
    children: [
      {
        id: "f1",
        name: "Engineering",
        type: "folder",
        children: [
          {
            id: "f1-1",
            name: "Frontend",
            type: "folder",
            children: [
              {
                id: "f1-1-1",
                name: "React",
                type: "folder",
                children: [
                  {
                    id: "file-1",
                    name: "useBreadcrumbs.ts",
                    type: "file",
                  },
                  {
                    id: "file-2",
                    name: "FileExplorer.jsx",
                    type: "file",
                  },
                ],
              },
              {
                id: "f1-1-2",
                name: "Angular",
                type: "folder",
                children: [],
              },
            ],
          },
          {
            id: "f1-2",
            name: "Backend",
            type: "folder",
            children: [
              {
                id: "f1-2-1",
                name: "NodeJS",
                type: "folder",
                children: [
                  {
                    id: "file-3",
                    name: "server.js",
                    type: "file",
                  },
                  {
                    id: "file-4",
                    name: "routes.js",
                    type: "file",
                  },
                ],
              },
              {
                id: "f1-2-2",
                name: "Java",
                type: "folder",
                children: [
                  {
                    id: "f1-2-2-1",
                    name: "SpringBoot",
                    type: "folder",
                    children: [
                      {
                        id: "file-5",
                        name: "Application.java",
                        type: "file",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
  
      {
        id: "f2",
        name: "Design",
        type: "folder",
        children: [
          {
            id: "file-6",
            name: "wireframes.fig",
            type: "file",
          },
          {
            id: "file-7",
            name: "logo.svg",
            type: "file",
          },
        ],
      },
  
      {
        id: "f3",
        name: "HR",
        type: "folder",
        children: [
          {
            id: "file-8",
            name: "Offer_Letter.pdf",
            type: "file",
          },
          {
            id: "file-9",
            name: "Resume.pdf",
            type: "file",
          },
        ],
      },
  
      {
        id: "f4",
        name: "Personal",
        type: "folder",
        children: [
          {
            id: "f4-1",
            name: "Photos",
            type: "folder",
            children: [
              {
                id: "f4-1-1",
                name: "2022",
                type: "folder",
                children: [
                  {
                    id: "file-10",
                    name: "goa.png",
                    type: "file",
                  },
                  {
                    id: "file-11",
                    name: "family.jpg",
                    type: "file",
                  },
                ],
              },
              {
                id: "f4-1-2",
                name: "2023",
                type: "folder",
                children: [],
              },
            ],
          },
          {
            id: "f4-2",
            name: "Finance",
            type: "folder",
            children: [
              {
                id: "file-12",
                name: "tax.xlsx",
                type: "file",
              },
              {
                id: "file-13",
                name: "investments.csv",
                type: "file",
              },
            ],
          },
        ],
      },
  
      {
        id: "file-14",
        name: "README.md",
        type: "file",
      },
  
      {
        id: "file-15",
        name: "todo.txt",
        type: "file",
      },
    ],
  };

export default fileSystem;