import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Content is served from public/content.json via static file serving
  // No backend routes needed for now as all content is JSON-based

  const httpServer = createServer(app);

  return httpServer;
}
