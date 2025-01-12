export function extractDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' }); // Formato dd/mm/yyyy
}

export function extractTime(isoString: string): string {
  const date = new Date(isoString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  return `${hours}h ${minutes}m`;
}
