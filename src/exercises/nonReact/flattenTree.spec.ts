import { TreeNode, flattenTree } from "./flattenTree";

describe("flattenTree", () => {
  const tree: TreeNode = {
    value: 1,
    children: [
      { value: 4 },
      {
        value: 5,
        children: [
          {
            value: 55,
            children: [{ value: 15 }],
          },
        ],
      },
      { value: 3 },
    ],
  };

  it("flattens the tree into an array", () => {
    const result = flattenTree(tree);
    expect(result).toEqual([1, 4, 5, 55, 15, 3]);
  });

  it("returns a single value for a tree with no children", () => {
    const singleNodeTree: TreeNode = { value: 10 };
    const result = flattenTree(singleNodeTree);
    expect(result).toEqual([10]);
  });

  it("returns an empty array for an empty tree", () => {
    const emptyTree = {};
    // This will fail if your function doesn't handle it. But it's a good test to have.
    // You can modify the function to handle this edge case.
    expect(() => flattenTree(emptyTree as TreeNode)).toThrow();
  });
});
