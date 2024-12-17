def createXmasTree(height: int, ornament: str) -> str:
    tree: str = ""

    trunk_blank_spaces: str = "_" * (height - 1)

    for i in range(height):
        branch_blank_spaces: str = "_" * (height - i - 1)
        tree += (
            branch_blank_spaces + ornament * (i * 2 + 1) + branch_blank_spaces + "\n"
        )

    tree += trunk_blank_spaces + "#" + trunk_blank_spaces + "\n"
    tree += trunk_blank_spaces + "#" + trunk_blank_spaces

    return tree
