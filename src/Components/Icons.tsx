export const fastMove = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: "currentColor",
      }}
      d="m15.207 2.292 4 3.995a1 1 0 0 1 .084 1.32l-.083.094-4 4.006a1 1 0 0 1-1.498-1.32l.083-.094L16.083 8H5.5a1 1 0 0 1-.994-.883L4.5 7a1 1 0 0 1 .883-.993L5.5 6h10.59l-2.296-2.293a1 1 0 0 1-.084-1.32l.083-.095a1 1 0 0 1 1.32-.084l.094.084 4 3.995-4-3.995Zm4.283 14.591.007.117a1 1 0 0 1-.883.993l-.117.007H7.913l2.294 2.293a1 1 0 0 1 .084 1.32l-.083.094a1 1 0 0 1-1.32.084l-.095-.084-4-3.996a1 1 0 0 1-.083-1.32l.083-.094 4-4.004a1 1 0 0 1 1.498 1.32l-.083.094L7.918 16h10.579a1 1 0 0 1 .993.883l.007.117-.007-.117Z"
    />
    {children}
  </svg>
);

export const massCopy = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: "currentColor",
      }}
      d="M16 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm8-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm8-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM8 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
    />
    {children}
  </svg>
);

export const disconnect = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: "currentColor",
      }}
      d="M 21.335 10.182 C 16.185 5.033 7.836 5.033 2.687 10.182 C 0.309 12.561 0.649 15.604 2.444 17.399 C 2.699 17.654 3.091 17.713 3.41 17.544 C 3.41 17.544 7.73 15.257 7.73 15.257 C 8.129 15.046 8.317 14.577 8.174 14.149 C 8.174 14.149 7.442 11.954 7.442 11.954 C 10.175 10.002 13.846 10.002 16.579 11.954 C 16.579 11.954 15.815 14.758 15.815 14.758 C 15.693 15.207 15.924 15.677 16.354 15.854 C 16.354 15.854 20.636 17.617 20.636 17.617 C 20.946 17.745 21.303 17.673 21.54 17.436 C 23.332 15.644 23.709 12.556 21.335 10.182 z"
    />
    {children}
  </svg>
);

export const mute = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: "currentColor",
      }}
      d="M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z"
    />
    <path
      style={{
        fill: "currentColor",
      }}
      d="M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z"
    />
    {children}
  </svg>
);

export const unmute = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: "currentColor",
      }}
      d="m2.7 22.7 20-20a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4ZM10.8 17.32c-.21.21-.1.58.2.62V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 0 0-2 0c0 1.45-.52 2.79-1.38 3.83l-.02.02A5.99 5.99 0 0 1 12.32 16a.52.52 0 0 0-.34.15l-1.18 1.18ZM15.36 4.52c.15-.15.19-.38.08-.56A4 4 0 0 0 8 6v4c0 .3.03.58.1.86.07.34.49.43.74.18l6.52-6.52ZM5.06 13.98c.16.28.53.31.75.09l.75-.75c.16-.16.19-.4.08-.61A5.97 5.97 0 0 1 6 10a1 1 0 0 0-2 0c0 1.45.39 2.81 1.06 3.98Z"
    />
    {children}
  </svg>
);

export const deaf = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: "currentColor",
      }}
      d="M12 3a9 9 0 0 0-8.95 10h1.87a5 5 0 0 1 4.1 2.13l1.37 1.97a3.1 3.1 0 0 1-.17 3.78 2.85 2.85 0 0 1-3.55.74 11 11 0 1 1 10.66 0c-1.27.71-2.73.23-3.55-.74a3.1 3.1 0 0 1-.17-3.78l1.38-1.97a5 5 0 0 1 4.1-2.13h1.86A9 9 0 0 0 12 3Z"
    />
    {children}
  </svg>
);

export const undeaf = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: "currentColor",
      }}
      d="M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM17.06 2.94a.48.48 0 0 0-.11-.77A11 11 0 0 0 2.18 16.94c.14.3.53.35.76.12l3.2-3.2c.25-.25.15-.68-.2-.76a5 5 0 0 0-1.02-.1H3.05a9 9 0 0 1 12.66-9.2c.2.09.44.05.59-.1l.76-.76ZM20.2 8.28a.52.52 0 0 1 .1-.58l.76-.76a.48.48 0 0 1 .77.11 11 11 0 0 1-4.5 14.57c-1.27.71-2.73.23-3.55-.74a3.1 3.1 0 0 1-.17-3.78l1.38-1.97a5 5 0 0 1 4.1-2.13h1.86a9.1 9.1 0 0 0-.75-4.72ZM10.1 17.9c.25-.25.65-.18.74.14a3.1 3.1 0 0 1-.62 2.84 2.85 2.85 0 0 1-3.55.74.16.16 0 0 1-.04-.25l3.48-3.48Z"
    />
    {children}
  </svg>
);

export const vc = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: "currentColor",
      }}
      d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"
    />
    <path
      style={{
        fill: "currentColor",
      }}
      d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"
    />
    {children}
  </svg>
);

export const noVC = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: "currentColor",
      }}
      d="M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z"
    />
    <path
      style={{
        fill: "currentColor",
      }}
      d="M11 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-.06a1 1 0 0 1-.74-.32L5.92 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.92l4.28-4.68a1 1 0 0 1 .74-.32H11ZM20.5 12c-.28 0-.5.22-.52.5a7 7 0 0 1-5.13 6.25c-.48.13-.85.55-.85 1.05v.03c0 .6.52 1.06 1.1.92a9 9 0 0 0 6.89-8.25.48.48 0 0 0-.49-.5h-1ZM16.5 12c-.28 0-.5.23-.54.5a3 3 0 0 1-1.33 2.02c-.35.23-.63.6-.63 1.02v.14c0 .63.59 1.1 1.16.83a5 5 0 0 0 2.82-4.01c.02-.28-.2-.5-.48-.5h-1Z"
    />
    {children}
  </svg>
);

export default { fastMove, massCopy, disconnect, mute, unmute, deaf, undeaf, vc, noVC };
