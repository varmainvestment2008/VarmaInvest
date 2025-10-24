// Storage interface for future enhancements
// Currently, all content is managed through public/content.json

export interface IStorage {
  // Future methods for contact form submissions, analytics, etc.
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
