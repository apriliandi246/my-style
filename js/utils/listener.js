export default function listener(node, event, handler) {
   node.addEventListener(event, handler);
   return () => node.removeEventListener(event, handler);
}
