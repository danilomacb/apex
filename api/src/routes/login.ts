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

  console.log(discordUser.data);
  res.status(200).json(discordUser.data);
});

export default router;
