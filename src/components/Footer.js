import React from 'react'

export default function Footer(props) {
    return (
        <div className={`bg-${props.Mode} p-3 sticky-bottom text-center`}>
            <footer>
                <h5 className={`text-${props.Mode==="light"?"dark":"light"} p-0 m-0`}>Made with ❤️ By Kamal Sharma</h5>
            </footer>
        </div>
    )
}
