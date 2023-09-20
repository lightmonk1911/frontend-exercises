export interface TreeNode {
  value: number;
  children?: TreeNode[];
}

export const flattenTree = (tree: TreeNode) => {
  const result: number[] = [];
  const nodes = [tree];

  while (nodes.length > 0) {
    const node = nodes.shift();

    if (!node?.value) {
      throw new Error('Every node should have value');
    }

    if (node?.children?.length) {
      nodes.unshift(...node.children);
    }

    if (node?.value) {
      result.push(node?.value);
    }
  }

  return result;
};
