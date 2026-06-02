'use client';
import React, { useState } from 'react';
import { Button } from '@/components/Button';

type Course = {
  id: string;
  name: string;
  urls: string[];
};

export default function RecordedClassesTabs({
  courses,
}: {
  courses: Course[];
}) {
  const [active, setActive] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const activeCourse = courses[active];
  const total = activeCourse.urls.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  // keep page in range when switching courses or pageSize
  React.useEffect(() => {
    setPage(0);
  }, [active, pageSize]);

  return (
    <div>
      <div className="flex gap-2 rounded-md bg-slate-50 p-1">
        {courses.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setActive(i)}
            className={`rounded-md px-4 py-2 text-sm font-medium focus:outline-none ${
              i === active ? 'bg-white shadow-sm' : 'text-slate-600'
            }`}
            aria-current={i === active}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto">
        {activeCourse.urls.length === 0 ? (
          <div className="rounded-md border border-dashed border-slate-200 p-6 text-center text-slate-600">
            No recordings yet for {activeCourse.name}.
          </div>
        ) : (
          <>
            <div className="text-sm text-slate-600">By Sh Muhammad Helmi</div>
            <div className="mx-auto max-w-4xl">
              <table className="w-full table-fixed text-left">
                <thead>
                  <tr className="border-b text-sm text-slate-700">
                    <th className="w-1/2 py-3 pr-6 text-center">Title</th>
                    <th className="w-1/2 py-3 pl-6 text-center">Watch</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {activeCourse.urls
                    .slice(page * pageSize, (page + 1) * pageSize)
                    .map((url, localIdx) => {
                      const idx = page * pageSize + localIdx;
                      return (
                        <tr key={url} className="odd:bg-white even:bg-slate-50">
                          <td className="align-center py-4 pr-6">
                            <div className="text-center font-medium text-slate-900">{`${activeCourse.name} - Session ${idx + 1}`}</div>
                          </td>
                          <td className="py-4 pl-6 align-top">
                            <Button
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full justify-center rounded-xl bg-yellow-900 text-white ring-1 ring-yellow-700/20 ring-inset hover:bg-yellow-500 focus-visible:outline-yellow-500"
                              variant="solid"
                            >
                              Watch
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-slate-600">
                  Showing {Math.min(total, page * pageSize + 1)} -{' '}
                  {Math.min(total, (page + 1) * pageSize)} of {total}
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPage((p) => Math.max(0, p - 1))}
                      disabled={page === 0}
                      className="m-2 rounded-md bg-white p-2 text-sm ring-1 disabled:opacity-50"
                    >
                      Prev
                    </button>
                    <div className="text-sm text-slate-700">
                      Page {page + 1} / {totalPages}
                    </div>
                    <button
                      onClick={() =>
                        setPage((p) => Math.min(totalPages - 1, p + 1))
                      }
                      disabled={page >= totalPages - 1}
                      className="m-2 rounded-md bg-white p-2 text-sm ring-1 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
