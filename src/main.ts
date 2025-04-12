import { Client, GatewayIntentBits, TextChannel } from "discord.js";
import cron from "node-cron";
import { TOKEN, CHANNEL_ID } from "./env";
import message from "./data/message.json";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);
  const channel = client.channels.cache.get(CHANNEL_ID()) as TextChannel;

  if (!channel) {
    console.error(message.cannnot_find);
    return;
  }

  cron.schedule(
    "0 12 * * 6",
    () => {
      channel.send(message.first_message);
    },
    {
      timezone: "Asia/Tokyo",
    },
  );

  cron.schedule(
    "25 20 * * 6",
    () => {
      channel.send(message.second_message);
    },
    {
      timezone: "Asia/Tokyo",
    },
  );

  cron.schedule(
    "0 12 * * 7",
    () => {
      channel.send(message.ed_first_message);
    },
    {
      timezone: "Asia/Tokyo",
    },
  );

  cron.schedule(
    "55 20 * * 7",
    () => {
      channel.send(message.ed_second_message);
    },
    {
      timezone: "Asia/Tokyo",
    },
  );

  console.log(message.schedule_done);
});

client.login(TOKEN());
