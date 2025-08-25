import React, { useState } from 'react';

const PersonalPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planType: string) => {
    setSelectedPlan(planType);
  };

  const handleSubscribe = (planType: string) => {
    // For now, redirect to app stores for the free version
    // In the future, this could integrate with payment processing for premium personal plans
    
    const message = `You've selected the ${planType} plan. ` +
      `${planType === 'free' 
        ? 'Click OK to download the free version from your app store.' 
        : 'Premium personal plans will be available soon. For now, enjoy the free version!'}`;
    
    if (window.confirm(message)) {
      // Redirect to app stores
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      
      if (/android/i.test(userAgent)) {
        window.open('https://play.google.com/store/apps/details?id=com.robtuft.newKOR', '_blank');
      } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        window.open('https://apps.apple.com/us/app/kor-keep-on-rolling/id1599601993', '_blank');
      } else {
        // Default to Google Play for desktop users
        window.open('https://play.google.com/store/apps/details?id=com.robtuft.newKOR', '_blank');
      }
    }
  };

  return (
    <>
      <div className="parallax_parent">
        <div className="parallax_sign_up">
          <div style={{ padding: '5%' }}>
            <h1 className="title_box">Personal Account Plans</h1>
            <div className="mobile_textbox">
              <p className="paragraph">
                Perfect for individual cyclists who want to track their bike maintenance 
                without a bike shop partnership. Get started with our free version or 
                upgrade to premium features for enhanced tracking and notifications.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="parallax_parent">
        <div className="parallax2_sign_up">
          <div style={{ padding: '5%' }}>
            <div className="payment-plans">
              {/* Free Plan */}
              <div className={`payment-card1 ${selectedPlan === 'free' ? 'selected' : ''}`}>
                <h1>Free</h1>
                <h2 className="title">$0/month</h2>
                <h2 className="title">Features</h2>
                <ul className="list">
                  <li>Basic component tracking</li>
                  <li>Strava integration</li>
                  <li>Manual maintenance logging</li>
                  <li>Basic wear percentage alerts</li>
                  <li>Single bike support</li>
                </ul>
                <div className="plan-limitations">
                  <h3 className="limitation-title">Limitations:</h3>
                  <ul className="limitation-list">
                    <li>Limited to basic components</li>
                    <li>Manual notifications only</li>
                    <li>No advanced analytics</li>
                  </ul>
                </div>
              </div>
              
              <div className="payment1">
                <div className="payment-row">
                  <button
                    type="button"
                    className={`subscribe ${selectedPlan === 'free' ? 'selected' : ''}`}
                    onClick={() => handlePlanSelect('free')}
                  >
                    {selectedPlan === 'free' ? 'Selected' : 'Select Free Plan'}
                  </button>
                  <button
                    type="button"
                    className="subscribe primary"
                    onClick={() => handleSubscribe('free')}
                  >
                    Download Free App
                  </button>
                </div>
              </div>

              {/* Premium Plan (Coming Soon) */}
              <div className={`payment-card2 ${selectedPlan === 'premium' ? 'selected' : ''}`} style={{ opacity: 0.8 }}>
                <h1>Premium</h1>
                <h2 className="title">$9.99/month</h2>
                <h2 className="title">Features</h2>
                <ul className="list">
                  <li>All Free features</li>
                  <li>Advanced component tracking</li>
                  <li>Automated email/push notifications</li>
                  <li>Multiple bike support</li>
                  <li>Detailed analytics & reports</li>
                  <li>Custom maintenance schedules</li>
                  <li>Weather-based adjustments</li>
                  <li>Component replacement reminders</li>
                </ul>
                <div className="coming-soon-badge">
                  <span>Coming Soon!</span>
                </div>
              </div>
              
              <div className="payment2" style={{ opacity: 0.8 }}>
                <div className="payment-row">
                  <button
                    type="button"
                    className="subscribe disabled"
                    disabled
                  >
                    Coming Soon
                  </button>
                  <p className="coming-soon-text">
                    Premium personal plans will be available in Q2 2024. 
                    Join our free version now and get notified when premium launches!
                  </p>
                </div>
              </div>

              {/* Pro Plan (Future) */}
              <div className="payment-card3" style={{ opacity: 0.5 }}>
                <h1>Pro</h1>
                <h2 className="title">$19.99/month</h2>
                <h2 className="title">Features</h2>
                <ul className="list">
                  <li>All Premium features</li>
                  <li>Unlimited bikes</li>
                  <li>Team/family sharing</li>
                  <li>Advanced part recommendations</li>
                  <li>Integration with bike shop networks</li>
                  <li>Priority customer support</li>
                  <li>Custom component databases</li>
                </ul>
                <h1 style={{ position: 'absolute', bottom: '30%', opacity: 1 }}>
                  Planned for 2024
                </h1>
              </div>
              
              <div className="payment3" style={{ opacity: 0.5 }}>
                <div className="payment-row"></div>
              </div>
            </div>

            {/* FAQ Section for Personal Plans */}
            <div className="personal-plans-faq" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '10px' }}>
              <h2 style={{ color: 'black', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
              
              <div className="faq-item" style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'black', marginBottom: '0.5rem' }}>Q: What's the difference between personal and shop accounts?</h4>
                <p style={{ color: 'black' }}>
                  A: Personal accounts are perfect for individual cyclists. Shop accounts allow bike shops to 
                  invite customers and send automated maintenance notifications with the shop's contact information.
                </p>
              </div>
              
              <div className="faq-item" style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'black', marginBottom: '0.5rem' }}>Q: Can I upgrade from free to premium later?</h4>
                <p style={{ color: 'black' }}>
                  A: Absolutely! When premium personal plans launch, you'll be able to upgrade seamlessly 
                  while keeping all your existing data and settings.
                </p>
              </div>
              
              <div className="faq-item">
                <h4 style={{ color: 'black', marginBottom: '0.5rem' }}>Q: Do I need a bike shop to use KOR?</h4>
                <p style={{ color: 'black' }}>
                  A: Not at all! Personal accounts work completely independently. However, if you have a 
                  participating bike shop, they can provide additional features and support.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="personal-cta-section" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <h2 style={{ color: 'black', marginBottom: '1rem' }}>Ready to Never Miss Maintenance Again?</h2>
              <div className="app-store-buttons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.robtuft.newKOR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-button-link"
                >
                  <img
                    className="store_buttons_large"
                    src="/images/Google_play_button.svg"
                    alt="Download on Google Play Store"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/kor-keep-on-rolling/id1599601993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-button-link"
                >
                  <img
                    className="store_buttons_large"
                    src="/images/Apple_app_store_button.svg"
                    alt="Download on App Store"
                  />
                </a>
              </div>
              <p style={{ color: 'black', marginTop: '1rem' }}>
                ✅ Free to download • 🔒 Secure Strava integration • 📱 Available on all devices
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalPlans;
