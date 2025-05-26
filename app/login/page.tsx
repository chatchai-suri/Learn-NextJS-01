import LoginButton from "@/components/login-button";
import { Metadata } from "next";
// import image from "@/public/sea-thai.jpg";
import image from "@/public/offer.jpg"
import Image from "next/image";

import cssClass from '@/app/style.module.css'
import GlobalError, { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import TodoPage from "../todo/page";

export const metadata: Metadata = {
  title: "Login Page 888",
  description: 'This is the best gambling website in the world'
  
};

export default function LoginPage() {
  return (
    // <div className={cssClass['flex-center']}>
    <div className="flex-center">
      Login Page
      <LoginButton />
      {/* <img src={image.src} alt=""/> // normal img tag does not optimization */}
      {/* <Image src={image} alt="test logo" quality={50}/> */}
      {/* <Image src='/offer.jpg' width={465} height={100} alt="test logo" /> // src in Image finds image in folder public automatically */}
      <div className="relative h-64 w-64">
        <Image
          src="https://images.pexels.com/photos/31592126/pexels-photo-31592126.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          fill
          alt="test-logo"
        />
      </div>
    </div>
  );
}

// IMAGE
// 1. Local Image --> known image size --> can optimize size to prevent image shift & lazy loading (laod when image into viewport)
// 2. Remote Image https://www.pixel... --> could not know image size

// /login
// function A() {
//   return (
//     <GlobalError>
//       <RootLayout>
//         <Provider>
//           <NotFoundErrorBoundary>
//             <Suspense> // app/loading.tsx
//               <MainLayout>
//                 <LoginPage>
//                   <Menu />
//                   <ErrorBoundary>
//                     <Suspense fallback={<div>Loading</div>}> // app/todo/loading.tsx
//                       <TodoPage>
//                         <Suspense>
//                           <TodoList />
//                         </Suspense>
//                       </TodoPage>
//                     </Suspense>
//                   </ErrorBoundary>
//                 </LoginPage>
//               </MainLayout>
//             </Suspense>
//           </NotFoundErrorBoundary>
//         </Provider>
//       </RootLayout>
//     </GlobalError>
//   )
// }