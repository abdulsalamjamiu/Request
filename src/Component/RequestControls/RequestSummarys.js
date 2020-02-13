import React from 'react'
// import RequestSummary from './RequestControl/RequestSummary'

const requestSummarys = (props) => {
    return (
        <div>
            <ul>
                <li>
                    {props.title}
                </li>
            </ul>
        </div>
    )
}
export default requestSummarys