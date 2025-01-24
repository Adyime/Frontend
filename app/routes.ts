import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "./components/Contact.tsx"),
  route("services", "./components/Services.tsx"),
  route("privacyPolicy", "./components/PrivacyPolicy.tsx"),
  route("carrier", "./components/Carrier.tsx"),
  route("termsAndConditions", "./components/TermsAndConditions.tsx"),
  route("about", "./components/AboutUs.tsx"),
] satisfies RouteConfig;
