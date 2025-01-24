import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "./components/Contact.tsx"),
  route("services", "./components/Services.tsx"),
  route("privacyPolicy", "./components/PrivacyPolicy.tsx"),
  route("carrier", "./components/Carrier.tsx"),
  route("termsAndConditions", "./components/TermsAndConditions.tsx"),
  route("about", "./components/AboutUs.tsx"),
  route("website", "./components/Website.tsx"),
  route("marketing", "./components/DigitalMarketing.tsx"),
  route("work", "./components/Work.tsx"),
] satisfies RouteConfig;
