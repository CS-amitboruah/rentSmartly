// To access Local Storage

// Get data from Local Storage

export const getLocalItem = (name: string) => {
  // TODO: need to change data type any
  const data: any = localStorage.getItem(name);

  if (name === "token") {
    return data;
  } else {
    JSON.parse(data);
  }
};

// Set data to Local Storage

export const setLocalItem = (name: string, value: string | number) => {
  // TODO: need to change data type any
  let data: any;

  if (name === "token") {
    data = value;
  } else {
    data = JSON.stringify(value);
  }

  return localStorage.setItem(name, data);
};

// Remove Particular data from Local Storage
export const removeLocalItem = (name: string) => {
  return localStorage.removeItem(name);
};

// Clear all data from Local Storage
export const clearLocalItem = (name: string) => {
  return localStorage.clear();
};
