import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <h4>Brokerage Details:</h4>
        <div className="col-6 text-muted">
          <ul>
            <li>
              STT/CTT: Tax charged on exchanges; varies for delivery and
              intraday.
            </li>
            <li>
              Transaction Charges: NSE, BSE, MCX fees vary by transaction
              group/type.
            </li>
            <li>
              Call & Trade: ₹50 per order placed via dealer, includes auto
              square-off.
            </li>
            <li>
              Stamp Duty: Govt. charges as per Stamp Act 1899 for transactions.
            </li>
            <li>
              NRI Brokerage: ₹100/order for F&O; equity charges vary by account
              type.
            </li>
            <li>
              Miscellaneous: GST, SEBI, DP, AMC, pledging, and transfer fees
              apply.
            </li>
          </ul>
        </div>
        <div className="col-6 text-muted">
          <ul>
            <li>
              Delayed Payment: 18% yearly interest or 0.05% daily on debit
              balance.
            </li>
            <li>SEBI Charges: ₹10 per crore + GST for market regulation.</li>
            <li>
              DP Charges: ₹15.34 per scrip sold; discounts for female account
              holders.
            </li>
            <li>
              AMC: BSDA accounts free under ₹4,00,000; others charged ₹300/year
              + GST.
            </li>
            <li>Pledging Charges: ₹30 + GST per pledge request per ISIN.</li>
            <li>
              Payment Gateway: ₹9 + GST; UPI transfers exempt from this charge.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
