import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const trackEvent = mutation({
  args: {
    sessionId: v.string(),
    eventType: v.string(),
    slideIndex: v.optional(v.number()),
    payload: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("deckEvents", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
