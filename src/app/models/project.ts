import { Referral } from "./referral";
import { Technologies } from "./technologies";

export interface Projects {
    title: string;
    imgURL: string;
    description: string;
    longDescription: string;
    technologies?: Technologies[];
    referrals?: Referral[];
}
