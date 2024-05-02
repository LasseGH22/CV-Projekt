import { Referral } from "./referral";
import { Technologies } from "./technologies";
import { Origin } from "./origin";

export interface Projects {
    index: number;
    title: string;
    imgURL: string;
    description: string;
    longDescription: string;
    technologies?: Technologies[];
    referrals?: Referral[];
    origin: Origin;
}
