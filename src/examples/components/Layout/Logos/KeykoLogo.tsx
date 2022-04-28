import React from 'react';

export const KeykoLogo = ({
  size = 37,
  color = 'url(#nevermined_logo_gradient)'
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#keyko_logo_clippath)">
        <path
          d="M26.4935 35.188C26.3589 35.2534 26.2243 35.3161 26.0898 35.3764C25.9552 35.4366 25.8014 35.5045 25.6527 35.5648C25.5041 35.625 25.3772 35.6763 25.2401 35.7352C25.2271 35.7384 25.2147 35.7431 25.2029 35.7493L24.8107 35.8954C24.7825 35.9031 24.7607 35.9121 24.7351 35.9198C24.6313 35.9595 24.5326 35.9928 24.4288 36.03C24.3699 36.0467 24.3147 36.0659 24.2584 36.0864C24.1212 36.1274 23.9828 36.1723 23.8482 36.2146C23.6945 36.262 23.5407 36.3068 23.383 36.3491C23.2254 36.3914 23.0742 36.4311 22.9152 36.4773C22.7563 36.5234 22.6012 36.5503 22.441 36.5849C22.2808 36.6195 22.1232 36.6516 21.9643 36.6823C21.3166 36.8044 20.6629 36.8925 20.006 36.9464C19.51 36.9861 19.0076 37.0079 18.5001 37.0079C17.9926 37.0079 17.4876 36.9861 16.9916 36.9464C16.3356 36.8927 15.6828 36.8045 15.0359 36.6823C14.877 36.6516 14.7168 36.6208 14.5566 36.5849C14.3964 36.5491 14.2426 36.5145 14.085 36.4773L13.6479 36.3632C13.6148 36.3524 13.581 36.3439 13.5467 36.3376C13.4262 36.3017 13.3057 36.2709 13.1878 36.2312L13.0866 36.2005C12.9866 36.1723 12.8828 36.1389 12.779 36.1043C12.6752 36.0697 12.5791 36.0428 12.4817 36.0044C11.9485 35.8211 11.4243 35.6135 10.913 35.3841C10.7848 35.3226 10.6438 35.2559 10.5093 35.1957L26.4935 35.188Z"
          fill={color}
        />
        <path
          d="M32.4501 30.647V30.6534C32.2656 30.8687 32.0657 31.0814 31.8696 31.2942C31.7747 31.3954 31.6786 31.4941 31.5774 31.5915C31.3762 31.794 31.1685 31.9952 30.9558 32.1887C30.8481 32.2849 30.7418 32.3746 30.638 32.4669C30.5341 32.5591 30.4226 32.6553 30.3099 32.745C30.2891 32.7654 30.2668 32.7842 30.2432 32.8014C30.1561 32.8731 30.0689 32.9462 29.9792 33.0167H7.03844C6.94873 32.9462 6.85902 32.8731 6.77187 32.8014L6.70522 32.745C6.59501 32.6553 6.48607 32.563 6.3797 32.4669C6.27332 32.3707 6.16695 32.2849 6.06314 32.1887C5.84911 31.9952 5.64149 31.794 5.43772 31.5915C5.33903 31.4941 5.24035 31.3954 5.14551 31.2942C4.94686 31.084 4.74949 30.8713 4.55981 30.6534L32.4501 30.647Z"
          fill={color}
        />
        <path
          d="M35.4915 25.8179C35.4608 25.9012 35.4236 25.9832 35.3877 26.0639C35.3031 26.2523 35.2134 26.4369 35.1237 26.6253C35.1237 26.6253 35.1237 26.6394 35.1147 26.6445C35.0225 26.8303 34.9276 27.0149 34.8289 27.1943C34.7302 27.3737 34.6303 27.5621 34.5265 27.7441C34.5265 27.7441 34.5265 27.7505 34.5265 27.7531C34.4252 27.921 34.324 28.0889 34.2202 28.2581L34.2035 28.2824H2.80413L2.78747 28.2581C2.34826 27.554 1.95732 26.8209 1.61736 26.0639C1.57891 25.9832 1.54431 25.9012 1.51099 25.8179H35.4915Z"
          fill={color}
        />
        <path
          d="M36.677 21.9409C36.677 21.9755 36.6668 22.0063 36.6629 22.037C36.6386 22.1652 36.6104 22.2934 36.5822 22.4215C36.5629 22.5061 36.5463 22.5868 36.5232 22.6714C36.4732 22.9008 36.4168 23.1315 36.3515 23.3609C36.3246 23.4647 36.2964 23.566 36.2656 23.6698C36.2349 23.7736 36.2067 23.8685 36.1721 23.9697H0.824045C0.793286 23.8685 0.762528 23.7711 0.734333 23.6698C0.706137 23.5686 0.672815 23.4647 0.648465 23.3609C0.583103 23.1315 0.520304 22.9008 0.474166 22.6714C0.451097 22.5868 0.437 22.5061 0.417776 22.4215C0.387017 22.2934 0.361385 22.1652 0.337034 22.037C0.337034 22.0063 0.3255 21.9755 0.319092 21.9409H36.677Z"
          fill={color}
        />
        <path
          d="M36.991 19.0049V19.0856C36.991 19.201 36.9833 19.3138 36.9744 19.4253C36.9744 19.4983 36.9744 19.5714 36.9641 19.6418C36.9577 19.77 36.95 19.9046 36.9385 20.034C36.9103 20.3403 36.8795 20.6428 36.8372 20.9452C36.8356 20.9707 36.8317 20.996 36.8257 21.0209H0.170454C0.165538 20.9959 0.162114 20.9706 0.160201 20.9452C0.120472 20.6428 0.0871498 20.3403 0.0640809 20.034C0.0640809 19.9776 0.053828 19.9251 0.0499832 19.8687C0.0422936 19.7931 0.0397303 19.7175 0.0333223 19.6418C0.0269143 19.5662 0.0256327 19.4983 0.0217878 19.4253C0.0140982 19.3138 0.00897177 19.201 0.00512695 19.0856V19.0049H36.991Z"
          fill={color}
        />
        <path
          d="M37 18.4966H0C0 13.5901 1.9491 8.88453 5.41852 5.41511C8.88795 1.94568 13.5935 -0.00341797 18.5 -0.00341797C23.4065 -0.00341797 28.1121 1.94568 31.5815 5.41511C35.0509 8.88453 37 13.5901 37 18.4966Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="keyko_logo_clippath">
          <rect width="37" height="37" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default KeykoLogo;