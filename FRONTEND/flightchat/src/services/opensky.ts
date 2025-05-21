// services/openskyService.ts
export const getBcnFlights = async () => {
    const res = await fetch('/api/opensky/bcn');
    if (!res.ok) throw new Error('Error carregant dades');
    return await res.json();
  };
  