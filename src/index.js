const { InitFragment } = require('webpack')

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor(arr) {
    this.arr = arr
    this.deduplicatedSortedArr = this.deduplicate(this.sort(this.arr))
    this.root = this.buildTree(
      this.deduplicatedSortedArr,
      0,
      this.deduplicatedSortedArr.length - 1,
    )
  }

  sort(arr) {
    return arr.sort((a, b) => a - b)
  }

  deduplicate(arr) {
    return arr.filter(function (e, i, a) {
      return e !== a[i - 1]
    })
  }

  buildTree(arr, start, end) {
    if (start > end) return null
    let mid = start + Math.floor((end - start) / 2)
    let root = new Node(arr[mid])
    root.left = this.buildTree(arr, start, mid - 1)
    root.right = this.buildTree(arr, mid + 1, end)
    return root
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node === null) {
      return
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false,
      )
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
    }
  }
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
tree.prettyPrint()
