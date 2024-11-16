import React, { useState } from 'react';
import { faqList } from '../../data/faqdata';
import '../../themes/faqdata.css';

const Faq = () => {
  const [visible, setVisible] = useState(null);

  const toggle = (index) => {
    setVisible(visible === index ? null : index);
  };

  return (
    <div className='faq'>
      <div className='faqHeader'>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faqList">
        {faqList.map((faq, index) => (
          <div key={index} className="faqCard">
            <div>
              <h4 className='faqQuestion' onClick={() => toggle(index)}>
                {faq.Question}
              </h4>
            </div>
            {visible === index && (
              <p className='faqAnswer'>{faq.Answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
