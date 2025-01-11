import React from "react";

const Home = () => {
  return (
    <>
      <div className='back'>
        <div className='show'>
          <div className=' call text-primary '>Need WORKING CAPITAL?</div>
          <div className=' fs- text-success access'>ACCESS CAPITAL FOR YOUR BUSSINESS IN 24-48 HOURS</div>
          <div>
          </div>
          <div className='already'>Already have an account?
            <a href='/login'>Sign in</a>
          </div>
        </div>
        <div className='process' >
          <h2>HOW IT WORKS</h2>
          <div className='mp'>
            <div className='work'><h3>Request Loan</h3>
              <div className='xb'>Share your business idea</div>
            </div>
            <div className='mp'>
              <div className='work'><h3>Tell your ask</h3>
                <div className='xb'>Tell the amount you need </div>
              </div>
              <div className='mp'>
                <div className='work'><h3>Receive Payment</h3>
                  <div className='xb'>Payment will be shared</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
