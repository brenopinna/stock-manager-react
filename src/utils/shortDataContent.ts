export function shortDataContent(data: string | number, maxLength = 20) {
  const stringData = data.toString()
  return stringData.length > maxLength
    ? `${stringData.slice(0, maxLength - 3)}...`
    : stringData
}
