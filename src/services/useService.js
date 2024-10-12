import { useEffect, useState } from "react";
import {
  fetchAll,
  fetchById,
  createItem,
  updateItem,
  deleteItem,
} from "./services/apiService";

// Custom hook for fetching all data
export const useFetchAll = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchAll(url);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Custom hook for fetching data by ID
export const useFetchById = (url, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchById(url, id);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, id]);

  return { data, loading, error };
};

// Custom hook for creating an item
export const useCreateItem = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = async (data) => {
    setLoading(true);
    try {
      const result = await createItem(url, data);
      return result;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { create, loading, error };
};

// Custom hook for updating an item
export const useUpdateItem = (url, id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const update = async (data) => {
    setLoading(true);
    try {
      const result = await updateItem(url, id, data);
      return result;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, error };
};

// Custom hook for deleting an item
export const useDeleteItem = (url, id) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const remove = async () => {
    setLoading(true);
    try {
      const result = await deleteItem(url, id);
      return result;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { remove, loading, error };
};
