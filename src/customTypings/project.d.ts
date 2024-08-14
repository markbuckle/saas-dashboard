interface Project {
    name: string;
    description: string;
    url: string;
    userId: string | null;
    returning?: any; // Add the returning property
  }