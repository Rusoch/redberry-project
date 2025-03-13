import { useEffect, useState } from 'react';
import Image from 'next/image';

interface CardProps {
  priority: 'low' | 'medium' | 'high';
  department: string;
  title: string;
  description: string;
  avatarSrc: string;
  commentsCount: number;
  onCommentClick?: () => void;
}

export default function Card({
  priority,
  department,
  title,
  description,
}: CardProps) {
  const priorityStyles = {
    low: "bg-green-200 text-green-800",
    medium: "bg-yellow-200 text-yellow-800",
    high: "bg-red-200 text-red-800",
  };

  return (
    <div className="flex flex-col min-h-[100px] bg-darkBlack p-4 w-full max-w-[400px] rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div className={`flex items-center justify-center ${priority} font-normal w-[86px] h-[26px]`}> 
          <span className="mr-2">
            <Image src="/icons/priority-icon.svg" alt="priority icon" width={16} height={16} />
          </span>
          <span>{priority}</span>
        </div>
        <div className="w-auto h-[26px]">
          <span className="text-sm text-gray-600">{department}</span>
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <h2 className="text-lg font-normal">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <Image src="/icons/avatar.svg" alt="coworker avatar" width={32} height={32} />
        </div>
        <div className="flex items-center gap-2">
          <Image src="/icons/comment-icon.svg" alt="comment icon" width={16} height={16} />
          <span className="text-sm text-gray-600">3</span> {/* Example comment count */}
        </div>
      </div>
    </div>
  );
} 