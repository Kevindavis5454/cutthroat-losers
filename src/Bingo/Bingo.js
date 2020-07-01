import React from "react";
import "./bingo.css"

class Bingo extends React.Component {

    render () {
        return (
                <div className='name-select'>
                    <tr><th>Bingo Item 1</th></tr>
                    <tr><td>
                        <select>
                            <option selected>Free</option>
                            <option>Kevin</option>
                            <option>Katy</option>
                            <option>Kristina</option>
                            <option>Galen</option>
                        </select>
                    </td>
                    </tr>
                    <tr><td>
                        <select>
                            <option selected>Free</option>
                            <option>Kevin</option>
                            <option>Katy</option>
                            <option>Kristina</option>
                            <option>Galen</option>
                        </select>
                    </td>
                    </tr>
                    <tr><td>
                        <select>
                            <option selected>Free</option>
                            <option>Kevin</option>
                            <option>Katy</option>
                            <option>Kristina</option>
                            <option>Galen</option>
                        </select>
                    </td>
                    </tr>
                </div>
        )
    }
}

export default Bingo