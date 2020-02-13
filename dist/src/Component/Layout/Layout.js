import React from 'react'
import Aux from '../../hoc/Aux'

const layout = (props) => {
    return(
        <Aux>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )
}
export default layout