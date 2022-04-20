import { useContext, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "../styles/modules/nav.module.scss";
import Grid from "../styles/modules/grid.module.scss";
import LayoutContext from "./layout/LayoutContext";

const Navigation = () => {
  const { navColor: color } = useContext(LayoutContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const toggle = () => {
    const visibility = navRef.current.getAttribute("data-visible");
    if (visibility === "false") {
      navRef.current.setAttribute("data-visible", "true");
      buttonRef.current.setAttribute("aria-expanded", "");
    } else {
      navRef.current.setAttribute("data-visible", "false");
      buttonRef.current.removeAttribute("aria-expanded");
    }
  };

  return (
    <header className={`${Nav.header}`}>
      <div className={`${Nav.event}`}>
        <a href="https://torch.ai/post/forbes-names-torch-ai-one-of-americas-best-startup-employers">
          Torch.AI is proud to have been named one of America's Best Startup
          Employers by Forbes magazine.
        </a>
      </div>
      <div
        className={`${Grid.row} ${Nav["Nav__container"]} ${Grid["margin_center"]} ${Grid["container"]} ${Grid["between-lg"]}  ${Grid["between-xs"]}`}
      >
        <div className={`${Nav.Logo}`}>
          <Link href="/">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150px"
                height="100px"
                viewBox="0 0 552.14 116.11"
              >
                <defs />
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className={`${Nav["cls-1"]}`}
                      d="M136.27,63.51a36.5,36.5,0,0,0-13.56-14.92c-.67-.36-1.32-.74-2-1.14A34.84,34.84,0,0,1,109.17,0a35,35,0,0,0,3.31,61.74v0a20,20,0,1,1-14.92-1.19,42.65,42.65,0,0,1-9.38-13.31c-.09-.2-.16-.4-.25-.6a36.48,36.48,0,1,0,48.35,16.85Z"
                    />
                    <polygon
                      style={{ fill: color }}
                      points="23.16 56.26 0 56.26 0 42.89 62.15 42.89 62.15 56.36 39.19 56.36 39.19 115.65 23.16 115.65 23.16 56.26"
                    />
                    <path
                      style={{ fill: color }}
                      d="M192.34,88.71l20.41,27H193.16L174.79,89.52h-7.86v26.23H150.81v-73h32.86c18.37,0,25.4,11.53,25.4,23.36,0,9.9-5.2,19.9-17.34,22.56ZM166.93,55.24V77.18h12.45c7.65,0,14-1.74,14-11,0-9.48-6.33-10.91-14-10.91Z"
                    />
                    <path
                      style={{ fill: color }}
                      d="M257.54,115.85a36.94,36.94,0,1,1,32-55c-6.22,3.26-6.74,3.57-13.67,6.94a21.21,21.21,0,0,0-18.37-10.51,21.63,21.63,0,0,0,0,43.26,21.26,21.26,0,0,0,19-11.32c6.94,3.57,7.14,4,13.67,6.94a36.64,36.64,0,0,1-32.65,19.69"
                    />
                    <polygon
                      style={{ fill: color }}
                      points="351.13 84.42 317.35 84.42 317.35 115.44 301.74 115.44 301.74 42.38 317.35 42.38 317.35 68.81 351.13 68.81 351.13 42.58 366.84 42.58 366.84 115.44 351.13 115.44 351.13 84.42"
                    />
                    <path
                      style={{ fill: color }}
                      d="M462.62,100.43H433.7l-5.41,15H412.18L440.8,44.58h15.11l28.33,70.86H468.12Zm-4-10.91-6.11-16.71a113.24,113.24,0,0,1-4.2-14.21h-.4a113.23,113.23,0,0,1-4.21,14.21l-6,16.71Z"
                    />
                    <path
                      style={{ fill: color }}
                      d="M514.17,44.58v70.86h-14V44.58Z"
                    />
                    <path
                      style={{ fill: color }}
                      d="M537.27,47.52h-3.74v9.2h-3v-9.2H526.8V44.58h10.47Zm14.87-2.94V56.72h-3V50l-3.39,4.34h-.2L542.12,50v6.77h-3V44.58h2.33l4.19,5.67,4.2-5.67Z"
                    />
                    <rect
                      style={{ fill: color }}
                      x="381.99"
                      y="100.4"
                      width="15.04"
                      height="15.04"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </Link>
        </div>
        <button
          className={`${Nav.mobile_nav_toggle}`}
          aria-controls="primary_navigation"
          ref={buttonRef}
          onClick={toggle}
          aria-expanded="false"
        >
          <span className={`${Nav.sr_only}`}>menu</span>
        </button>
        <nav className={`${Nav.parent}`}>
          <ul
            id="primary_navigation"
            data-visible="false"
            ref={navRef}
            className={`${Nav.primary_navigation}`}
          >
            <li>
              <Link href="/platform">
                <a
                  style={{ color: color }}
                  className={
                    router.pathname == "/platform" ? `${Nav.active}` : ""
                  }
                >
                  Platform
                </a>
              </Link>
            </li>
            <li className={`${Nav["dropdown"]}`}>
              <Link href="/solutions">
                <a
                  style={{ color: color }}
                  className={
                    router.pathname == "/solutions" ? `${Nav.active}` : ""
                  }
                >
                  Solutions
                </a>
              </Link>
              <div className={`${Nav["dropdown-content"]}`}>
                <Link href="/solutions#infrastructure" scroll={false}>
                  <a style={{ color: color }}>Infrastructure</a>
                </Link>
                <Link href="/solutions#analytics" scroll={false}>
                  <a style={{ color: color }}>Analytics</a>
                </Link>
                <Link href="/solutions#machine" scroll={false}>
                  <a style={{ color: color }}>Machine learning</a>
                </Link>
                <Link href="/solutions#enterprise" scroll={false}>
                  <a style={{ color: color }}>Enterprise</a>
                </Link>
                <Link href="/solutions#openSource" scroll={false}>
                  <a style={{ color: color }}>Open Source</a>
                </Link>
                <Link href="/solutions#dataApis" scroll={false}>
                  <a style={{ color: color }}>Data APIs</a>
                </Link>
              </div>
            </li>
            <li>
              <Link href="/impact">
                <a
                  style={{ color: color }}
                  className={
                    router.pathname == "/impact" ? `${Nav.active}` : ""
                  }
                >
                  Impact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/company">
                <a
                  style={{ color: color }}
                  className={
                    router.pathname == "/company" ? `${Nav.active}` : ""
                  }
                >
                  Company
                </a>
              </Link>
            </li>
            <li>
              <Link href="/partners">
                <a
                  style={{ color: color }}
                  className={
                    router.pathname == "/partners" ? `${Nav.active}` : ""
                  }
                >
                  Partners
                </a>
              </Link>
            </li>

            <li>
              <Link href="/careers">
                <a
                  style={{ color: color }}
                  className={
                    router.pathname == "/careers" ? `${Nav.active}` : ""
                  }
                >
                  Careers
                </a>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <a
                  style={{ color: color }}
                  className={
                    router.pathname == "/contact" ? `${Nav.active}` : ""
                  }
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
