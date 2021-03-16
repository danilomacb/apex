import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  let discordUser;
  try {
    discordUser = await axios.get("https://discord.com/api/users/@me", {
      headers: {
        authorization: req.headers.authorization,
      },
    });
  } catch (err) {
    console.log("Error on login: ", err);
    res.status(500).send("Error on login");
    return;
  }

  res.status(200).json({
    id: discordUser.data.id,
    username: discordUser.data.username,
    discriminator: discordUser.data.discriminator,
    avatar: discordUser.data.avatar,
  });
});

export default router;
