export class WispRouter {
  constructor() {
    this.routes = [];
  }

  addRoute(protocolRoute, targetPath) {
    this.routes.push({ protocolRoute, targetPath });
  }

  getTarget(protocolUrl) {
    const route = this.routes.find((item) => protocolUrl.startsWith(item.protocolRoute));
    return route?.targetPath || null;
  }

  listRoutes() {
    return this.routes;
  }
}
