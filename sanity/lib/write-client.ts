import "server-only"

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "@/sanity/env";

export const writeClient = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn: false,
    token,
});

if(!writeClient.config().token) {
    throw new Error("Write token not found");
}