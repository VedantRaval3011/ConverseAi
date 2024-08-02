import express from "express";
import imagekit from "imagekit";
const port = process.env.PORT || 3000;
const app = express();

const imagekit = new imagekit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBIC_KEY,
  privateKey: IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
    let result = imagekit.getAuthenticationParameters();
    res.send(result);
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
