import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeRemove = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>,
) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
    >
        <path
            d="M9.293 10.293a1 1 0 0 1 1.414 0L12 11.586l1.293-1.293a1 1 0 1 1 1.414 1.414L13.414 13l1.293 1.293a1 1 0 0 1-1.414 1.414L12 14.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L10.586 13l-1.293-1.293a1 1 0 0 1 0-1.414Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.862 3.344a2 2 0 0 1 2.276 0l7.138 4.939A4 4 0 0 1 22 11.573V17a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5.428a4 4 0 0 1 1.724-3.289l7.138-4.939Zm8.276 6.584L12 4.989 4.862 9.928A2 2 0 0 0 4 11.572V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5.428a2 2 0 0 0-.862-1.644Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeRemove);
export default ForwardRef;
