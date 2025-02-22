export default function Map() {
  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative bg-gray-100">
      {/* <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.6797775010104!2d83.85540987525158!3d20.844633580758956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a23e6862783ebed%3A0x952fbe97a21055a1!2sSukanti%20Academy!5e0!3m2!1sen!2sin!4v1735063011720!5m2!1sen!2sin"
        title="Map of Sukanti Academy, Sonepur"
        className="absolute inset-0 w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      /> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.7843037843045!2d83.8610247851833!3d20.84041478746773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a23e70b2dc26269%3A0x664d0ac35954b1a9!2sSukanti%20International%20School!5e0!3m2!1sen!2sin!4v1740219400014!5m2!1sen!2sin"
        title="Map of Sukanti International School, Sonepur"
        className="absolute inset-0 w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
}
