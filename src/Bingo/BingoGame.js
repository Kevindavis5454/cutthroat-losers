import React from "react";
import "./bingo.css"
import Bingo from "./Bingo";
import Sidebar from "../SideBar/Sidebar";
import {Route} from "react-router-dom";

class BingoGame extends React.Component {

    render () {
        return (
            <>
            <div className='personal-sidebar'>
                <Route path='/bingo' component={Sidebar} />
            </div>
                <div className='personal-content'>
            <div className='bingo-position'>
            <div className='flex-container-bingo'>
                <div className='flex-cell-bingo'>
                <div className='flex-item-bingo'>
                    <Bingo/>
                </div>
            </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>
                <div className='flex-cell-bingo'>
                    <div className='flex-item-bingo'>
                        <Bingo/>
                    </div>
                </div>


            </div>

            </div>
                </div>
            </>
        )
    }
}

export default BingoGame