const ShippingPolicy = () => {
  return (
  <div className="p-8 max-w-3xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Shipping Policy</h1>
    <p>
      At Syncode, we are committed to delivering your products and services in a 
      timely and reliable manner. Our shipping policy outlines the terms and 
      conditions related to the delivery of physical and/or digital products 
      purchased through our website.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Delivery Timelines</h2>
    <p>
      Orders are typically processed within <strong>2-3 business days</strong> 
      after confirmation. Delivery timelines may vary depending on the customer’s 
      location, type of product/service, and availability. In case of digital 
      services, access credentials or activation links will be shared via email 
      within the same timeframe.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Shipping Charges</h2>
    <p>
      Shipping charges, if applicable, will be displayed at checkout before 
      payment is completed. Digital products or services usually do not incur 
      shipping charges.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Delays & Liability</h2>
    <p>
      While we make every effort to ensure timely delivery, delays may occur due 
      to unforeseen circumstances such as natural calamities, strikes, logistical 
      issues, or delays caused by third-party courier services. Syncode will not 
      be held responsible for such delays, but we will work closely with our 
      delivery partners to resolve issues at the earliest.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">International Shipping</h2>
    <p>
      At present, we primarily ship within India. For international delivery 
      requests, customers may contact our support team before placing an order.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
    <p>
      For any queries related to shipping, please contact us at 
      <a href="mailto:support@syncode.co.in" className="text-blue-600 underline"> support@syncode.co.in</a>.
    </p>
  </div>
);

}

export default ShippingPolicy;
