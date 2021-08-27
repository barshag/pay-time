import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
// import Link from 'gatsby';
// import { StaticQuery, graphql } from 'gatsby';
// import { GatsbyImage } from "gatsby-plugin-image";
import { headData } from '../mock/data';

// import App from '../components/App';

// const query = graphql`
//   query {
//     allStrapiProjects {
//       edges {
//         node {
//           id
//           Picture {
//             url
//           }
//           Name
//           Description
//         }
//       }
//     }
//   }
// `;

export default () => {
  const { title, lang, description } = headData;

  return (
    /* <StaticQuery
    query={query}
    render={data => (
      <ul>
        { data.allStrapiProjects.edges.foreach(p => (
         <div>
         <li key = {p.node}> {p.node.Name} ,  {p.node.Description} , {p.node.Picture.url} </li>
         <GatsbyImage 
              image ={p.node.Picture.foreach(u => {u})}
               alt={`Hero`}
         />
         </div>

        )) 
        
        // data.strapiProjects.map( p => (
  
       // <li key = {p.strapiId}> p.Name</li>))
        /* {data.strapiProjects.id.map(project => (
          <li key={project.node.strapiId}>{project.node.Name} Prjectino!</li>
        ))} }
        Projectino!
      </ul>
    )}
  />
   */
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title || 'Guy Portfolio...'}</title>
      <html lang={lang || 'en'} />
      <meta name="description" content={description || 'Gatsby Simplefolio'} />
    </Helmet>
    // <Link to="/Hashtagger"> HashTagger service </Link>
    // <App />
    // </>
  );
};
