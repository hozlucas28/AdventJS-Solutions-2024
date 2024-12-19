def distribute_weight(weight: int) -> str:
    box_representations: dict[int, list[str]] = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"],
    }

    boxes: list[list[str]] = []
    weights: list[int] = list(box_representations.keys())

    for i in range(len(weights) - 1, -1, -1):
        box_weight: int = weights[i]
        if weight - box_weight < 0:
            continue

        weight -= box_weight
        boxes.insert(0, box_representations[box_weight])

        while weight - box_weight > -1:
            weight -= box_weight
            boxes.insert(0, box_representations[box_weight])

        if weight == 0:
            break

    boxes_to_draw: list[str] = []

    for i, box in enumerate(iterable=boxes):
        if i != len(boxes) - 1:
            offset: int = boxes[i + 1][0].strip().count("_") + 1
            box[-1] = box[-1].ljust(offset, "_")

        if i != 0:
            boxes_to_draw.append("\n".join(box[1:]))
            continue

        boxes_to_draw.append("\n".join(box))

    return "\n".join(boxes_to_draw)
