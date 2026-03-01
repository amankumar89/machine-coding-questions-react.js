/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import type { RouteObject } from "react-router";
import ColorExplorer from "./modules/ColorExplorer";
import Authentication from "./modules/Authentication";
import ContactForm from "./modules/ContactForm";
import CopyToClipboard from "./modules/CopyToClipboard";

export const DATA: RouteObject[] = [
  {
    path: '/color-explorer',
    element: <ColorExplorer />,
  },
  {
    path: '/authentication',
    element: <Authentication />,
  },
  {
    path: '/contact-form',
    element: <ContactForm />,
  },
  {
    path: '/copy-to-clipboard',
    element: <CopyToClipboard />,
  },
];

export const getTitle = (str: string) =>
  str
    .replace(/^\//, '')                 // remove leading slash
    .replace(/-/g, ' ')                 // replace hyphens with spaces
    .replace(/\b\w/g, c => c.toUpperCase()); // capitalize each word