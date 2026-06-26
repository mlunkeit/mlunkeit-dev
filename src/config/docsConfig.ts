export interface DocItem {
  id: string;
  title: string;
  filePath: string;
  items?: DocItem[];
}

export const notesDocs: DocItem[] = [
  {
    id: "math",
    title: "Mathematik",
    filePath: "/docs/math/index.md",
    items: [
      {
        id: "number-theory",
        title: "Zahlentheorie",
        filePath: "/docs/math/number-theory/index.md",
        items: [
          {
            id: "residue-classes",
            title: "Restklassen",
            filePath: "/docs/math/number-theory/residue-classes.md",
          },
          {
            id: "euclidean-algorithm",
            title: "Euklidischer Algorithmus",
            filePath: "/docs/math/number-theory/euclidean-algorithm.md",
          },
        ]
      },
    ],
  },
  {
    id: "cryptography",
    title: "Kryptographie",
    filePath: "/docs/cryptography/index.md",
    items: [
      {
        id: "rsa",
        title: "Der RSA Algorithmus",
        filePath: "/docs/cryptography/rsa/index.md",
        items: [

        ]
      }
    ]
  }
]
