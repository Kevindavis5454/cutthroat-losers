import React from "react";
import "./bingo.css"

class Bingo extends React.Component {

    render () {
        return (
                <div className='name-select'>
                    <tr><th>Bingo Item 1</th></tr>
                    <tr><td className='bingo-select'>
                        <select >
                            <option selected>Free</option>
                            <option>Kevin</option>
                            <option>Bork Bork</option>
                            <option>Woof Woof</option>
                            <option>Moon Moon</option>
                        </select>
                    </td>
                    </tr>
                    <tr><td className='bingo-select'>
                        <select >
                            <option selected>Free</option>
                            <option>Kevin</option>
                            <option>Bork Bork</option>
                            <option>Woof Woof</option>
                            <option>Moon Moon</option>
                        </select>
                    </td>
                    </tr>
                    <tr><td className='bingo-select'>
                        <select >
                            <option selected>Free</option>
                            <option>Kevin</option>
                            <option>Bork Bork</option>
                            <option>Woof Woof</option>
                            <option>Moon Moon</option>
                        </select>
                    </td>
                    </tr>
                </div>
        )
    }
}

export default Bingo