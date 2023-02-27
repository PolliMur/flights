import { useCallback, useState } from 'react';

import axiosInstance from '@utils/axiosInstance';

const useAPI = url => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async params => {
    setLoading(true);

    try {
      return await axiosInstance.get(url, { params });
    } catch (err) {
      setError(err);

      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = useCallback(() => setError(null), []);

  return { request, loading, error, clearError };
};

export default useAPI;