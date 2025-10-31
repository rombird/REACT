import Header from "./Header"
import Aside from "./Aside"
import Section from "./Section"
import Footer from "./Footer"
import "./css/Layout.css"

const Layout = ({children, isShowAside=true}) => {
    
    return (
        <div className="wrapper">
            <Header />
            <main>
                 {isShowAside && <Aside />}  {/*homepage에서는 isShowAside=false라서 보이지 않고 about에서는 보이도록*/}
                <Section>
                    {children}
                </Section>
            </main>
            <Footer />
        </div>
    )

}

export default Layout