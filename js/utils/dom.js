export function listener(node, event, handler) {
   node.addEventListener(event, handler);
   return () => node.removeEventListener(event, handler);
}

export function self(fn) {
   return function (event) {
      if (event.target === this) fn.call(this, event);
   };
}
