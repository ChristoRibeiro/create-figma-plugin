/**
 * Traverses `node` and its child nodes recursively in a *depth-first*
 * manner, passing each node to the specified `processNode` callback.
 *
 * Each node is also passed to a `stopTraversal` function. If you return
 * `false` in `stopTraversal` for a particular node, then its child nodes
 * will not be traversed.
 */
export function traverseNode(
  node: SceneNode,
  processNode: (node: SceneNode) => void,
  stopTraversal?: (node: SceneNode) => boolean
): void {
  if (node.removed === true) {
    return
  }
  if (
    'children' in node &&
    (typeof stopTraversal !== 'function' || stopTraversal(node) === false)
  ) {
    for (const childNode of node.children) {
      traverseNode(childNode, processNode, stopTraversal)
    }
  }
  processNode(node)
}
