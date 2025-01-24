import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "./components/Contact.tsx"),
  route("services", "./components/Services.tsx"),
  route("privacyPolicy", "./components/PrivacyPolicy.tsx"),
] satisfies RouteConfig;
