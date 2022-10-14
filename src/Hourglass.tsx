import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHourglass = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>,
) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        ref={ref}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2v1.757a4 4 0 0 1-1.172 2.829L13.414 12l3.414 3.414A4 4 0 0 1 18 18.243V20a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2v-1.757a4 4 0 0 1 1.172-2.829L10.586 12 7.172 8.586A4 4 0 0 1 6 5.757V4a1 1 0 0 1-1-1Zm3 1v1.757C8 6.755 8.77 7.355 9.414 8h5.172C15.23 7.355 16 6.755 16 5.757V4H8Zm.015 14h7.97a2 2 0 0 0-.57-1.172L12 13.414l-3.414 3.414A2 2 0 0 0 8.015 18Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHourglass);
export default ForwardRef;
