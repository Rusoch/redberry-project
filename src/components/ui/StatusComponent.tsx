import React from 'react';
import useFetchGet from '@/hooks/useFetchGet';
import StatusColumn from '@/components/ui/StatusColumn';

interface Status {
  id: number;
  name: string;
}

export default function StatusComponent() {
  const { data: statuses, loading, error } = useFetchGet<Status[]>('https://momentum.redberryinternship.ge/api/statuses');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="w-full h-[1042px] mb-[152px] mt-[179px] overflow-y-auto px-[120px]">
      <div className="flex gap-10">
        {statuses?.slice(0, 4).map((status, index) => (
          <StatusColumn key={status.id} status={status.name} />
        ))}
      </div>
    </main>
  );
} 