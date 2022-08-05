import { StoryMeta } from "./types";

declare module "global";
declare global {
    interface Window {
        __kb_sb__: { story: StoryMeta, next: () => boolean };
    }
}