// To import image using URL dynamically
export const getImageUrl = (path) => {
    return new URL(`../assets/${path, import.meta.url.href}`)
}