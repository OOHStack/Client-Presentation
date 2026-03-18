import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.optional(v.string()),
    createdAt: v.number(),
  }),
  deckEvents: defineTable({
    sessionId: v.string(),
    eventType: v.string(),
    slideIndex: v.optional(v.number()),
    payload: v.optional(v.string()),
    createdAt: v.number(),
  }),
});
