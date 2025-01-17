import React from 'react'
import Header from './header'
import Footer from './footer'
import "../styling/landing.css"

function TermsNConditions() {
  return (
    <>
        <Header />
        <div className='termsndconditionsform'>
            <h1>Terms and Conditions</h1>
            
            <section>
                <h2>1. Eligibility</h2>
                <p>1.1. You must be at least 18 years old to use our services.</p>
                <p>1.2. By using our services, you represent and warrant that you have the legal capacity and authority to enter into these Terms.</p>
            </section>

            <section>
                <h2>2. Account Registration</h2>
                <p>2.1. To use certain features of our services, you may need to register for an account.</p>
                <p>2.2. You agree to provide accurate, current, and complete information during the registration process and update such information to keep it accurate, current, and complete.</p>
                <p>2.3. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                <p>2.4. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
            </section>

            <section>
                <h2>3. Sub-Lease Listings</h2>
                <p>3.1. We act as an intermediary platform for sub-leasing properties at affordable rates.</p>
                <p>3.2. We do not own, sell, resell, furnish, provide, rent, re-rent, manage, and/or control properties listed on our site.</p>
                <p>3.3. Property listings are provided by third-party landlords and sub-lessors. We are not responsible for the accuracy, completeness, or legality of the listings.</p>
            </section>

            <section>
                <h2>4. Lease Agreements</h2>
                <p>4.1. Any lease or sub-lease agreement entered via our platform is between the tenant and the landlord or sub-lessor.</p>
                <p>4.2. We are not a party to such agreements and disclaim all liability arising from or related to these agreements.</p>
                <p>4.3. You acknowledge that any disputes arising from lease agreements are between you and the landlord or sub-lessor.</p>
            </section>

            <section>
                <h2>5. Payments</h2>
                <p>5.1. We are not responsible for any payment disputes between tenants and landlords or sub-lessors.</p>
                <p>5.2. All payment terms and conditions are governed by the lease or sub-lease agreements between the tenant and the landlord or sub-lessor.</p>
            </section>

            <section>
                <h2>6. Termination and Cancellation</h2>
                <p>6.1. You may terminate your account at any time by following the instructions on our site.</p>
                <p>6.2. We reserve the right to suspend or terminate your account and access to our services at our sole discretion, without notice, and without liability for any reason, including if you breach these Terms.</p>
            </section>

            <section>
                <h2>7. Dispute Resolution</h2>
                <p>7.1. You agree to waive any right to a jury trial or to participate in a class action.</p>
                <p>7.2. Any disputes arising out of or relating to these Terms or our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>
            </section>

            <section>
                <h2>8. Limitation of Liability</h2>
                <p>8.1. We are not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:</p>
                <ul>
                <li>(i) your use or inability to use our services.</li>
                <li>(ii) any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
                <li>(iii) any interruption or cessation of transmission to or from our services.</li>
                <li>(iv) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services by any third party.</li>
                <li>(v) any errors or omissions in any content; and/or</li>
                <li>(vi) any defamatory, offensive, or illegal conduct of any third party.</li>
                </ul>
            </section>

            <section>
                <h2>9. Indemnification</h2>
                <p>9.1. You agree to defend, indemnify, and hold harmless HESTIA, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of our services or your violation of these Terms.</p>
            </section>

            <section>
                <h2>10. Governing Law</h2>
                <p>10.1. These Terms are governed by and construed in accordance with the laws of the jurisdiction in which HESTIA is headquartered, without regard to its conflict of law principles.</p>
            </section>

            <section>
                <h2>11. Amendments</h2>
                <p>11.1. We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our site. Your continued use of the services after the effective date of the revised Terms constitutes your acceptance of the terms.</p>
            </section>

            <section>
                <h2>12. Contact Information</h2>
                <p>12.1. For any questions about these Terms, please contact us at the given contact information on the website.</p>
            </section>
            </div>
        <Footer />
    </>
  )
}

export default TermsNConditions