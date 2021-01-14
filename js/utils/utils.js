export function listener(node, event, handler) {
   node.addEventListener(event, handler);
   return () => node.removeEventListener(event, handler);
}

export function self(fn) {
   return function (event) {
      if (event.target === this) fn.call(this, event);
   };
}

// alert component
export function removeAlert(event) {
   event.target.parentElement.remove();
}

export function changeDisplayValue(event) {
   event.target.parentElement.style.display = "none";
}
