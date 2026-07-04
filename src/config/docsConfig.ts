export interface DocItem {
  id: string;
  title: string;
  filePath: string;
  items?: DocItem[];
}

export const indexPage = "/docs/index.md";

export const notesDocs: DocItem[] = [
  {
    id: "math",
    title: "mathematics",
    filePath: "/docs/math/index.md",
    items: [
      {
        id: "number-theory",
        title: "number theory",
        filePath: "/docs/math/number-theory/index.md",
        items: [
          {
            id: "residue-classes",
            title: "modular arithmetic",
            filePath: "/docs/math/number-theory/modular-arithmetic.md",
          },
          {
            id: "euclidean-algorithm",
            title: "euclidean algorithm",
            filePath: "/docs/math/number-theory/euclidean-algorithm.md",
          },
        ]
      },
    ],
  },
  {
    id: "cryptography",
    title: "cryptography",
    filePath: "/docs/cryptography/index.md",
    items: [
      {
        id: "rsa",
        title: "the rsa algorithm",
        filePath: "/docs/cryptography/rsa/index.md",
        items: [

        ]
      }
    ]
  }
]
