/**
 * 
 * @param { textNode } textNode target text node
 * @param { string } selector parameter to be used in the highlight psudo-element in css  
 * @param { number } start starting point of the highligh
 * @param { number } end ending poing of the highlight
 */
export default function highlight(textNode, selector, start, end) {
  
  if (!textNode) {
    console.warn('text node empty');
    return
  }
  
  // Create a new highlight for this color.
  const colorHighlight = new Highlight();
  
  // Register this highlight under a custom name.
  CSS.highlights.set(selector, colorHighlight);

  const range = new Range();
  range.setStart(textNode, start);
  range.setEnd(textNode, end);
  colorHighlight.add(range);
} 




