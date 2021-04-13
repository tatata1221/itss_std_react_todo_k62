import { useState, useEffect } from "react";

/* 
  【Storageフック】
	@@ -9,25 +9,31 @@ import { useState, useEffect } from 'react';
　  - localstrageにあるTodoを削除する
*/

const STORAGE_KEY = "itss-todo";

function useStorage() {
  const [items, setItems] = useState([]); /* 副作用を使う */
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    } else {
      setItems(JSON.parse(data));
    }
  }, []);

  const putItems = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setItems(items);
  };

  const clearItems = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setItems([]);
  };

  return [items, putItems, clearItems];
}

export default useStorage;