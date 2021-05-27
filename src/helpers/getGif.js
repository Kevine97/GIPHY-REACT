import clienteAxios from "../config/clienteAxios";
const getGif = async (category) => {
    const resp = await clienteAxios.get(
      `search?q=${category}&limit=15&api_key=pmnUD2Wyb3x22McHkGlvWElLvg6ayqJ3`
    );
    const { data } = resp.data;
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    return gifs;
  };

  export default getGif