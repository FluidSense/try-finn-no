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

const header2Podlet = layout.client.register({
  name: "header2Podlet",
  uri: "http://localhost:7200/manifest.json",
});

app.get("/", async (req, res) => {
  const incoming = res.locals.podium;
  const headerResponse = await headerPodlet.fetch(incoming);
  const header2Response = await header2Podlet.fetch(incoming);

  incoming.podlets = [headerResponse, header2Response];
  incoming.view.title = "My Finn.no Frontpage";

  const js1 = headerResponse.js[0];
  const js2 = header2Response.js[0];

  res.podiumSend(
    `<div><header>${headerResponse}</header><section>${header2Response}</section>${js1.toHTML()}${js2.toHTML()}</div>`
  );
});

app.listen(7000);
