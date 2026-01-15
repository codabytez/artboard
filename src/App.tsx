import {
  CTASection,
  FeaturesSection,
  Footer,
  Hero,
  LogosSection,
  ManageExpensesSection,
  Navbar,
  NewsletterSection,
  ReceivePaymentsSection,
  TestimonialSection,
} from './components'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogosSection />
      <FeaturesSection />
      <ReceivePaymentsSection />
      <NewsletterSection />
      <ManageExpensesSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
