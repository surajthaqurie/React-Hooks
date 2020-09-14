import { useEffect } from 'react';

// Custom Hook is used for re-using logic
function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count]);
}

export default useDocumentTitle;