from typing import TypedDict, Union

BinaryTree = TypedDict(
    "BinaryTree",
    {
        "value": str,
        "left": Union["BinaryTree", None],
        "right": Union["BinaryTree", None],
    },
)


def tree_height(tree: BinaryTree | None) -> int:
    if tree is None:
        return 0

    left_height: int = tree_height(tree=tree["left"])
    right_height: int = tree_height(tree=tree["right"])

    return 1 + max(left_height, right_height)
