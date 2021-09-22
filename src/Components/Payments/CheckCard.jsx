import {Image} from "antd";

const CheckCard = ({data}) => {
  return (
    <div className='payment-details-wrapper'>
      <div className='payment-details-card card-type-cheque'>
        <div className='payment-details-card__header '>
          <h1 className='f-16 fw-700 mb-0'>Payment details</h1>
          <h2 className='f-14 fw-400 mb-0 color-gray'>
            Payment Mode
            <span className='fw-700 text-black ml-8'>Cheque</span>
          </h2>
        </div>
        <div className='horizontal-divider' />
        <div className='d-flex justify-content-center mt-3'>
          <Image
            className='mb-5'
            width={250}
            height={250}
            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          />
        </div>
        <div className='payment-details-card__content'>
          {
            // paid
          }
          <div className='d-flex justify-content-between mb-22'>
            <i className='mr-5 fw-500 color-paid '>Paid</i>
            <div className='divider-between' />
            <div className='ml-5 fw-700 '>SAR {data?.amount ?? "N/A"}</div>
          </div>
          {
            // Bank Name
          }
          <div className='d-flex justify-content-between mb-22'>
            <i className='mr-5 fw-500'>Bank Name</i>
            <div className='divider-between' />
            <div className='ml-5 fw-700 '>{data?.bankName ?? "N/A"}</div>
          </div>
          {
            // Payee Name
          }
          <div className='d-flex justify-content-between mb-22'>
            <i className='mr-5 fw-500'>Payee Name</i>
            <div className='divider-between' />
            <div className='ml-5 fw-700 '>{data?.payeeName ?? "N/A"}</div>
          </div>
          {
            // Check Number
          }
          <div className='d-flex justify-content-between mb-22'>
            <i className='mr-5 fw-500'>Check Number</i>
            <div className='divider-between' />
            <div className='ml-5 fw-700 '>{data?.chequeNumber ?? "N/A"}</div>
          </div>
          {
            // payment due
          }
          <div className='d-flex justify-content-between mb-22'>
            <i className='mr-5 fw-500 color-payment'>Payment Date</i>
            <div className='divider-between' />
            <div className='ml-5 fw-700 '>{data?.chequeDate ?? "N/A"} </div>
          </div>
          {
            // received by
          }
          <div className='d-flex justify-content-between mb-22'>
            <i className='mr-5 fw-500 color-received'>Received By</i>
            <div className='divider-between' />
            <div className='ml-5 fw-700 '>{data?.recievedBy ?? "N/A"}</div>
          </div>

          {
            // Due Date
          }
          <div className='d-flex justify-content-between'>
            <i className='mr-5 fw-500 color-danger'>Due Date</i>
            <div className='divider-between' />
            <div className='ml-5 fw-500 fw-700'>26 jul, 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckCard;
