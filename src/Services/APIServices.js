const API_BASE_URL = "https://randomuser.me/api/";

// const fetchApi = async (endpoint, method = "GET", params = null) => {
//   const url = `${API_BASE_URL}${endpoint}`;

//   const options = {
//     method,
//     headers: {
//       "Content-Type": "application.json",
//     },
//   };

//   if (params) {
//     options.body = JSON.stringify(params);
//   }

//   try {
//     const response = await fetch(url, options);

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Something went wrong");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error(`HTTP ${method} Error:`, error);
//     throw error;
//   }
// };

// export const httpGet = async (endpoint) => {
//   return fetchApi(endpoint, "GET");
// };

const fetchApi = async (method = "GET", params = null) => {
  const url = `${API_BASE_URL}`;

  const options = {
    method,
    headers: {
      "Content-Type": "application.json",
    },
  };

  if (params) {
    options.body = JSON.stringify(params);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error(`HTTP ${method} Error:`, error);
    throw error;
  }
};

export const httpGet = async (endpoint) => {
  return fetchApi("GET");
};
