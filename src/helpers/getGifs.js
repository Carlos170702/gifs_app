export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=GNHDByKsiwAQOCDFdExw3MQZso887b8t&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(({ id, title, images }) => ({
    id: id,
    title: title,
    url: images.downsized_medium.url,
  }));
  return gifs;
};

export const getStikers = async (stiker) => {
  const url = `https://api.giphy.com/v1/stickers/random?api_key=GNHDByKsiwAQOCDFdExw3MQZso887b8t&tag=${stiker}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const stikers = data.map(({ id, title, images }) => ({
    id: id,
    title: title,
    url: images.fixed_height_downsampled.webp,
  }));
  return stikers;
};
