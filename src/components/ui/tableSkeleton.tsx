import { Skeleton } from "@/components/ui/skeleton";

const TableSkeleton = () => {
  return (
    <div className="space-x-4">
      <div className="h-8 mb-4 w-full max-w-3xl">
        <Skeleton className="h-8 w-full max-w-3xl" />
      </div>
      <div className="h-8 w-full max-w-3xl">
        <Skeleton className="h-8 w-full max-w-3xl" />
      </div>
    </div>
  );
};

export default TableSkeleton;
