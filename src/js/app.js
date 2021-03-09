export default function sortHealthLevel(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
