from typing import TypedDict, NotRequired

BinaryTree = TypedDict(
    "BinaryTree",
    {
        "value": str,
        "left": NotRequired["BinaryTree"],
        "right": NotRequired["BinaryTree"],
    },
)


def is_trees_synchronized(
    tree1: BinaryTree | None, tree2: BinaryTree | None
) -> list[bool | str]:
    result: list[bool | str] = [False, tree1["value"] if tree1 is not None else ""]

    if tree1 is not None and tree2 is not None:
        result[0] = tree1["value"] == tree2["value"]

        if "left" not in tree1 or "right" not in tree2:
            return result

        left_branch_01 = tree1["left"]
        right_branch_01: BinaryTree | None = tree1.get("right", None)

        left_branch_02: BinaryTree | None = tree2.get("left", None)
        right_branch_02 = tree2["right"]

        result[0] = (
            result[0]
            and is_trees_synchronized(tree1=left_branch_01, tree2=right_branch_02)[0]
        )

        result[0] = (
            result[0]
            and is_trees_synchronized(tree1=right_branch_01, tree2=left_branch_02)[0]
        )

    return result
