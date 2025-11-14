export type ProjectLinkKind = "demo" | "github" | "case-study" | "other";

export type ProjectLink = {
  label: string;
  url: string;
  kind?: ProjectLinkKind;
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description?: string;
  role?: string;
  company?: string;
  location?: string;
  period?: {
    start: string; // contoh: "2023-01"
    end?: string; // contoh: "present" atau "2024-05"
  };
  techStack: string[];
  highlights?: string[];
  links?: ProjectLink[];
  tags?: string[];
  featured?: boolean;
};
