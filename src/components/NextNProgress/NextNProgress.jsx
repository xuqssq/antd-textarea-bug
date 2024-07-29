"use client";
import * as NProgress from "nprogress";
import React, { Suspense, useEffect } from "react";
import { onComplete } from "./router-events/events";
import { usePathname, useSearchParams } from "next/navigation";

function Innards() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => onComplete(), [pathname, searchParams]);
  return null;
}

const NextNProgress = ({
  color = "#29D",
  startPosition = 0.3,
  height = 3,
  options,
  nonce,
  spinner = true,
  transformCSS = (css) => (
    <style nonce={nonce} jsx={+true} global={+true}>
      {css}
    </style>
  ),
}) => {
  let timer = null;
  useEffect(() => {
    if (options) {
      NProgress.configure(options);
      NProgress.set(startPosition);
    }
  }, []);

  const css = `
    #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${color};
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: ${height}px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
      #nprogress .spinner {
        display: ${spinner ? "block" : "none"};
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }
      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: ${color};
        border-left-color: ${color};
        border-radius: 50%;
        -webkit-animation: nprogresss-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;

  return (
    <>
      {transformCSS(css)}
      <Suspense fallback={null}>
        <Innards />
      </Suspense>
    </>
  );
};

export default React.memo(NextNProgress);
