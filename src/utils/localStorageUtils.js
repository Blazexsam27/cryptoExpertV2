class LocalStorageUtils {
  // set data with expiry parameter (would not clear local storage automatically)
  setDataWithExpiry = (key, value, exp) => {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + exp,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  getDataWithExpiry(key) {
    const itemString = localStorage.getItem(key);
    if (!itemString) {
      return null;
    }
    const item = JSON.parse(itemString);
    const now = new Date().getTime();
    if (now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
}

export default new LocalStorageUtils();
