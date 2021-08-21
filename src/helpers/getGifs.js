
export const getGifs = async(category) => {
    const encodedCategory = encodeURI(category);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=mPzwKvb5MwyM6CMiQk8MVjJTTgxEy8Oz&q=${encodedCategory}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });

    console.log('gifs', gifs);

    return gifs;
}