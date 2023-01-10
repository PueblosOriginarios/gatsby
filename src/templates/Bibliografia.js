// import React from "react";
// import { Page } from "../components/Page/index";
// import { graphql } from "gatsby";
// import SanityImage from "gatsby-plugin-sanity-image";
// import { CustomSection } from "../components/index";
// import "./Bibliografia.scss";

// const BibliografiaPage = ({ data }) => {
 
//   const { title, imageHeader } = data?.allSanityBibliografia?.nodes[0];

//   const pageInfo = data?.allSanityBibliografia?.nodes[0];


//   return (
//     <>
//       <Page>
//         <section className='article'>
//           <div className='articleHeader'>
//             <div className='empty-left'></div>

//             <div className='mb-5'>
//               {imageHeader && (
//                 <SanityImage
//                   {...imageHeader}
//                   alt='Image Art'
//                   className='imageHeader'
//                 />
//               )}

//               <div className='titleContent'>
//                 <div></div>
//                 {title && (
//                   <>
//                     <h5 className='title'>{title}</h5>
//                     <div className='vacio'></div>
//                   </>
//                 )}

//                 <div></div>
//               </div>
//             </div>
//             <div className='empty-right'></div>
//           </div>
//           <CustomSection sections={pageInfo?.BibliografiaBuilder} />
//         </section>
//       </Page>
//     </>
//   );
// };


// export default BibliografiaPage;

// export const query = graphql`
//   query($slug: String!) {
//     allSanityBibliografia(filter: { tipoBibliografia: { eq: $slug } }) {
//       nodes {
//         bibliografia {
//             author
//             richTextBody {
//               _rawChildren
//             }
//             categoryReference {
//               _key
//               _type
//               _rawCategoryReference
//             }
//             reference {
//               categoryReferences {
//                 _rawCategoryReference
//                 categoryReference {
//                   category
//                 }
//               }
//             }
//             title
//           }
//       }
//     }
//   }
// `;
