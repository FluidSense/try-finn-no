// podletServer.js
const express = require("express");
const Podlet = require("@podium/podlet");

const app = express();

const podlet = new Podlet({
  name: "headerPodlet",
  version: "0.1.0",
  pathname: "/",
  development: true,
});

app.use(express.static("build"));
app.use(podlet.middleware());

podlet.js({ value: "/bundle.js" });
podlet.css({ value: "/bundle.css" });

app.get(podlet.manifest(), (req, res) => res.status(200).send(podlet));

app.listen(7100);