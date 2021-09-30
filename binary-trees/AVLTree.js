class Node {
    constructor(data){
    // a node has data, left, and right pointers
    // a node also has a height property that starts at 1
    // left and right are intialized as null
    this.data = data;
    this.height = 1;
    this.left = null;
    this.right = null;
    }
}
class AVLTree {
    constructor(){
        this.root = null;
        // when a new Tree is made, it has a root property
    }
    insert(data){
        // add a new Node to the tree, with data as the Node's data
        // insertion starts the same way as in a regular Binary Tree
        // once the node is inserted, however, check the heights for imbalance
        // if the new node causes imbalance, perform rotations to rebalance

        // this is the exact same code as the BST insert
        const vanillaInsert = data => {
            let node = new Node(data);
            if (!this.root) return this.root = node;
            let walker = this.root;
            while (true) {
                let direction = data < walker.data ? 'left' : 'right';
                if (!walker[direction]) return walker[direction] = node;
                walker = walker[direction];
            }
        }
        
        // this is the function we will use to check an imbalance
        // we are only checking at the root in this case because the logic for root is different
        // from any other node
        const checkRootBalance = () => {
            // balance will be the difference between the left and right node heights of root
            let balance = this.getHeight(this.root.left) - this.getHeight(this.root.right);
            // if the right node is at least two nodes "higher" than the left node
            // we will need a left rotation
            if (balance < -1) {
                // now we need to check if it is a left left or left right rotation
                // you can tell this by looking at the different in heights between this.root.right's left and right children heights
                let right = this.root.right;
                // if the left side's height is greater than the right side's, you will need to do a left right rotation
                if (this.getHeight(right.left) > this.getHeight(right.right)) {
                    // this.root.right has to be changed using the rotateRight method
                    this.root.right = this.rotateRight(this.root.right);
                }
                // otherwise, it is a left left rotation
                // update this.root using the rotateLeft method
                this.root = this.rotateLeft(this.root);
            // if the left node is at least two nodes "higher" than the right node
            // we will need to do a right rotation
            // we can do almost the exact same code as above, but we have to reverse everything
            } else if (balance > 1) {
                let left = this.root.left;
                if (this.getHeight(left.left) < this.getHeight(left.right)) {
                    this.root.left = this.rotateLeft(this.root.left);
                }
                this.root = this.rotateRight(this.root);
            }
        }

        // run the vanilla insert
        vanillaInsert(data);
        // then check the root's balance
        checkRootBalance();
        }

    // Although required in the codepen, I never used this method in insertion
    setHeight(node){
        // calculate and set the height property of the given node
        // the height of a node without any further nodes is 1
        if (!node.left && !node.right) return node.height = 1;
        let leftHeight = node.left ? node.left.height : 0;
        let rightHeight = node.right ? node.right.height : 0;
        // the height is the maximum between the left and right children heights plus 1
        return node.height = Math.max(leftHeight, rightHeight) + 1;
    }
    rotateRight(node){
        // rotate the given node to the right

        // let's make node.left the new "parent"
        let newParent = node.left;
        // since node.left was less than the node, anything on node.left.right should still be less than node
        // so node.left would be the new "parent's" right
        node.left = newParent.right;
        // since node was greater than node.left, it only makes since to make "node" the newParent's right
        newParent.right = node;
        // once you have done the shifting, you need to return the new parent
        // because you need separate code to actually connect it to the AVL Tree
        return newParent;
    }
    rotateLeft(node){
        // rotate the given node to the left

        // this is the rotateRight code in almost exact reverse
        let newParent = node.right;
        node.right = newParent.left;
        newParent.left = node;
        return newParent;
    }
    // this is a helper method that I imported from the BST lecture
    getHeight(node){
        // if there is nothing there, return 0
        if (!node) return 0;
        // let's keep track of the max height, initialized to zero
        let maxHeight = 0;
        // now we can use recursion to update the maximum height;
        const checker = (node, height) => {
            // if we are currently on a valid node
            if (node) {
                // update maxHeight to be the highest between the current height and maxHeight;
                maxHeight = Math.max(maxHeight, height);
                // then run the same function to the left side
                checker(node.left, height + 1);
                // and to the right
                checker(node.right, height + 1);
            }
        }
        // invoke the checker function, passing in 1 as the height, as we have already validated that this.root exists
        checker(node, 1);
        // and return the maxHeight;
        return maxHeight;
    }
}


module.exports = {
    Node,
    AVLTree
}