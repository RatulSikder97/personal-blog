import { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = '';
    };
  }, [title]);
}

export default useDocumentTitle;
