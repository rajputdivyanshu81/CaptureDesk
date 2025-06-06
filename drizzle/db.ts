import {drizzle} from "drizzle-orm/xata-http";
import { getXataClient } from '@/xata';

const xeta = getXataClient();

export const db = drizzle(xeta);