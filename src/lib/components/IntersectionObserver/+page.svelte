<script lang="ts">
    import { tick, createEventDispatcher, afterUpdate, onMount } from "svelte";

    /**
     * The HTML Element to observe.
     */
    export let element: HTMLElement;
    /**
     * Set to `true` to unobserve the element
     * after it intersects the viewport.
     */
    export let once = false;
    /**
     * `true` if the observed element
     * is intersecting the viewport.
     */
    export let intersecting = false;
    /**
     * Specify the containing element.
     * Defaults to the browser viewport.
     */
    export let root: HTMLElement | undefined;
    /** Margin offset of the containing element. */
    export let rootMargin = "0px";
    /**
     * Percentage of element visibility to trigger an event.
     * Value must be between 0 and 1.
     */
    export let threshold = 0.2;
    export let entry: IntersectionObserverEntry | undefined;
    export let observer: IntersectionObserver | undefined;

    const dispatch = createEventDispatcher();
    let prevRootMargin: any = null;
    let prevElement: any = null;
    const initialize = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((_entry) => {
            entry = _entry;
            intersecting = _entry.isIntersecting;
          });
        },
        { root, rootMargin, threshold }
      );
    };
    onMount(() => {
      initialize();
      return () => {
        if (observer) {
          observer.disconnect();
          observer = undefined as unknown as IntersectionObserver;
        }
      };
    });
    afterUpdate(async () => {
      if (entry !== undefined) {
        dispatch("observe", entry);
        if (entry.isIntersecting) {
          dispatch("intersect", entry);
          if (once) observer!.unobserve(element);
        }
      }
      await tick();
      if (element !== null && element !== prevElement) {
        observer!.observe(element);
        if (prevElement !== null) observer!.unobserve(prevElement);
        prevElement = element;
      }
      if (prevRootMargin && rootMargin !== prevRootMargin) {
        observer!.disconnect();
        prevElement = null;
        initialize();
      }
      prevRootMargin = rootMargin;
    });
  </script>
  
  <slot {intersecting} {entry} {observer} />