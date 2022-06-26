const keepAlive = require(`./server`);
import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  (process.env.TOKEN)
);

gateway.on("message", (m) => {
  if (m.channel_id === "985178697541754912") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/989384302464757820/WrvW1gd1i2j34Z8JFL6qHWJb751iI41Ra4Rti9TzRIlheH2YQcDg-wXF3CKKLaAtdgyt",
      content
    );
  }
});
keepAlive();