'use client';

import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { developers } from '@/data/developer';
import CardProject from './CardProject';

const itemsPerPage = 16;

const ProjectDeveloper = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = developers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = developers.slice(startIndex, endIndex);

  const getPaginationItems = () => {
    const items = [];

    for (let page = 1; page <= totalPages; page++) {
      if (
        page === currentPage ||
        page <= 3 ||
        page === totalPages ||
        (page > currentPage - 2 && page < currentPage + 2)
      ) {
        items.push(
          <PaginationItem key={page}>
            <PaginationLink
              className={
                page === currentPage
                  ? 'bg-primary text-white font-bold'
                  : 'hover:bg-primary hover:text-white font-bold'
              }
              isActive={page === currentPage}
              onClick={() => handlePageChange(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (
        (page === 4 && currentPage > 5) ||
        (page === totalPages - 1 && currentPage < totalPages - 4)
      ) {
        items.push(
          <PaginationItem key={page}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    return items;
  };

  return (
    <div className="mt-[32px] px-4 md:px-0 flex flex-col">
      <h1 className="text-primary text-[32px] font-bold tracking-[0.64px]">
        Project Developer
      </h1>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentItems.map((developer) => (
          <CardProject key={developer.id} developer={developer} />
        ))}
      </div>
      <Pagination className="mt-[32px] cursor-pointer ">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="hover:bg-transparent font-bold"
              onClick={() =>
                handlePageChange(Math.max(currentPage - 1, 1))
              }></PaginationPrevious>
          </PaginationItem>
          {getPaginationItems()}
          <PaginationItem>
            <PaginationNext
              className="hover:bg-transparent font-bold"
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }></PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProjectDeveloper;
