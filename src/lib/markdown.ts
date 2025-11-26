export function markdownToHtml(markdown: string) {
  let html = markdown

  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')

  html = html.replace(/`(.+?)`/g, '<code>$1</code>')

  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')

  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>')
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')

  html = html.replace(/^- (.+)$/gm, '<li>$1</li>')
  html = html.replace(/<li>(.+)<\/li>/gm, '<ol><li>$1</li></ol>')

  html = html.replace(/^- (.+)$/gm, '<li>$1</li>')
  html = html.replace(/<li>(.+)<\/li>/gm, '<ul><li>$1</li></ul>')

  return html
}
