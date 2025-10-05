import { Box, Globe, Layers, Eye, Users, BarChart3 } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Ava Martinez",
    company: "HoloWorks Studio",
    image: user1,
    text: "Auvrix streamlined our entire 3D workflow. From modeling to client previews, everything feels faster and more polished.",
  },
  {
    user: "Noah Patel",
    company: "Skyline XR Labs",
    image: user3,
    text: "The real-time collaboration tools are fantastic. Our global team can tweak designs together without missing a beat.",
  },
  {
    user: "Sophia Lee",
    company: "VisionForge",
    image: user2,
    text: "Switching to Auvrix cut our rendering time in half and made complex AR projects surprisingly manageable.",
  },
  {
    user: "Liam Carter",
    company: "NextFrame AR",
    image: user4,
    text: "We launched a full AR demo in record time. The platform’s intuitive UI and powerful export options made it possible.",
  },
  {
    user: "Mia Thompson",
    company: "Pixel Dimension",
    image: user6,
    text: "Auvrix integrates seamlessly with our existing pipeline, letting us focus on creativity instead of setup headaches.",
  },
  {
    user: "Ethan Brooks",
    company: "NovaRender Studio",
    image: user5,
    text: "From start to finish, the experience has been smooth. Excellent documentation and responsive support team.",
  },
];

export const features = [
  {
    icon: <Box/>,
    text: "Intuitive 3D Canvas",
    description:
      "Craft interactive scenes directly in your browser with a smooth, drag-to-build workflow.",
  },
  {
    icon: <Globe />,
    text: "Cross-Reality Output",
    description:
      "Export projects optimized for AR, VR, and web so your designs shine on any device.",
  },
  {
    icon: <Layers />,
    text: "Ready-Made Scene Kits",
    description:
      "Kickstart ideas with pre-built lighting, textures, and environment kits.",
  },
  {
    icon: <Eye />,
    text: "Real-Time Preview",
    description:
      "View changes in real time inside a virtual headset or on-screen viewport.",
  },
  {
    icon: <Users />,
    text: "Team-Sync Editing",
    description:
      "Collaborate with teammates simultaneously and see edits appear instantly.",
  },
  {
    icon: <BarChart3 />,
    text: "Insightful Metrics",
    description:
      "Track engagement and performance with an integrated analytics panel.",
  }
];

export const checklistItems = [
  {
    title: "Seamless Model Imports",
    description:
      "Bring in files from Blender, Maya, or CAD tools with one click—no messy conversions.",
  },
  {
    title: "Real-Time Scene Preview",
    description:
      "Instantly see lighting, textures, and animations exactly as they’ll appear in AR or VR.",
  },
  {
    title: "AI-Powered Asset Cleanup",
    description:
      "Automatically optimize polygons and textures to keep projects light and smooth.",
  },
  {
    title: "Instant Project Sharing",
    description:
      "Generate a single share link to demo your interactive scene anywhere, anytime.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "$0",
    features: [
      "Community workspace",
      "3 project slots",
      "2 GB asset storage",
      "Basic 3D viewer & export",
    ],
  },
  {
    title: "Creator",
    price: "$12",
    features: [
      "Everything in Starter",
      "20 project slots",
      "20 GB asset storage",
      "Real-time collaboration",
    ],
  },
  {
    title: "Studio",
    price: "$99",
    features: [
      "Everything in Creator",
      "Unlimited projects & storage",
      "Advanced rendering pipeline",
      "Team management & permissions",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Design Tutorials" },
  { href: "#", text: "API & SDK" },
  { href: "#", text: "Support Center" },
];

export const platformLinks = [
  { href: "#", text: "Core Features" },
  { href: "#", text: "Integrations" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Download App" },
  { href: "#", text: "Latest Updates" },
];

export const communityLinks = [
  { href: "#", text: "Auvrix Events" },
  { href: "#", text: "Design Meetups" },
  { href: "#", text: "Creator Conferences" },
  { href: "#", text: "AR/VR Hackathons" },
  { href: "#", text: "Careers" },
];