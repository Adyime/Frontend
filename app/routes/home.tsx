import type { Route } from "./+types/home";
import Main from "~/components/Main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adyime" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Main />;
}
