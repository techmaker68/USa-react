const PaymentCard = () => {
  return (
    <div className='payment-details-wrapper'>
      <div className='payment-details-card'>
        <div className='payment-details-card__header'>
          <h1 className='f-16 fw-700'>Payment details</h1>
          <h2 className='f-14 fw-400 color-gray'>
            Payment Mode
            <span className='fw-700 text-black ml-8'>Cash</span>
          </h2>
        </div>
        <div className='horizontal-divider' />
        <div className='payment-details-card__content'>
          {
            // paid
          }
          <div className='d-flex justify-content-between mb-22'>
            <div className='mr-5 fw-500 color-paid'>Paid</div>
            <div className='divider-between' />
            <div className='ml-5 fw-700 f-16'>SAR 200</div>
          </div>
          {
            // payment due
          }
          <div className='d-flex justify-content-between mb-22'>
            <div className='mr-5 fw-500 color-payment'>Payment Date</div>
            <div className='divider-between' />
            <div className='ml-5 fw-700'>20 July, 2021</div>
          </div>
          {
            // received by
          }
          <div className='d-flex justify-content-between'>
            <div className='mr-5 fw-500 color-received'>Received By</div>
            <div className='divider-between' />
            <div className='ml-5 fw-700'>Zarak Akbar Khan</div>
          </div>
        </div>
      </div>
      {
        // Due Date
      }
      <div className='d-flex justify-content-between mt-16'>
        <div className='mr-5 fw-500 f-14 color-silver-chalice'>Due Date</div>
        <div className='divider-between' />
        <div className='ml-5 fw-500 f-14 color-danger'>26 jul, 2023</div>
      </div>
    </div>
  );
};

export default PaymentCard;
