import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, (draft) => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, (draft) => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(
      draft[currentProp],
      value,
      ...remainingProps
    );
  });
};

// getGradientCSS
export const getGradientCSS = (gradient) => {
  if (!gradient || !gradient.colors || gradient.colors.length < 2) return "";

  const { type, radialType, colors, centerPositions, angel } = gradient;
  const colorStops = colors
    .map(({ color, position }) => `${color} ${position}%`)
    .join(", ");

  if (type === "radial") {
    const shape = radialType || "ellipse";
    const pos = `${centerPositions?.x || 50}% ${centerPositions?.y || 50}%`;
    return `radial-gradient(${shape} at ${pos}, ${colorStops})`;
  } else {
    return `linear-gradient(${angel || 90}deg, ${colorStops})`;
  }
};

export const getNewItemByStyle = (styleSl) => {
  switch (styleSl) {
    case "styleDefault":
      return {
        name: "Savannah Nguyen",
        role: "Project Manager",
        image: "https://pixellyo.com/nextai/html/assets/img/team-member-1.png",
        portfoloLink: "https://",
        isOpenNewTab: false,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"></path></svg>',
      };
    case "styleOne":
      return {
        name: "Peter Parker",
        role: "Project Manager",
        image: "https://i.ibb.co/8x9xK4H/team.jpg",
        portfoloLink: "https://",
        isOpenNewTab: false,
        isSocialLinksNewTab: false,
        socialLinks: [
          {
            platform:
              '<svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="167px" height="167px" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" stroke="#000000" stroke-width="0.00512" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="8.192"></g><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd11b7e3"> <path style="display: inline;" d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379 c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302 c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263 l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"> </path> </g> </g></svg>',
            url: "#",
          },
          {
            platform:
              '<svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444" fill-rule="evenodd"></path> </g></svg>',
            url: "#",
          },
          {
            platform:
              '<svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-271 273 256 256" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-143,273c-70.7,0-128,57.3-128,128c0,52.4,31.5,97.4,76.6,117.2c-0.4-8.9-0.1-19.7,2.2-29.4c2.5-10.4,16.5-69.7,16.5-69.7 s-4.1-8.2-4.1-20.2c0-19,11-33.1,24.7-33.1c11.6,0,17.3,8.7,17.3,19.2c0,11.7-7.5,29.2-11.3,45.4c-3.2,13.6,6.8,24.6,20.2,24.6 c24.3,0,40.6-31.1,40.6-68c0-28-18.9-49-53.3-49c-38.8,0-63,28.9-63,61.3c0,11.2,3.3,19,8.4,25.1c2.4,2.8,2.7,3.9,1.8,7.1 c-0.6,2.3-2,8-2.6,10.3c-0.9,3.2-3.5,4.4-6.4,3.2c-17.9-7.3-26.2-26.9-26.2-48.9c0-36.4,30.7-80,91.5-80c48.9,0,81,35.4,81,73.3 c0,50.2-27.9,87.7-69.1,87.7c-13.8,0-26.8-7.5-31.3-15.9c0,0-7.4,29.5-9,35.2c-2.7,9.9-8,19.7-12.9,27.4c11.5,3.4,23.7,5.3,36.3,5.3 c70.7,0,128-57.3,128-128C-15,330.3-72.3,273-143,273z"></path> </g></svg>',
            url: "#",
          },
          {
            platform:
              '<svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dribble</title> <path d="M25.916 7.921c-1.881 2.234-4.289 3.965-7.035 5.009l-0.118 0.039c0.3 0.612 0.587 1.231 0.85 1.857 0.1 0.225 0.187 0.45 0.275 0.662 0.927-0.102 2.003-0.16 3.092-0.16 2.063 0 4.077 0.208 6.023 0.605l-0.193-0.033c-0.020-3.040-1.107-5.821-2.904-7.994l0.017 0.021zM13.001 3.569c1.595 2.15 3.176 4.6 4.598 7.151l0.178 0.347c2.712-0.908 4.989-2.511 6.694-4.6l0.021-0.026c-2.247-2.006-5.228-3.232-8.494-3.232-1.063 0-2.096 0.13-3.084 0.375l0.088-0.018zM3.46 13.395c4.219-0.022 8.295-0.59 12.176-1.636l-0.333 0.076c-1.652-2.899-3.222-5.318-4.912-7.644l0.163 0.236c-3.596 1.721-6.227 4.966-7.077 8.875l-0.015 0.085zM6.484 24.585c2.42-3.882 6.010-6.839 10.271-8.408l0.141-0.045c0.169-0.056 0.337-0.105 0.506-0.15-0.325-0.731-0.675-1.458-1.040-2.174-3.888 1.154-8.355 1.819-12.977 1.819-0.066 0-0.131-0-0.196-0l0.010 0-0.005 0.39c0 0.003 0 0.006 0 0.009 0 3.297 1.25 6.302 3.301 8.568l-0.010-0.011zM21.005 27.809c-0.682-3.699-1.63-6.957-2.863-10.070l0.126 0.361-0.082 0.025c-4.314 1.346-7.826 4.192-10.002 7.915l-0.045 0.083c2.145 1.688 4.885 2.707 7.863 2.707 1.805 0 3.522-0.374 5.078-1.049l-0.083 0.032zM28.646 18.052c-1.571-0.474-3.376-0.747-5.245-0.747-0.964 0-1.911 0.073-2.836 0.213l0.104-0.013c0.98 2.564 1.842 5.629 2.436 8.789l0.054 0.344c2.874-1.96 4.893-4.993 5.482-8.51l0.010-0.075zM16 30.996c0 0 0 0-0 0-8.282 0-14.996-6.714-14.996-14.996s6.714-14.996 14.996-14.996c8.282 0 14.996 6.714 14.996 14.996 0 0 0 0 0 0v0c-0.011 8.277-6.718 14.984-14.995 14.996h-0.001z"></path> </g></svg>',
            url: "#",
          },
        ],
      };
    case "styleTwo":
      return {
        name: "Jose Knutson",
        role: "Co-founder",
        image: "https://placebeard.it/450x450/11",
        portfoloLink: "https://",
        isOpenNewTab: false,
        socialLinks: [
          {
            platform:
              '<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#231F20" d="M32,34.934L63.617,10.34C62.984,8.965,61.613,8,60,8H4c-1.613,0-2.984,0.965-3.617,2.34L32,34.934z"></path> <path fill="#231F20" d="M34.457,43.156C33.734,43.719,32.867,44,32,44s-1.734-0.281-2.457-0.844L0,20.18V52c0,2.211,1.789,4,4,4h56 c2.211,0,4-1.789,4-4V20.18L34.457,43.156z"></path> </g> </g></svg>',
            url: "#",
          },
          {
            platform:
              '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#000000"></path> </g></svg>',
            url: "#",
          },
          {
            platform:
              '<svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><path class="cls-1" d="M10.57,5.8l2.71-2.72a5.4,5.4,0,0,1,7.64,7.64L18.2,13.43"></path><path class="cls-1" d="M5.8,10.57,3.08,13.28a5.4,5.4,0,0,0,7.64,7.64l2.71-2.72"></path><line class="cls-1" x1="16.77" y1="7.23" x2="7.23" y2="16.77"></line></g></svg>',
            url: "#",
          },
          {
            platform:
              '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.83 8.00001C19.83 8.17001 19.83 8.35001 19.83 8.52001C19.8393 10.0302 19.5487 11.5272 18.9751 12.9242C18.4014 14.3212 17.5562 15.5904 16.4883 16.6583C15.4204 17.7262 14.1512 18.5714 12.7542 19.1451C11.3572 19.7187 9.86017 20.0093 8.34999 20C6.15213 20.0064 3.9992 19.3779 2.14999 18.19C2.47999 18.19 2.78999 18.19 3.14999 18.19C4.96345 18.19 6.72433 17.5808 8.14999 16.46C7.30493 16.4524 6.48397 16.1774 5.80489 15.6744C5.12581 15.1714 4.62349 14.4662 4.36999 13.66C4.62464 13.7006 4.88213 13.7207 5.13999 13.72C5.49714 13.7174 5.85281 13.6738 6.19999 13.59C5.2965 13.4056 4.48448 12.9147 3.90135 12.2003C3.31822 11.486 2.99981 10.5921 2.99999 9.67001C3.55908 9.97841 4.18206 10.153 4.81999 10.18C4.25711 9.80767 3.79593 9.30089 3.47815 8.7055C3.16038 8.11011 2.99604 7.44489 2.99999 6.77001C3.00124 6.06749 3.18749 5.37769 3.53999 4.77001C4.55172 6.01766 5.81423 7.03889 7.24575 7.76757C8.67727 8.49625 10.2459 8.91613 11.85 9.00001C11.7865 8.69737 11.753 8.38922 11.75 8.08001C11.7239 7.25689 11.9526 6.44578 12.4047 5.75746C12.8569 5.06913 13.5104 4.53714 14.2762 4.23411C15.0419 3.93109 15.8826 3.87181 16.6833 4.06437C17.484 4.25693 18.2057 4.69195 18.75 5.31001C19.655 5.12822 20.5214 4.78981 21.31 4.31001C21.0088 5.24317 20.3754 6.0332 19.53 6.53001C20.3337 6.44316 21.1194 6.23408 21.86 5.91001C21.3116 6.71097 20.6361 7.41694 19.86 8.00001H19.83Z" fill="#000000"></path> </g></svg>',
            url: "#",
          },
        ],
      };
    default:
      return {};
  }
};
