self.onmessage = async event => {
  console.log("worker received event:", event);

  self.postMessage({ ...event, type: "pong" });
};
