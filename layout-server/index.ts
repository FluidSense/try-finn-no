import express from "express";
import Layout from "@podium/layout";

const app = express();

const layout = new Layout({
  name: "finnDemoLayout",
  pathname: "/",
});

app.use(layout.middleware());

const headerPodlet = layout.client.register({
  name: "headerPodlet",
  uri: "http://localhost:7100/manifest.json",
});

app.get("/", async (req, res) => {
  const incoming = res.locals.podium;
  const headerResponse = await headerPodlet.fetch(incoming);

  incoming.podlets = [headerResponse];
  incoming.view.title = "My Finn.no Frontpage";

  const js = headerResponse.js[0];

  res.podiumSend(`<div><header>${headerResponse}</header>${js.toHTML()}</div>`);
});

app.listen(7000);
