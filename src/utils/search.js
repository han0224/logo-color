export default function search(data, query) {
  return data.filter((item) => item.name.toLowerCase().includes(query));
}
