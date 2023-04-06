import React, { useEffect, useState, useRef } from 'react';

const Astronaut = ({getRandomNumber}) => {
  const [angle, setAngle] = useState(0);

  const docWidth = document.body.clientWidth;
  const docHeight = document.body.clientHeight;

  const astro = useRef();

  useEffect(() => {
    let int = setInterval(() => {
      if (astro.current) {
        console.log('moving!')
        console.log(astro.current.style.left)
        console.log(astro.current.style.top)
        if (parseInt(astro.current.style.left) % 2 === 0) {
          astro.current.style.left = `${getRandomNumber(-100, 0)}px`;
        } else {
          astro.current.style.left = `${getRandomNumber(docWidth, docWidth + 100)}px`;
        }

        if (parseInt(astro.current.style.top) % 2 === 0) {
          astro.current.style.top = `${getRandomNumber(-100, 0)}px`;
        } else {
          astro.current.style.top = `${getRandomNumber(docHeight, docHeight + 100)}px`;
        }
      }
    }, 6000)

    return () => {
      clearInterval(int)
    }
  }, []);

  return (
    <div ref={astro} className="astronaut">
      <svg width="100" height="100" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_12_10)">
        <path d="M259.679 243.563C259.679 243.563 184.763 253.213 173.406 317.024C162.05 380.836 193.665 409.197 210.137 415.12" stroke="#DD4E4E" strokeWidth="37"/>
        <path d="M235.794 226.204C194.66 244.197 164.209 256.83 151.987 314.736C139.765 372.642 164.33 410.889 202.402 437.327" stroke="black" strokeWidth="10"/>
        <path d="M266.332 256.946C235.772 268.152 208.122 275.432 200.11 311.95C192.099 348.468 190.659 377.093 219.622 394.832" stroke="black" strokeWidth="10"/>
        <path d="M237.759 226.107L248.044 260.878" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="38.7305" y2="-5" transform="matrix(0.662863 0.770702 -0.80415 0.568744 189.934 253.726)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="40.6359" y2="-5" transform="matrix(1.027 -0.0219208 0.0251596 0.969307 151.819 357)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="45.6182" y2="-5" transform="matrix(0.391764 -0.878075 0.97401 0.357355 203.861 436.42)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="40.7178" y2="-5" transform="matrix(0.693906 -0.684377 0.788802 0.657683 185.305 422.254)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="41.0381" y2="-5" transform="matrix(0.908923 -0.414162 0.485317 0.875841 168.748 401.917)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="40.8388" y2="-5" transform="matrix(1.01012 -0.141962 0.164646 0.963376 157.907 377.652)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="40.1484" y2="-5" transform="matrix(1.01699 0.196223 -0.219693 0.936329 148.738 332.71)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="39.7866" y2="-5" transform="matrix(0.98157 0.3361 -0.369509 0.887403 153.512 311.848)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="39.5032" y2="-5" transform="matrix(0.937511 0.44219 -0.479311 0.835655 160.745 290.92)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="39.0627" y2="-5" transform="matrix(0.827702 0.612988 -0.65011 0.721858 171.437 269.59)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="36.728" y2="-5" transform="matrix(0.491064 0.873186 -0.906193 0.419079 208.431 237.863)" stroke="black" strokeWidth="10"/>
        <rect width="14.4368" height="31.7644" rx="6" transform="matrix(0.0193803 0.999812 -0.999873 0.0159379 367.625 133.873)" fill="black"/>
        <path d="M305.063 303.289L538.359 287.285L564.581 313.564L546.376 373.709L536.135 429.261L543.792 570.246L578.61 693.243L519.576 683.538L475.874 702.655L427.092 605.195L416.451 604.298L373.243 705.358L332.414 682.693L273.34 691.325L309.572 535.027L311.774 457.456L299.368 383.499L277.253 315.454L305.063 303.289Z" fill="white"/>
        <path d="M551.136 274.479L581.676 292.763L592.158 332.033L542.846 284.212L551.136 274.479Z" fill="#D9D9D9"/>
        <path d="M290.106 282.076L309.141 294.844L248.718 342.37L256.505 301.769L290.106 282.076Z" fill="#D9D9D9"/>
        <path d="M274.577 328.838L297.691 380.346L309.173 450.267L280.464 488.361L277.724 537.301L244.714 535.087L205.667 508.866L212.962 405.196L236.349 360.548L274.577 328.838Z" fill="white"/>
        <path d="M234.515 367.457L270.547 397.216L252.249 431.867L216.953 402.341L234.515 367.457Z" fill="#D9D9D9"/>
        <path d="M208.923 519.655L246.852 540.258L280.856 542.037L283.62 570.25L261.372 589.419L231.972 592.843L209.211 580.038L196.035 555.27L208.923 519.655Z" fill="#BBBBBB"/>
        <path d="M311.651 294.959C214.058 365.126 198.187 412.139 204.294 517.794" stroke="black" strokeWidth="10"/>
        <path d="M310.591 449.904C285.602 471.145 276.694 492.9 278.905 540.67" stroke="black" strokeWidth="10"/>
        <path d="M205.341 511.706C244.16 538.218 262.084 546.11 279.952 534.583" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="48.735" y2="-5" transform="matrix(0.85002 0.584466 -0.622009 0.74389 210.666 410.087)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="50.7189" y2="-5" transform="matrix(-0.470214 0.84051 -0.941841 -0.433285 269.641 392.061)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="50.6313" y2="-5" transform="matrix(-0.739004 -0.707373 0.742378 -0.637773 279.433 396.66)" stroke="black" strokeWidth="10"/>
        <path d="M206.631 517.713C158.163 629.015 322.681 603.168 278.136 536.745" stroke="black" strokeWidth="10"/>
        <path d="M564.376 310.878L540.247 371.394L532.898 431.232L558.846 459.296L574.782 496.087L574.315 543.275L605.099 541.382L639.045 530.245L642.963 516.397L642.566 416.427L623.599 373.224L564.376 310.878Z" fill="white"/>
        <path d="M603.387 355.216L568.104 383.635L582.961 417.164L628.676 393.777L603.387 355.216Z" fill="#D9D9D9"/>
        <path d="M639.276 526.771L602.796 546.35L573.852 540.443L566.815 574.988L586.292 593.626L613.377 597.14L635.296 584.966L649.052 561.19L639.276 526.771Z" fill="#BBBBBB"/>
        <path d="M537.897 285.266C630.427 361.684 652.43 413.478 641.421 524.765" stroke="black" strokeWidth="10"/>
        <path d="M536.836 431.73C567.815 458.538 577.266 486.256 568.951 547.457" stroke="black" strokeWidth="10"/>
        <path d="M641.403 525.883C621.141 544.183 589.784 548.33 573.904 537.089" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="47.4502" y2="-5" transform="matrix(-0.948287 0.422479 0.41121 0.867918 631.991 400.099)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="47.5275" y2="-5" transform="matrix(0.410702 0.868146 0.94447 -0.430493 569.234 377.589)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="49.2457" y2="-5" transform="matrix(0.750135 -0.695389 -0.706408 -0.673918 559.457 382.188)" stroke="black" strokeWidth="10"/>
        <path d="M641.524 524.916C679.677 632.542 528.527 606.428 573.967 542.736" stroke="black" strokeWidth="10"/>
        <path d="M305.497 685.03L352.513 690.555L384.439 733.769L385.811 753.153L250.022 731.502L265.768 702.409L305.497 685.03Z" fill="#BBBBBB"/>
        <rect width="31.3006" height="138.115" transform="matrix(0.166989 -0.94817 1.02376 0.148267 240.291 765.371)" fill="#727272"/>
        <path d="M237.365 768.56C249.514 713.284 264.523 687.41 322.082 681.541" stroke="black" strokeWidth="10"/>
        <path d="M319.35 682.301C365.442 683.789 398.834 724.696 383.007 790.463" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="138.887" y2="-5" transform="matrix(1.01997 0.17737 -0.199054 0.941285 245.518 735.693)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="147.448" y2="-5" transform="matrix(1.0209 0.17088 -0.191925 0.942902 237.117 768.234)" stroke="black" strokeWidth="10"/>
        <path d="M500.332 694.521L546.316 684.06L593.467 713.68L602.567 731.264L467.46 756.178L470.372 723.879L500.332 694.521Z" fill="#BBBBBB"/>
        <rect width="30.5889" height="137.572" transform="matrix(-0.224545 -0.926649 1.02455 -0.204156 470.975 791.146)" fill="#727272"/>
        <path d="M470.637 794.866C459.635 739.393 463.161 710.333 514.358 685.769" stroke="black" strokeWidth="10"/>
        <path d="M512.123 687.384C555.618 673.472 603.202 700.46 615.015 766.916" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="136.953" y2="-5" transform="matrix(1.03124 -0.17301 0.190379 0.933147 465.769 762.253)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="142.162" y2="-5" transform="matrix(1.02974 -0.180528 0.198628 0.931676 470.274 794.646)" stroke="black" strokeWidth="10"/>
        <ellipse cx="77.9074" cy="71.1997" rx="77.9074" ry="71.1997" transform="matrix(0.944892 -0.342259 0.400838 0.909996 188.777 139.554)" fill="black"/>
        <ellipse cx="68.1127" cy="62.2483" rx="68.1127" ry="62.2483" transform="matrix(0.944892 -0.342259 0.400838 0.909996 201.739 144.569)" fill="#BBBBBB"/>
        <ellipse cx="77.9074" cy="71.1997" rx="77.9074" ry="71.1997" transform="matrix(0.944892 -0.342259 0.400838 0.909996 440.408 136.337)" fill="black"/>
        <ellipse cx="68.1127" cy="62.2483" rx="68.1127" ry="62.2483" transform="matrix(0.944892 -0.342259 0.400838 0.909996 453.369 141.353)" fill="#BBBBBB"/>
        <ellipse cx="177.323" cy="162.055" rx="177.323" ry="162.055" transform="matrix(0.944892 -0.342259 0.400838 0.909996 187.549 86.6638)" fill="black"/>
        <ellipse cx="166.892" cy="152.523" rx="166.892" ry="152.523" transform="matrix(0.944892 -0.342259 0.400838 0.909996 200.432 91.7138)" fill="white"/>
        <rect width="175.605" height="229.565" rx="45" transform="matrix(-0.0277977 -0.969361 1.02683 -0.0242139 301.644 274.329)" fill="black"/>
        <rect width="15.4833" height="62.9702" rx="6" transform="matrix(1.02817 -0.00379403 0.00434668 0.968656 320.504 130.343)" fill="white"/>
        <rect width="19.3619" height="24.1787" rx="9.68096" transform="matrix(0.702575 0.739364 -0.773551 0.604459 335.73 116.674)" fill="white"/>
        <rect width="16.0289" height="19.6905" rx="8.01443" transform="matrix(-0.017823 0.967527 -1.02902 -0.0155879 391.228 119.889)" fill="white"/>
        <rect width="14.8935" height="30.9134" rx="6" transform="matrix(0.0187859 0.96915 -1.0274 0.0163766 361.785 120.003)" fill="white"/>
        <path d="M273.978 322.993C330.011 445.593 320.472 543.707 269.43 697.786" stroke="black" strokeWidth="10"/>
        <path d="M566.907 311.994C516.392 413.692 522.579 509.08 586.054 706.086" stroke="black" strokeWidth="10"/>
        <mask id="path-65-inside-1_12_10" fill="white">
        <rect width="146.757" height="36.2174" rx="4" transform="matrix(0.999995 -0.00326113 0.00396573 0.999992 353.268 384.431)"/>
        </mask>
        <rect width="146.757" height="36.2174" rx="4" transform="matrix(0.999995 -0.00326113 0.00396573 0.999992 353.268 384.431)" fill="#D9D9D9" stroke="black" strokeWidth="20" mask="url(#path-65-inside-1_12_10)"/>
        <mask id="path-66-inside-2_12_10" fill="white">
        <rect width="146.71" height="107.778" rx="4" transform="matrix(0.999944 -0.0105936 0.0128822 0.999917 353.475 409.977)"/>
        </mask>
        <rect width="146.71" height="107.778" rx="4" transform="matrix(0.999944 -0.0105936 0.0128822 0.999917 353.475 409.977)" fill="#74A4EC" stroke="black" strokeWidth="20" mask="url(#path-66-inside-2_12_10)"/>
        <line y1="-5" x2="105.873" y2="-5" transform="matrix(0.359346 -0.933204 0.953347 0.301877 380.073 710.142)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="104.059" y2="-5" transform="matrix(0.46963 0.882863 -0.916182 0.400763 426.917 616.374)" stroke="black" strokeWidth="10"/>
        <path d="M432.841 616.003C424.217 599.791 418.029 599.197 412.211 610.594" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="55.759" y2="-5" transform="matrix(1.01389 0.213588 -0.238611 0.931419 314.763 628.795)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="31.5824" y2="-5" transform="matrix(1.01156 0.225451 -0.251482 0.927876 321.844 649.013)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="55.0978" y2="-5" transform="matrix(0.976998 -0.357105 0.389527 0.87635 480.012 641.484)" stroke="black" strokeWidth="10"/>
        <line y1="-5" x2="31.2514" y2="-5" transform="matrix(0.981303 -0.345569 0.377423 0.881334 498.609 654.353)" stroke="black" strokeWidth="10"/>
        <path d="M480.742 463.484C485.266 471.989 481.485 482.698 471.407 487.107C461.328 491.516 449.732 487.533 445.208 479.027C440.684 470.522 444.465 459.813 454.543 455.405C464.622 450.996 476.217 454.979 480.742 463.484Z" fill="#DD8A4E" stroke="black" strokeWidth="10"/>
        <rect x="4.97151" y="-5.0233" width="34.0001" height="46.1546" transform="matrix(-0.00568752 -0.999984 0.999989 -0.00467701 364.803 489.894)" fill="#727272" stroke="black" strokeWidth="10"/>
        <path d="M250.412 344.404C246.186 311.451 260.636 289.97 290.363 281.408" stroke="black" strokeWidth="10"/>
        <path d="M554.099 274.294C583.785 284.068 589.394 303.82 592.088 336.505" stroke="black" strokeWidth="10"/>
        </g>
        <defs>
          <clipPath id="clip0_12_10">
            <rect width="800" height="800" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default Astronaut;