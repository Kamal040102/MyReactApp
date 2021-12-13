import React from 'react'
import Typewriter from 'typewriter-effect';

export default function About(props) {
    return (
        <div className="text-center justify-content-center" style={{height:'85vh'}}>
            <h1 className={`my-5 py-5 text-${props.Mode}`}>
                I am,
                <span>
                <Typewriter
                options={{
                    loop:true
                }}
                    onInit = {(typewriter)=>{
                        typewriter.typeString("Kamal Sharma").deleteAll().typeString("Web Developer").deleteAll().typeString("Computer Engineer").deleteAll().typeString("Tech Enthusiast").deleteAll().typeString("Full Stack Developer").start()
                    }}
                />
                </span>
            </h1>
        </div>
    )
}
