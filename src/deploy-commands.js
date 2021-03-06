const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, token } = require("./config.js");

const commands = [
  new SlashCommandBuilder()
    .setName("post")
    .setDescription("Post random content from a subreddit")
    .addStringOption((option) =>
      option
        .setName("subreddit")
        .setDescription("The name of the subreddit")
        .setRequired(true)
    ),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
