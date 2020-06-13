import * as functions from "firebase-functions";
import axios from "axios";

const GiphyEndpoint = "https://api.giphy.com/v1/gifs/search?q=";
const GiphyAPIkey = "5U3FsGeKTTY4nshu56W3WVhDiyiJjDaQ";
const limit = 3;

const getGiphy = async (keyword: any) => {
  const giphyURL =
    GiphyEndpoint + keyword + "&api_key=" + GiphyAPIkey + "&limit=" + limit;
  const jsons = await axios.get(giphyURL);
  const data = jsons.data.data;
  const imageUrls = data.map(
    (o: { images: { downsized: { url: string } } }) => o.images.downsized.url
  );
  const gifsArray = new Array(imageUrls);
  return gifsArray[0];
};

export const resGifs = functions.https.onRequest(async (req, res) => {
  const keyword = req.query.keyword;
  const resArray = await getGiphy(keyword);
  res.send(resArray);
});
