export const mapIP = games => {
    if (Array.isArray(games)) {
        return games.data.map(item => {
            const preview = item.preview.map(pItem =>
                pItem.replace('localhost', '10.2.2.2'))
            return {
                ...item,
                preview,
                icon: item.icon.replace('localhost', '10.2.2.2')
            }
        })
    }
    const preview = item.preview.map(pItem =>
        pItem.replace('localhost', '10.2.2.2'))
    return {
        ...games,
        preview,
        icon: item.icon.replace('localhost', '10.2.2.2')
    }


}