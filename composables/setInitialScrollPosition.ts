export const setInitialScrollPosition = (elementIds: Array<string>) => {
  const scrollToPosition = (rowId: string) => {
    const row = document.getElementById(rowId)
    if (row) {
      const rowWidth = row.offsetWidth
      const scrollPosition = (rowWidth * 0.60) - 60
      row.scrollLeft = scrollPosition
    }
  }

  // Apply the scroll position to each row
  if (window.innerWidth < 1024) {
    elementIds.forEach((id: string) => scrollToPosition(id))
  }
}
