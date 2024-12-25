import axios from "axios";
import type { Campaign } from "../types/campaign";

interface CampaignListResponse {
  total: number;
  campaigns: Campaign[];
}

export async function getCampaigns(page: number): Promise<CampaignListResponse> {
  const { data } = await axios.get<CampaignListResponse>(
    `http://localhost:5000/api/campaigns?page=${page}`
  );

  return data as CampaignListResponse;
}