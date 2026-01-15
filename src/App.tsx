import {
  CTASection,
  FeaturesSection,
  Footer,
  Hero,
  Companies,
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
      <Companies />
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
