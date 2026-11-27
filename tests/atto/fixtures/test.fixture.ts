import { test as base, expect } from "@playwright/test";

export interface Fixtures {}

export const test = base.extend<Fixtures>({});

export { expect };