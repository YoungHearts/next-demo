// import App from 'next/app'
import './global.css'
function MyApp({Component,pageProps}){
    console.log('pageProps',pageProps)
    return <Component {...pageProps}/>
}
// MyApp.getInitialProps = async (appContext) => {
// // calls page's `getInitialProps` and fills `appProps.pageProps`
// const appProps = await App.getInitialProps(appContext);

// console.log('appProps',appProps)
// return { ...appProps }
// }
export default MyApp