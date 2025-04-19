export async function shareLink(href) {
    if (navigator.share) {
        try {
            await navigator.share({
            title: 'Trendy Young',
            text: 'Modern, Comfortable, Fashionable',
            url: href
        })   
        } catch (error) {
            console.log('Error when trying to share:', error);
        }
    } else {
        try {
            await navigator.clipboard.writeText(href)
        } catch (err) {
            alert('Could not copy the link...')
        }
    }
}
