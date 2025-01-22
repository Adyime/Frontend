import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "./components/Contact.tsx"),
  route("services", "./components/Services.tsx"),
] satisfies RouteConfig;
