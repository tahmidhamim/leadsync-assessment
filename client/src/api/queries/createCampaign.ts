import axios from "axios";
import type { Campaign } from "../types/campaign";
import { CampaignInput } from "../types/campaignInput";

export async function createCampaign(input: CampaignInput): Promise<Campaign> {
  const { data } = await axios.post<Campaign>('http://localhost:5000/api/campaigns', input);

  return data as Campaign;
}