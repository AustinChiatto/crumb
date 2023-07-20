// components
import CodeToImg from "../components/CodeToImg/CodeToImg";
import SiteHeader from "../components/global/SiteHeader/SiteHeader";

export default function CodeToImgView() {
    return (
        <>
            <SiteHeader />
            <div className="view-wrapper">
                <CodeToImg />
            </div>
        </>
    );
}
