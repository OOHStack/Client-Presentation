import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const insert = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("leads", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
