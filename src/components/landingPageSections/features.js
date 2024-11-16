import React from 'react'
import { featureList } from '../../data/featuredata';
import "../../themes/features.css"

const Features = () => {
  return (
    <div className='features'>
        <div className='featureHeader'>
            <h1>Features</h1>
        </div>
         <div className="featureList">
                {featureList.map((feature) => {
                    return (
                        <div className="featureCard">
                            <span className='featureIcon' style={{ backgroundColor: feature.color }}>
                                    {feature.icon}
                            </span>
                            <p className='featureTitle'>{feature.title}</p>
                            <p className='featureDescript'>{feature.description}</p>
                            <h3 className='featureLink'>{feature.link}</h3>
                        </div>
                    );
                })}
            </div>
    </div>
  )
}

export default Features