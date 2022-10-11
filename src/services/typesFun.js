function getHexType(type) {
    switch (type) {
        case 'Electric':    return "#f9cf30"
        case 'Grass':       return "#74cb48"
        case 'Poison':      return "#A43E9E"
        case 'Water':       return "#6493eb"
        case 'Fire':        return "#f57d31"
        case 'Bug':         return "#a78723"
        case 'Flying':      return "#A891EC"
        case 'Steel':       return "#b7b9d0"
        case 'Rock':        return "#b69e31"
        case 'Normal':      return "#aaa67f"
        case 'Ghost':       return "#70559b"
        case 'Type':        return "#666666"
        case 'Psychic':     return "#fb5584"
        case 'Ice':         return "#9AD6DF"
        case 'Dark':        return "#75574c"
        case 'Fairy':       return "#E69EAC"
        case 'Fighting':    return "#c12239"
        case 'Ground':      return "#dec169"
        case 'Dragon':      return "#7037ff"
        default:            return ""
    }
  }
  export default getHexType