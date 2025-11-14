import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    shortDescription:
      "A multi-tenant analytics dashboard for tracking product usage, conversion funnels, and revenue metrics.",
    description:
      "A fictional SaaS analytics platform that provides real-time insights into key product metrics such as active users, subscription trends, and churn. The system exposes a REST API and a responsive web dashboard for product and marketing teams.",
    role: "Full-stack Developer",
    company: "Acme Analytics Inc.",
    location: "Remote",
    period: {
      start: "2023-01",
      end: "2023-12",
    },
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    highlights: [
      "Implements multi-tenant architecture with organization-based access control.",
      "Provides configurable dashboards with reusable chart components and saved views.",
      "Includes basic audit logging for user actions and configuration changes.",
    ],
    links: [
      {
        label: "Product Landing Page",
        url: "https://example.com/saas-analytics",
        kind: "demo",
      },
      {
        label: "Source Code (Monorepo)",
        url: "https://github.com/example/saas-analytics",
        kind: "github",
      },
    ],
    tags: ["saas", "analytics", "dashboard"],
    featured: true,
  },
  {
    id: "task-management-web-app",
    title: "Task Management Web App",
    shortDescription:
      "A simple but opinionated task management application with projects, labels, and due dates.",
    description:
      "This fictional project focuses on delivering a clean interface for managing personal and team tasks. Users can organize tasks into projects, assign labels, set due dates, and filter their work using multiple dimensions.",
    role: "Frontend Engineer",
    company: "FocusFlow Labs",
    location: "Berlin, Germany",
    period: {
      start: "2022-05",
      end: "2022-11",
    },
    techStack: ["React", "TypeScript", "Vite", "React Query", "CSS Modules"],
    highlights: [
      "Implements optimistic updates for a responsive user experience.",
      "Provides keyboard shortcuts for power users.",
      "Uses a simple REST mock server for local development and demos.",
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://example.com/task-management",
        kind: "demo",
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/example/task-management-app",
        kind: "github",
      },
    ],
    tags: ["productivity", "frontend"],
    featured: false,
  },
  {
    id: "ecommerce-storefront",
    title: "E-commerce Storefront",
    shortDescription:
      "A modern storefront for a fictional online shop with product search, cart, and checkout flow.",
    description:
      "A demo e-commerce application that showcases product listing pages, filtering, search, and a simple checkout experience. It focuses on performance, accessibility, and a well-structured component architecture.",
    role: "Full-stack Developer",
    company: "Modern Commerce Studio",
    location: "London, United Kingdom",
    period: {
      start: "2021-09",
      end: "2022-02",
    },
    techStack: [
      "Next.js",
      "TypeScript",
      "Stripe (sandbox)",
      "Prisma",
      "PostgreSQL",
    ],
    highlights: [
      "Server-side rendering for SEO-friendly product pages.",
      "Simple checkout flow integrated with a sandbox payment provider.",
      "Schema-first approach for product catalog and inventory.",
    ],
    links: [
      {
        label: "Storefront Demo",
        url: "https://example.com/storefront",
        kind: "demo",
      },
      {
        label: "API Documentation",
        url: "https://example.com/storefront/api-docs",
        kind: "other",
      },
    ],
    tags: ["ecommerce", "fullstack"],
    featured: true,
  },
  {
    id: "realtime-chat-application",
    title: "Real-time Chat Application",
    shortDescription:
      "A web-based chat application with channels, typing indicators, and presence status.",
    description:
      "A fictional chat app designed to explore WebSocket-based communication, presence management, and real-time UI updates. Includes basic authentication, user status, and channel-based conversations.",
    role: "Backend Engineer",
    company: "SignalBridge",
    location: "Toronto, Canada",
    period: {
      start: "2020-03",
      end: "2020-12",
    },
    techStack: ["Node.js", "WebSocket", "Redis", "React", "Styled Components"],
    highlights: [
      "Implements presence tracking to show who is online in each channel.",
      "Provides typing indicators and unread message counts.",
      "Uses Redis for pub/sub and message fan-out between nodes.",
    ],
    links: [
      {
        label: "Prototype Demo",
        url: "https://example.com/realtime-chat",
        kind: "demo",
      },
    ],
    tags: ["realtime", "chat"],
    featured: false,
  },
  {
    id: "blog-platform",
    title: "Content-focused Blog Platform",
    shortDescription:
      "A minimalistic blog platform focusing on reading experience, SEO, and authoring workflow.",
    description:
      "A fictional blog platform built to provide a pleasant reading experience and a simple authoring flow. Supports markdown-based content, tags, series, and basic draft management.",
    role: "Full-stack Developer",
    company: "StoryPress",
    location: "Remote",
    period: {
      start: "2019-06",
      end: "2019-12",
    },
    techStack: ["Next.js", "React", "Markdown", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Static generation for blog posts with incremental revalidation.",
      "Support for code blocks, images, and rich markdown extensions.",
      "Simple admin interface with live preview.",
    ],
    links: [
      {
        label: "Blog Demo",
        url: "https://example.com/storypress",
        kind: "demo",
      },
    ],
    tags: ["blog", "content", "static-site"],
    featured: false,
  },
  {
    id: "recommendation-service",
    title: "Product Recommendation Service",
    shortDescription:
      "A backend service that generates personalized product recommendations for an online shop.",
    description:
      "A small, fictional microservice that exposes APIs for fetching recommended products based on user behavior and item similarity. It combines collaborative filtering signals with simple content-based features.",
    role: "ML Engineer",
    company: "Insightful Systems",
    location: "San Francisco, United States",
    period: {
      start: "2018-01",
      end: "2018-08",
    },
    techStack: ["Python", "FastAPI", "scikit-learn", "PostgreSQL", "Docker"],
    highlights: [
      "Offline training pipeline for computing recommendation vectors.",
      "REST API for retrieving personalized and related-item recommendations.",
      "Basic monitoring and logging for API performance.",
    ],
    links: [
      {
        label: "API Playground",
        url: "https://example.com/recommendation-service",
        kind: "demo",
      },
    ],
    tags: ["ml", "backend", "recommendation"],
    featured: false,
  },
];
