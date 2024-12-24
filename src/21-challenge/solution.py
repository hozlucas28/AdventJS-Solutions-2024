from typing import TypedDict, NotRequired, Optional

BinaryTree = TypedDict(
    "BinaryTree",
    {
        "value": str,
        "left": NotRequired["BinaryTree"],
        "right": NotRequired["BinaryTree"],
    },
)


def tree_height(tree: Optional[BinaryTree]) -> int:
    if tree is None:
        return 0

    left_height: int = tree_height(tree=tree["left"]) if "left" in tree else 0
    right_height: int = tree_height(tree=tree["right"]) if "right" in tree else 0

    return 1 + max(left_height, right_height)
