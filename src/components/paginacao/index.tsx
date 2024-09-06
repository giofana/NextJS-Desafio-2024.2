"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams); 
    params.set("page", "1");
    params.set("page", String(pageNumber));
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="rounded-full w-full flex items-center px-4 py-2 justify-center gap-6">
      <div className="flex items-center">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className="flex items-center text-sm font-extrabold font-goldplay text-txttab">
          {currentPage} - {totalPages}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </div>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled: boolean;
}) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center rounded-full border",
    {
      "pointer-events-none text-black bg-rosaB": isDisabled,
      "text-white bg-rosaC hover:bg-rosaNav hover:text-white":
        !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  return (
    <Link href={href} className={className}>
      <button>
        {direction === "left" ? (
          <ChevronLeft className="w-4" />
        ) : (
          <ChevronRight className="w-4" />
        )}
      </button>
    </Link>
  );
}