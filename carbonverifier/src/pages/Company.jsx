import BackgroundGlobe from "../components/Globe";
import CompanyDetails from "../components/CompanyDetails";
import Menu from "../components/Menu";


export default function Company() {
    return (
        <div className="h-screen w-full bg-background">
            <Menu />
            <CompanyDetails/>
        </div>
    )
}