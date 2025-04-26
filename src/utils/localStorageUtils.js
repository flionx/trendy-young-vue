export function setLocalStorage(key, value) {
    if (value === undefined || value === null) return;

    const data = {
        data: value,
        timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(data));
}
  

export function getLocalStorage(key, maxTimestamp = null) {
    const storage = localStorage.getItem(key);
    if (!storage) return null;

    try {
        const parsed = JSON.parse(storage);

    if (!parsed.timestamp) {
        return parsed;
    }

    if (maxTimestamp && (Date.now() - parsed.timestamp > (maxTimestamp * 60 * 1000))) {
        return null;
    }

    return parsed.data;
    } catch (error) {
        console.error(`Error while getting data from localStorage ${key}:`, error);
        return null;
    }
}