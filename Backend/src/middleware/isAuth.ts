import { MyContext } from "../types";
import { MiddlewareFn } from "type-graphql";

export const isAUth: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error("not authenticated");
  }
  return next();
};
