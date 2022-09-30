export default function titleToDOMId(title: string) {
  return title.toLowerCase().split(" ").join("_");
}
