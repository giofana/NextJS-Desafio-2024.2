'use client';

import clsx from "clsx";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages, currentPage }: { totalPages: number, currentPage: number }) {
    const { isCurrentPage, allPages } = useMembersPagination({ totalPages, currentPage });
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageURL = (page: number | string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <div className="bg-rosinha-50/50 w-full flex items-center px-4 py-2 justify-center gap-6">
            <div className="flex">
                <PaginationArrow
                    direction="left"
                    href={createPageURL(currentPage - 1)}
                    isDisabled={currentPage <= 1}
                />

                <div className="flex -space-x-px">
                    {allPages.map((page, index) => {
                        let position: 'first' | 'last' | 'single' | 'middle' | undefined;

                        if (index === 0) position = 'first';
                        if (index === allPages.length - 1) position = 'last';
                        if (allPages.length === 1) position = 'single';
                        if (page === '...') position = 'middle';

                        return (
                            <PaginationNumber
                                key={page}
                                href={createPageURL(page)}
                                page={page}
                                position={position}
                                isActive={currentPage === page}
                            />
                        );
                    })}
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

    function PaginationNumber({
        page,
        href,
        isActive,
        position,
    }: {
        page: number | string;
        href: string;
        isActive: boolean;
        position: 'first' | 'last' | 'single' | 'middle' | undefined;
    }) {
        const className = clsx(
            'flex h-10 w-10 items-center justify-center rounded-full text-sm border',
            {
                'rounded-full': position === 'first' || position === 'single',
                '': position === 'last' || position === 'single',
                'z-10 bg-rosaMarrom text-white': isActive,
                'hover:bg-rosaMarrom/90': !isActive && position !== 'middle',
                'text-gray-300': position === 'middle',
            },
        );

        return (
            <Link href={href} className={className}>
                {isActive || position === 'middle' ? (
                    <div className={className}>{page}</div>
                ) : (
                    page
                )}
            </Link>
        );
    }

    function PaginationArrow({
        href,
        direction,
        isDisabled,
    }: {
        href: string;
        direction: 'left' | 'right';
        isDisabled: boolean;
    }) {
        const className = clsx(
            'flex h-10 w-10 items-center rounded-full justify-center border',
            {
                'pointer-events-none text-gray-300': isDisabled,
                'hover:bg-rosaMarrom/60': !isDisabled,
                'mr-2 md:mr-4': direction === 'left',
                'ml-2 md:ml-4': direction === 'right',
            },
        );

        return (
            <Link href={isDisabled ? '#' : href} className={className}>
                {direction === 'left' ? (
                    <ArrowLeftIcon className="w-4" />
                ) : (
                    <ArrowRightIcon className="w-4" />
                )}
            </Link>
        );
    }

    const generatePagination = (currentPage: number, totalPages: number) => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 3) {
            return [1, 2, 3, '...', totalPages - 1, totalPages];
        }

        if (currentPage >= totalPages - 2) {
            return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
        }

        return [
            1,
            '...',
            currentPage - 1,
            currentPage,
            currentPage + 1,
            '...',
            totalPages,
        ];
    };

    export const useMembersPagination = ({ totalPages, currentPage }: { totalPages: number, currentPage: number }) => { 
        const isCurrentPage = (page: number) => currentPage === page;
        const allPages = generatePagination(currentPage, totalPages);

        return { isCurrentPage, allPages };
    };
