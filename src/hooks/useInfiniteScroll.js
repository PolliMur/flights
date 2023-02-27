import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import useAPI from '@hooks/useAPI';
import useIntersection from '@hooks/useIntersection';

const useInfiniteScroll = (url, ref, params) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(params.page);
  const [hasMore, setHasMore] = useState(true);

  const { request, error, loading, clearError } = useAPI(url);

  const intersection = useIntersection(ref);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      clearError();
      setPage(prev => prev - 1);
    }
  }, [error, clearError]);

  useEffect(() => {
    if (intersection?.isIntersecting && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [intersection, hasMore]);

  useEffect(() => {
    if (page <= 1 || !ref.current) return;

    (async () => {
      try {
        const loadedData = await request({ ...params, page });

        setHasMore(loadedData.length === params.limit);
        setData(loadedData);
      } catch (e) {}
    })();
  }, [page]);

  useEffect(() => {
    setPage(params.page);
    setHasMore(true);
  }, [params]);

  return { loadedItems: data, loading, hasMore };
};

export default useInfiniteScroll;
