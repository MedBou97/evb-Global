
'use client';

import { useInView as useInViewObserver, IntersectionOptions } from 'react-intersection-observer';

export function useInView(options?: IntersectionOptions) {
  return useInViewObserver({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  });
}
