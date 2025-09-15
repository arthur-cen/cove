// --- D3.js Mock Library ---
const d3 = (function(){
    // This is a more robust mock d3 object to allow the code to run without the full library.
    console.warn("D3.js is not fully implemented in this environment. Animations will be simulated.");
    
    const createChainable = (element) => {
      const chainable = {
        _element: element,
        node: function() { return this._element; },
        style: function(prop, value) { if (this._element) this._element.style[prop] = value; return this; },
        attr: function(prop, value) { if (this._element) this._element.setAttribute(prop, value); return this; },
        text: function(value) { if (this._element) this._element.textContent = value; return this; },
        on: function(event, cb) { if (this._element) this._element.addEventListener(event, cb); return this; },
        append: function(tag) {
          if (!this._element) return this;
          const newEl = document.createElementNS("http://www.w3.org/2000/svg", tag);
          this._element.appendChild(newEl);
          return createChainable(newEl);
        },
        remove: function() {
          if (this._element && this._element.parentNode) {
              this._element.parentNode.removeChild(this._element);
          }
          return this;
        },
        select: function(selector) {
            const selectedEl = this._element ? this._element.querySelector(selector) : null;
            return createChainable(selectedEl);
        },
        interrupt: function() {
            if (this._element && this._element._transition) {
                cancelAnimationFrame(this._element._transition.timer);
            }
            return this;
        },
        transition: function() {
          const transitionChain = {
            _element: this._element,
            _duration: 400, // default duration
            _ease: t => t, // linear ease
            duration: function(ms) { this._duration = ms; return this; },
            ease: function(easeFn) { this._ease = easeFn; return this; },
            attr: function(prop, targetValue) {
                if (!this._element) return this;
                const startValue = parseFloat(this._element.getAttribute(prop));
                const startTime = performance.now();
                const self = this;

                const animate = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / self._duration, 1);
                    const easedProgress = self._ease(progress);
                    const currentValue = startValue + (targetValue - startValue) * easedProgress;
                    if (this._element) {
                        this._element.setAttribute(prop, currentValue);
                    }
                    if (progress < 1) {
                       this._element._transition.timer = requestAnimationFrame(animate);
                    } else {
                        if (self._onEnd) self._onEnd();
                    }
                };

                this._element._transition = {};
                this._element._transition.timer = requestAnimationFrame(animate);
              return this;
            },
            on: function(event, cb) {
              if (event === "end") {
                this._onEnd = cb;
              }
              return this;
            }
          };
          return transitionChain;
        }
      };
      return chainable;
    };
  
    return { 
      select: (selector) => {
        const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
        return createChainable(element);
      },
      easeCircleOut: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
    };
})();

export default d3;
