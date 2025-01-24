// Fetch from API here and link it to the components to map through it

// Don't know what the issue was but doing this function in a separate file and importing it was resulting in my Shop.jsx saying that 'data' is not defined

export async function fetchData() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  console.log(data);
  return data;
}

// fetchData();
