/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "../style/global.scss"
import Contact from '../components/contact'
import ButtonAppBar from './Navbar'
import HashLoader from "react-spinners/HashLoader"
import BounceLoader from "react-spinners/BounceLoader"
import Spinner from "bootstrap"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const Layout = ({ children }) => {

  // const [loading, setLoading] = useState(false);
  // const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  // useEffect(()=> {
  //   setLoading(true)
  //   setTimeout(() =>{
  //     setLoading(false)
  //   }, 8000)
  // }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // background: $mainWhite;
  // padding: 2rem 5rem;
  return (
    <> 
      
          <div>
            <ButtonAppBar/>
          <main>{children}</main>
          <footer>
            <Contact/>
            {` `}
          </footer>
          </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


// {
//   loading ? (
//     // <ClipLoader color={'#F37A24'} loading={loading} size={150} />
//     <div style={style}>
//       {/* <BounceLoader color={'#FFF72B'} loading={loading} size={50} /> */}
//       <Loader
//         type="Puff"
//         color="#00BFFF"
//         height={100}
//         width={100}
//         timeout={3000} //3 secs
//       />
//     </div>
//   ) : (