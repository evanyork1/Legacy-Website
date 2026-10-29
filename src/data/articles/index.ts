import { ARTICLES_PART1 } from "./part1";
import { ARTICLES_PART2 } from "./part2";
import type { StaticArticle } from "./types";

export type { StaticArticle };
export const ARTICLES: StaticArticle[] = [...ARTICLES_PART1, ...ARTICLES_PART2];
