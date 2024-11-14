
import Slider from "./Slider"
import Navigation from "./Navigation"

const Header = () =>{
    return(
<header className="row-start-1 w-full">
  <article className="flex font-medium w-[721px] pt-6 pb-4 justify-between">
  <div className="h-[47px] w-[250px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247 46"><path d="M238 14.4a9.2 9.2 0 0 1-2.55-.33l2.49-5.55 2.49 5.55a8.3 8.3 0 0 1-2.44.33Zm8.81 4.22-5.86-12.69a3 3 0 0 0-2.88-2h-.22a3 3 0 0 0-2.94 2l-5.82 12.71a2 2 0 0 0 3.22 2.44 2 2 0 0 0 .43-.67l1.33-2.79a13.3 13.3 0 0 0 4 .61 11.3 11.3 0 0 0 3.82-.58l1.28 2.79a2 2 0 0 0 2.66 1.05 2 2 0 0 0 .93-2.83Zm-21-1.12h-1.11V5.82a2.05 2.05 0 0 0-2.14-2.1 2 2 0 0 0-2.11 2.11v11.65H213V5.82a2.16 2.16 0 1 0-4.32 0v13.69a2 2 0 0 0 2.11 2.11h12.91v1.89a2 2 0 0 0 2.11 2.11 2 2 0 0 0 2-1.28 2 2 0 0 0 .12-.83v-3.93a1.92 1.92 0 0 0-2.11-2.11Zm-21.48 0h-1.11V5.82a2.05 2.05 0 0 0-2.22-2.1 2 2 0 0 0-2.11 2.11v11.65h-7.42V5.82a2.16 2.16 0 1 0-4.32 0v13.69a2 2 0 0 0 2.11 2.11h12.91v1.89a2 2 0 0 0 2.11 2.11 2 2 0 0 0 2.11-2.11v-3.93a1.92 1.92 0 0 0-2.07-2.1Zm-23.9-13.62h-.17c-1.28 0-2.11.61-3 1.89l-7 9.93V6a2.09 2.09 0 1 0-4.18 0v13.2a2.24 2.24 0 0 0 2.38 2.39h.22a3.53 3.53 0 0 0 3-1.89l7-9.93v9.71a2.05 2.05 0 1 0 4.1 0V6.27a2.23 2.23 0 0 0-2.44-2.39Zm-20.87 0h-12A2 2 0 0 0 145.48 6v13.7a2.05 2.05 0 0 0 .62 1.53 2 2 0 0 0 1.54.58 2 2 0 0 0 2.11-2.11V8h7.65v11.7a2 2 0 0 0 2.16 2.11 2.07 2.07 0 0 0 2.16-2.17V5.93a2 2 0 0 0-2.16-2.05m-30.95 13.87a4.74 4.74 0 0 1-4.82-5 4.75 4.75 0 0 1 4.82-4.94 4.72 4.72 0 0 1 4.82 4.94 4.73 4.73 0 0 1-4.82 5m0-14a8.89 8.89 0 0 0-9.09 9 8.85 8.85 0 0 0 9.09 9 9 9 0 0 0 9.09-9.1 8.87 8.87 0 0 0-9.09-8.88Zm-17.46 13.73h-7a13.6 13.6 0 0 0 1.05-3 25 25 0 0 0 .46-4.39l.11-2.09h5.43Zm5.38 0h-1.11V6a2 2 0 0 0-.13-.82 2 2 0 0 0-2-1.29h-9.81A1.88 1.88 0 0 0 101.57 6v2.78a25.6 25.6 0 0 1-.41 5.2 8.6 8.6 0 0 1-1.39 3.49h-.47a1.91 1.91 0 0 0-2.05 2.11v3.94a2 2 0 0 0 2.11 2.11 2 2 0 0 0 2.11-2.11v-1.88h12.91v1.89a2 2 0 0 0 2.09 2.11 2 2 0 0 0 2.11-2.11v-3.95a1.86 1.86 0 0 0-2.05-2.11Zm-28.77.28a4.74 4.74 0 0 1-4.82-5 4.82 4.82 0 1 1 9.64 0 4.7 4.7 0 0 1-4.82 4.99Zm0-14a8.89 8.89 0 0 0-9.09 9 8.84 8.84 0 0 0 9.1 9 9 9 0 0 0 9.09-9.1 8.8 8.8 0 0 0-9.09-9ZM70.2 17.45h-7a13.5 13.5 0 0 0 1.05-3 25 25 0 0 0 .46-4.39L64.82 8h5.43Zm5.38 0h-1.11V6a2 2 0 0 0-2.11-2.11h-9.8A1.88 1.88 0 0 0 60.62 6v2.78a22 22 0 0 1-.39 5.22 8.6 8.6 0 0 1-1.39 3.49h-.47a1.91 1.91 0 0 0-2.05 2.11v3.94a2 2 0 0 0 2.15 2.1 2 2 0 0 0 2.11-2.11v-1.89h12.91v1.89a2 2 0 0 0 2.11 2.11 2 2 0 0 0 2.11-2.11v-3.95a1.92 1.92 0 0 0-2.11-2.11"></path><path d="M19.78 0c12.85 0 22.73 8.86 22.73 22s-9.88 22.3-22.74 22.3H5.33A5.1 5.1 0 0 1 0 39V5.52A5.25 5.25 0 0 1 5.33 0z" style={{fill:"#ff6900"}}></path><path d="M34.57 17.23c-.07.55-.69.55-1 .07-.9-1.52-2.07-1.8-3.94-1.94-1.39-.07-3 .07-4.56.07H25l-.11-.06a.3.3 0 0 1-.11-.21c.28-1.31 1.39-3.72 2.56-3.94.55-.07 1.8-.21 2.49-.21 3.17-.01 4.88 3.66 4.74 6.22m-18 12.55a22.1 22.1 0 0 0 7.19.69 19.1 19.1 0 0 0 8.92-2.91c-1 2.64-5 4.28-8.71 4.69 0 .21-.07.34-.07.55a14.9 14.9 0 0 0 6.77-1.94c-.69 2.56-4.15 3.6-7.33 3.81a4 4 0 0 1-.28.55 15.9 15.9 0 0 0 4.64-.62c-1.46 2.7-7.68 4.57-12.93 2.1a16.6 16.6 0 0 0 1.8-6.92m17.38-18.43a6.07 6.07 0 0 0-4.36-1.66c-2.07 0-3.8.55-6.36.62-1.73.07-3.32-3.72-5.39-4.22a2.69 2.69 0 0 0-4.21-1.24c-1.17-.69-3-.34-3 1-1.31-.41-3 .28-2.28 2.08-3.25.07-3.8 3-1.66 3.25-2.89 1.56-1.57 4.33.78 3.82.42 4.15 2.28 9.55-.76 10.87a8.14 8.14 0 0 1-4.36-.14L0 25.06v2.14a21.3 21.3 0 0 0 6 .8c4-.41 4.22-3.72 4-6.64s-1.17-6.16-.83-8.51l-.14-.14c-1.45 1.52-2.42 1.11-2.56.62-.16-.94 1.53-2.18 2.53-2.6 0-.07.07-.14.07-.21-.9.14-2 0-2.07-.62s1.52-1.52 3.6-1.31c.07 0 .07-.07.14-.07l-.41-.21a.72.72 0 0 1-.46-1 1.48 1.48 0 0 1 1.24-.46 4.6 4.6 0 0 1 1.89.37c.07 0 .07-.07.14-.07a2.5 2.5 0 0 1-.41-.41.53.53 0 0 1 0-.7 1.44 1.44 0 0 1 1.66.28l.34.34h.11l.1-.06a.75.75 0 0 1-.21-.46.41.41 0 0 1 .27-.57.84.84 0 0 1 .83.34 3.4 3.4 0 0 1 .41.86A5.74 5.74 0 0 0 12 8.93a6.61 6.61 0 0 0-.83 5.68 40.6 40.6 0 0 0 2 6.23v.07C14.85 25.68 18 37.44 2.63 43.68a6.3 6.3 0 0 0 2.56.62h1.59a20 20 0 0 0 6.84-5.67c7.05 3.11 13.46 1.52 16.24-3.6A6.77 6.77 0 0 0 33 30a5.19 5.19 0 0 0 1-4.48c-.07-.28-.34-.28-.76-.07-5.74 3.46-10.78 4-16.8 2.22a46 46 0 0 0-.83-5.61c-.14-2.42.62-3.6 5-2.15a13.7 13.7 0 0 1 5.25 2.79c.46.34 1.1.76 1.45.46a1.33 1.33 0 0 0 .28-1 11.6 11.6 0 0 0-1.24-4.36 36 36 0 0 1 3.94 0 2.23 2.23 0 0 1 2 1.52c.46 1.39 3.18 1 3.39-.14.41-2.42.55-5.61-1.8-7.82ZM3.25 32.11a25 25 0 0 0-3.25 0v1.45c1.86-.41 3-.62 3-.62Z"></path><path d="M20.54 17c-2.42-.55-5.1-1.25-6.5-3.32 0-.07-.07-.07-.14-.07a.6.6 0 0 0 .07.34l-.21.07a1.39 1.39 0 0 1-.07-1.66 1.78 1.78 0 0 1 2.28-.21l-.07.21a1.52 1.52 0 0 0-1 .07.38.38 0 0 0-.2.24.38.38 0 0 0 .06.31c1.17 2.22 4.64 2.7 8.71 2.36A.49.49 0 0 0 24 15a7.85 7.85 0 0 1 1.93-3.67 11 11 0 0 1-2 .14c-2.07.14-3.32-.14-3.67-.41l.07-.21a.49.49 0 0 0 .46 0 .26.26 0 0 0-.07-.21c-.39-.37-2.19-2.23-2.19-2.23-.21-1.64-2.53-1.64-3.39-.12l-.28-.07a2.3 2.3 0 0 1 .34-.83 4.35 4.35 0 0 0-3.2 3.72c-.83 7.06 9.88 5.4 12.93 8.24.07.07.21.28.28.14s-1.24-1.8-4.7-2.56Zm-3.72-8.52a1.67 1.67 0 0 1 1.59 1.11c.35.76.28 1.52-.21 1.73a1.55 1.55 0 0 1-1.61-1.1c-.07-.14-.07-.21-.14-.34h.07A.46.46 0 0 0 17 10a.52.52 0 0 0 0-.69.64.64 0 0 0-.55-.41l-.07-.07a.93.93 0 0 1 .41-.34M32.7 27.55a19.1 19.1 0 0 1-8.92 2.91 24.4 24.4 0 0 1-7.19-.69 10.6 10.6 0 0 1-.21 2.08 28.7 28.7 0 0 0 6.15.76 10.33 10.33 0 0 1-3 5.26c3.71.14 7.12-1.31 8.16-3.25a14.1 14.1 0 0 1-4.64.62c.07-.21.21-.34.28-.55 3.18-.14 6.64-1.18 7.33-3.81a14.9 14.9 0 0 1-6.77 1.94c0-.21.07-.34.07-.55 3.71-.46 7.67-2.08 8.71-4.71" style={{fill:"#fff"}}></path><path d="M62 41.85h-3v-3.26h2.7a.57.57 0 1 0 0-1.15H59v-3.26h3A.57.57 0 1 0 62 33h-3.53a.61.61 0 0 0-.66.67v8.62a.61.61 0 0 0 .66.67H62a.57.57 0 1 0 0-1.11M64.27 39.28c0 2 1.09 3.81 3.36 3.81 1.27 0 2-.5 2-1a.46.46 0 0 0-.48-.52 5.8 5.8 0 0 1-1.48.42c-1.53 0-2.13-1.48-2.13-2.74s.6-2.74 2.13-2.74a8.4 8.4 0 0 1 1.5.39.52.52 0 0 0 .5-.52c0-.5-.74-.94-2-.94-2.31.03-3.4 1.86-3.4 3.84M71.21 36.69h1.57v5.67a.62.62 0 0 0 .6.73.63.63 0 0 0 .62-.73v-5.67h1.55a.55.55 0 0 0 .62-.57.54.54 0 0 0-.62-.56h-4.34a.54.54 0 0 0-.62.56.55.55 0 0 0 .62.57M80.8 38.59h-2V36.2a.63.63 0 0 0-.62-.73.62.62 0 0 0-.6.73v6.16a.6.6 0 0 0 .7.64h2.25c2 0 2.84-1 2.84-2.23s-.81-2.18-2.57-2.18m-.27 3.32h-1.75v-2.26h1.75c1.13 0 1.61.41 1.61 1.13s-.71 1.13-1.61 1.13M88.85 36.69h1.57v5.67a.62.62 0 0 0 .6.73.63.63 0 0 0 .62-.73v-5.67h1.55a.55.55 0 0 0 .62-.57.54.54 0 0 0-.62-.56h-4.34a.54.54 0 0 0-.62.56.55.55 0 0 0 .62.57M94.89 39.28c0 2 1.18 3.81 3.28 3.81s3.28-1.83 3.28-3.81-1.18-3.81-3.28-3.81-3.28 1.83-3.28 3.81m1.23 0c0-1.26.53-2.74 2-2.74s2 1.48 2 2.74S99.68 42 98.17 42s-2.04-1.46-2.04-2.72ZM103.74 42.17l-.74 1.54a1.1 1.1 0 0 0-.15.52.55.55 0 0 0 .56.53.74.74 0 0 0 .66-.52l.78-1.54a1.1 1.1 0 0 0 .15-.52.55.55 0 0 0-.56-.53.74.74 0 0 0-.7.52M114.38 40.2h1.2v2.16a.62.62 0 0 0 .6.73.63.63 0 0 0 .62-.73V36.2a.63.63 0 0 0-.62-.73.62.62 0 0 0-.6.73v2.91h-1.13c-1.3 0-2-.53-2-2.25v-.66a.62.62 0 0 0-.6-.73.63.63 0 0 0-.62.73v.8c-.03 2.29 1.26 3.2 3.15 3.2M118.82 36.69h1.57v5.67a.62.62 0 0 0 .6.73.63.63 0 0 0 .62-.73v-5.67h1.55a.55.55 0 0 0 .62-.57.54.54 0 0 0-.62-.56h-4.34a.54.54 0 0 0-.62.56.55.55 0 0 0 .62.57M124.86 39.28c0 2 1.18 3.81 3.28 3.81s3.28-1.83 3.28-3.81-1.18-3.81-3.28-3.81-3.28 1.83-3.28 3.81m1.23 0c0-1.26.53-2.74 2-2.74s2 1.48 2 2.74-.53 2.74-2 2.74-2-1.48-2-2.74M138.55 42.36V39.7h3.54v2.66a.62.62 0 1 0 1.22 0V36.2a.62.62 0 1 0-1.22 0v2.42h-3.54V36.2a.62.62 0 0 0-.62-.73.61.61 0 0 0-.6.73v6.16a.62.62 0 0 0 .6.73.63.63 0 0 0 .62-.73M151.66 42.48v-6.41a.57.57 0 0 0-.57-.6.56.56 0 0 0-.57.6v.39a2.6 2.6 0 0 0-2-1c-2.1 0-3.28 1.83-3.28 3.81s1.18 3.81 3.28 3.81a2.41 2.41 0 0 0 2-1.12v.52a.56.56 0 0 0 .57.6.57.57 0 0 0 .57-.6m-5.25-3.21c0-1.26.53-2.74 2-2.74s2 1.48 2 2.74S150 42 148.45 42s-2.04-1.46-2.04-2.72ZM153.51 39.28c0 2 1.09 3.81 3.36 3.81 1.27 0 2-.5 2-1a.46.46 0 0 0-.48-.52 5.8 5.8 0 0 1-1.48.42c-1.53 0-2.13-1.48-2.13-2.74s.6-2.74 2.13-2.74a8.4 8.4 0 0 1 1.5.39.52.52 0 0 0 .5-.52c0-.5-.74-.94-2-.94-2.31.03-3.4 1.86-3.4 3.84M164.35 39.28c0 2 1.18 3.81 3.28 3.81s3.28-1.83 3.28-3.81-1.18-3.81-3.28-3.81-3.28 1.83-3.28 3.81m1.23 0c0-1.26.53-2.74 2-2.74s2 1.48 2 2.74-.53 2.74-2 2.74-1.99-1.48-1.99-2.74ZM179 39.29c0-2.31-1.11-3.75-3-3.75a2.69 2.69 0 0 0-2.17 1 2.52 2.52 0 0 1 2-2.27c.87-.15 1.61-.18 2.13-.29a.7.7 0 0 0 .73-.6.52.52 0 0 0-.52-.59 7 7 0 0 0-.84.17 14 14 0 0 0-2.17.36c-1.85.6-2.72 2.48-2.72 5.52 0 2 .74 4.24 3.23 4.24 2.22.03 3.33-1.65 3.33-3.79m-3.21-2.72c1.46 0 1.92 1.26 1.92 2.74 0 1.27-.53 2.74-2 2.74s-2-1.47-2-2.74c.03-1.94.92-2.74 2.11-2.74ZM180.72 36.69h1.57v5.67a.6.6 0 0 0 .7.64h2.25c2 0 2.84-1 2.84-2.23s-.8-2.18-2.56-2.18h-2V36.1a.47.47 0 0 0-.53-.55h-2.25a.54.54 0 0 0-.62.56.55.55 0 0 0 .6.58m4.55 5.22h-1.76v-2.26h1.76c1.12 0 1.6.41 1.6 1.13s-.72 1.13-1.6 1.13M190.46 39.75h4.63a.57.57 0 0 0 .69-.66 3.39 3.39 0 0 0-3.21-3.63c-2.09 0-3.35 1.79-3.35 3.81s1 3.81 3.42 3.81c1.46 0 3-.92 3-1.53a.49.49 0 0 0-.45-.55c-.46 0-.88 1-2.52 1a2.12 2.12 0 0 1-2.21-2.25m4.09-.92h-4.09c0-1.13.59-2.35 2.11-2.3a2.1 2.1 0 0 1 1.98 2.3M198 44.36V43h5.82v1.36a.61.61 0 0 0 .59.73.6.6 0 0 0 .59-.73v-1.88a.58.58 0 0 0-.6-.6h-.6v-5.77a.57.57 0 0 0-.64-.56h-3.21a.64.64 0 0 0-.71.62l-.7 3.58a3.68 3.68 0 0 1-.91 2.13h-.21a.58.58 0 0 0-.6.6v1.88a.61.61 0 0 0 .59.73.6.6 0 0 0 .59-.73m1.72-4.12.67-3.57h2.2v5.21h-3.51a3.8 3.8 0 0 0 .63-1.64ZM207.82 42.61l3.53-5v4.79a.62.62 0 1 0 1.22 0v-6.2a.6.6 0 0 0-.59-.69.89.89 0 0 0-.74.48l-3.47 5V36.2a.62.62 0 0 0-.62-.73.61.61 0 0 0-.6.73v6.17a.57.57 0 0 0 .57.71.79.79 0 0 0 .7-.47M216 42.36V39.7h3.54v2.66a.62.62 0 1 0 1.22 0V36.2a.62.62 0 1 0-1.22 0v2.42H216V36.2a.62.62 0 0 0-.62-.73.61.61 0 0 0-.6.73v6.16a.62.62 0 0 0 .6.73.63.63 0 0 0 .62-.73M223.84 42.66l3-2.77v2.53a.56.56 0 0 0 .59.66.59.59 0 0 0 .63-.66v-6.24a.6.6 0 0 0-.71-.63h-2c-1.9 0-2.8 1-2.8 2.24a2 2 0 0 0 2.16 2h.6L223 41.92a.86.86 0 0 0-.39.64.51.51 0 0 0 .55.52 1 1 0 0 0 .68-.42m1.48-6h1.54v2.3h-1.6c-1 0-1.51-.42-1.51-1.15s.62-1.18 1.57-1.18ZM231.05 39.75h4.63a.57.57 0 0 0 .69-.66 3.39 3.39 0 0 0-3.21-3.63c-2.09 0-3.35 1.79-3.35 3.81s1 3.81 3.42 3.81c1.46 0 3-.92 3-1.53a.49.49 0 0 0-.45-.55c-.46 0-.88 1-2.52 1a2.12 2.12 0 0 1-2.21-2.25m4.09-.92h-4.09c0-1.13.59-2.35 2.11-2.3a2.1 2.1 0 0 1 1.98 2.3M237.93 36.69h1.57v5.67a.62.62 0 0 0 .6.73.63.63 0 0 0 .62-.73v-5.67h1.55a.55.55 0 0 0 .62-.57.54.54 0 0 0-.62-.56h-4.34a.54.54 0 0 0-.62.56.55.55 0 0 0 .62.57"></path></svg>
  </div>
  <div className="flex flex-col"><span className="text-lg">Доставка пиццы <span className="text-orange-500">Душанбе</span></span><span>30 мин <span>4.79</span></span></div>
  <div className="flex flex-col"><span className="text-lg">6600</span><span className="text-slate-400">Звонок по телефону</span></div>
  </article>
  <Navigation />
   <Slider />

</header>
    )
}

export default Header