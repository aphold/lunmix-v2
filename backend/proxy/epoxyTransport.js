export class EpoxyTransport {
  constructor(destination) {
    this.destination = destination;
  }

  async forward(body) {
    if (!body) return;
    for await (const chunk of body) {
      this.destination.write(chunk);
    }
    this.destination.end();
  }
}
