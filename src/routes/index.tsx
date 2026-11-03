import { createFileRoute } from "@tanstack/react-router";
import { Book } from "@/components/book";

export const Route = createFileRoute("/")({ component: Book });
