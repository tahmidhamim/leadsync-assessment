import { useEffect, useState } from 'react';
import ActionBar from "./ActionBar";
import TableFooter from "./TableFooter";
import TableView from "./TableView";
import type { Campaign } from '@/api/types/campaign';
import { createCampaign } from '@/api/queries/createCampaign';
import { getCampaigns } from '@/api/queries/getCampaigns';

export default function MainPage() {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [campaignList, setCampaignList] = useState<Campaign[]>([]);

  useEffect(() => {
    getCampaigns(page)
      .then(({ total, campaigns }) => {
        setTotalCount(total);
        setCampaignList(campaigns);
      })
      .catch((error) => console.error('Error fetching campaigns:', error));
  }, [page]);

  const handleCreateCampaign = async () => {
    try {
      const data = await createCampaign({
        name: 'Growth Connection',
        totalLead: 50,
        inviteSent: 50,
        connection: 50,
      });
      setCampaignList([...campaignList, data]);
      setTotalCount(totalCount + 1);
    } catch (error) {
      console.error('Error creating campaign:', error);
    }
  };

  const handlePagination = (newPage: number) => {
    if (newPage > 0 && newPage <= Math.ceil(totalCount / 10)) {
      setPage(newPage);
    }
  };

  return (
    <main className="p-6">
      <ActionBar handleCreateCampaign={handleCreateCampaign} />
      <TableView campaigns={campaignList} />
      <TableFooter page={page} total={totalCount} handlePagination={handlePagination} />
    </main>
  )
}

