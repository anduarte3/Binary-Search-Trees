let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let n = array.length;
let root = null;

function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}
class Tree {
  constructor(array) {
    const newArray = [...new Set(array)];
    root = buildTree(array, 0, n - 1);
    document.write("Preorder traversal of constructed BST<br>");
    preOrder(root);
  }
}

function buildTree(array, start, end) {
  if (start > end) {
    return null
  }
  const mid = parseInt((start+end)/2);
  let Node = createNode(array[mid]);

  Node.left = buildTree(array, start, mid - 1);
  Node.right = buildTree(array, mid + 1, end);

  return Node
}


function preOrder(Node)
{
    if (Node == null)
    {
        return;
    }
    document.write(Node.value + " ");
    preOrder(Node.left);
    preOrder(Node.right);
}

const tree = new Tree(array);