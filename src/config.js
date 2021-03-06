require("dotenv").config();

module.exports = {
  token: process.env["DISCORD_TOKEN"],
  guildId: process.env["DISCORD_GUILD_ID"],
  clientId: process.env["DISCORD_CLIENT_ID"],
  subreddits: process.env["AUTO_POST_SUBREDDIT_LIST"].split(","),
  autoPostChannelId: process.env["AUTO_POST_CHANNEL_ID"],
};
