// An approximate ground: the lowest building base per cell, gaps filled by relaxation from their neighbours.
// Cells farther than GROUND_REACH cells from any building stay NaN: no ground is drawn there.
export const GROUND_CELL = 50
export const GROUND_REACH = 10

export function buildGround(footprints, bounds, cell, reach = GROUND_REACH) {
  const originX = Math.floor(bounds[0] / cell) * cell
  const originY = Math.floor(bounds[1] / cell) * cell
  const columns = Math.ceil((bounds[3] - originX) / cell) + 1
  const rows = Math.ceil((bounds[4] - originY) / cell) + 1
  const heights = new Float32Array(columns * rows).fill(Number.NaN)
  for (let i = 0; i < footprints.length; i += 3) {
    const column = Math.round((footprints[i] - originX) / cell)
    const row = Math.round((footprints[i + 1] - originY) / cell)
    const index = row * columns + column
    if (!(heights[index] <= footprints[i + 2])) heights[index] = footprints[i + 2]
  }
  const known = heights.map((value) => (Number.isNaN(value) ? 0 : 1))
  let mean = 0, count = 0
  for (const value of heights) if (!Number.isNaN(value)) { mean += value; count++ }
  mean = count ? mean / count : 0
  for (let i = 0; i < heights.length; i++) if (!known[i]) heights[i] = mean
  for (let pass = 0; pass < 400; pass++) {
    for (let row = 0; row < rows; row++) for (let column = 0; column < columns; column++) {
      const index = row * columns + column
      if (known[index]) continue
      let sum = 0, n = 0
      if (column > 0) { sum += heights[index - 1]; n++ }
      if (column < columns - 1) { sum += heights[index + 1]; n++ }
      if (row > 0) { sum += heights[index - columns]; n++ }
      if (row < rows - 1) { sum += heights[index + columns]; n++ }
      heights[index] = sum / n
    }
  }
  const distance = new Int32Array(heights.length).fill(-1)
  const queue = []
  for (let i = 0; i < heights.length; i++) if (known[i]) { distance[i] = 0; queue.push(i) }
  for (let head = 0; head < queue.length; head++) {
    const index = queue[head]
    if (distance[index] >= reach) continue
    const column = index % columns, row = (index - column) / columns
    for (const [dc, dr] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const c = column + dc, r = row + dr
      if (c < 0 || r < 0 || c >= columns || r >= rows) continue
      const next = r * columns + c
      if (distance[next] !== -1) continue
      distance[next] = distance[index] + 1
      queue.push(next)
    }
  }
  for (let i = 0; i < heights.length; i++) if (distance[i] === -1) heights[i] = Number.NaN
  let min = Infinity, max = -Infinity
  for (const value of heights) { if (value < min) min = value; if (value > max) max = value }
  return { heights, originX, originY, columns, rows, min: Math.round(min * 100) / 100, max: Math.round(max * 100) / 100 }
}
