var zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
var hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function f1(zhong, hou) {
    if (zhong == null || hou == null || zhong.length == 0 || hou.length == 0 || zhong.length != hou.length) return null;
    var root = new Node(hou[hou.length - 1]);
    const leftLen = zhong.indexOf(root.value)
    return root;
}

var root = f1(zhong, hou);
console.log(root.left);
console.log(root.right);