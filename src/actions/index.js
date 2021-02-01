export const addIdToItem = (item, id) => {
    item.id = id;
    item.background = setBackground(item);
    return item
}

export const setBackground = (item) => {
    switch (item.rarity) {

        case "common":
            return "https://i.imgur.com/wE8JzTe.png"
        case "uncommon":
            return "https://i.imgur.com/BRxwgkS.png"
        case "rare":
            return "https://i.imgur.com/8ImiV3p.png"
        case "epic":
            return "https://i.imgur.com/4VGTgPv.png?2"
        case "legendary":
            return "https://i.imgur.com/41Thxnq.png"
        default:
            return "https://i.imgur.com/8Hiu0Lo.png"
    }
}