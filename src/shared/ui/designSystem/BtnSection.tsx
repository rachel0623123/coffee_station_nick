import { Button } from "../buttons/Button";
import { CtrlBtn } from "../buttons/CtrlBtn";
import { IconButton } from "../buttons/IconButton";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export const BtnSection = () => {
    return (
        <section className="ds_section">
            <h2 className="text-mdTtl mb-5 text-coffee-900">Buttons</h2>
            <div className="flex flex-wrap bg-beige p-4 rounded-2xl">

                {/*<--------------------- Middle Round Buttons ----------------------->*/}
                <div className="ds_section_content">
                    <Button content="Reserve" className="mdRound_dark_btn"/>
                    <p>mdRound_dark_btn</p>
                </div>

                <div className="ds_section_content">
                    <Button content="Checkout" className="mdRound_dark_btn-bigSize"/>
                    <p>mdRound_dark_btn-bigSize</p>
                </div>
                
                <div className="ds_section_content">
                    <Button content="Reserve Your Experience" className="mdRound_light_btn-bigSize"/>
                    <p>mdRound_light_btn-bigSize</p>
                </div>
                
                <div className="ds_section_content">
                    <Button content="Host" className="mdRound_light_btn-search"/>
                    <p>mdRound_light_btn-search</p>
                </div>
                
                <div className="ds_section_content">
                    <Button content="09:00 AM" className="mdRound_light_btn-time"/>
                    <p>mdRound_light_btn-time</p>
                </div>

                <div className="ds_section_content">
                    <Button content="09:00 AM" className="mdRound_dark_btn-time"/>
                    <p>mdRound_dark_btn-time</p>
                </div>

                {/*<--------------------- Full Round Buttons ----------------------->*/}

                <div className="ds_section_content">
                    <Button content="Order Now" className="flRound_dark_btn"/>
                    <p>flRound_dark_btn</p>
                </div>

                <div className="ds_section_content">
                    <Button content="View Full Menu" className="flRound_light_btn"/>
                    <p>flRound_light_btn</p>
                </div>

                <div className="ds_section_content">
                    <Button content="View Full Menu →" className="flRound_dark_btn-aftIcon"/>
                    <p>flRound_dark_btn-aftIcon</p>
                </div>

                <div className="ds_section_content">
                    <Button content="All" className="flRound_dark_btn-smallSize"/>
                    <p>flRound_dark_btn-smallSize</p>
                </div>

                <div className="ds_section_content">
                    <Button content="Coffee" className="flRound_light_btn-smallSize"/>
                    <p>flRound_light_btn-smallSize</p>
                </div>

                <div className="ds_section_content">
                    <IconButton icon={FaPlus} content="Add to Order" className="mdRound_light_icon_btn-hoverDark"/>
                    <p>mdRound_light_icon_btn-hoverDark</p>
                </div>

                {/*<--------------------- Circle Buttons ----------------------->*/}

                <div className="ds_section_content">
                    <CtrlBtn icon={FaPlus} className="circle_dark_ctrl_btn"/>
                    <p>circle_dark_ctrl_btn</p>
                </div>

                <div className="ds_section_content">
                    <CtrlBtn icon={FaMinus} className="circle_light_ctrl_btn"/>
                    <p>circle_light_ctrl_btn</p>
                </div>

            </div>
        </section>
    );
}