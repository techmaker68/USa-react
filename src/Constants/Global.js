export const PaymentStatus = {
  0: "unpaid",
  1: "paid",
};
export const PaymentMethod = {
  0: "Cash",
  1: "Check",
  2: "Bank transfer",
  3: "Credit card",
};
export const BillingType = {
  0: "annually",
  1: "monthly",
};
export const AutoRenew = {
  true: "yes",
  false: "no",
};
export const AccessStatus = {
  true: "active",
  false: "inactive",
};

export const RegistrationSource = {
  0: "Website",
  1: "Portal",
};
export const Gender = {
  1: "Male",
  0: "Female",
};
export const DemoRequestStatus = {
  1: "Approve",
  0: "Decline",
};

export const Rules = {
  Name: [
    {
      required: true,
      message: "Field is required",
    },

    ({getFieldValue}) => ({
      validator(_, value) {
        const regex = new RegExp("^[a-zA-Z ]+$");

        if (!value) {
          return Promise.resolve();
        }
        if (value.length < 5) {
          return Promise.reject(new Error("Minimum 5 character."));
        }
        if (!regex.test(value)) {
          return Promise.reject(new Error("Should be only Characters."));
        } else {
          return Promise.resolve();
        }
      },
    }),
  ],
  Required: [
    {
      required: true,
      message: "Field is required.",
    },
  ],
  Email: [
    {
      required: true,
      message: "Email is not valid valid email.",
      type: "email",
    },
  ],

  NumberOfBranches: [
    {
      required: true,
      message: "Field is required.",
      type: "number",
    },
  ],
  ChequeNumber: [
    {
      required: true,
      message: "Field is required.",
    },

    ({getFieldValue}) => ({
      validator(_, value) {
        if (!value) {
          return Promise.resolve();
        }
        if (value) {
          let numberDigits = value.toString().length;
          if (numberDigits < 18 || numberDigits > 22) {
            return Promise.reject(new Error("Min 16 & max 24 length."));
          } else {
            return Promise.resolve();
          }
        }
      },
    }),
  ],
  AccountNumber: [
    {
      required: true,
      message: "Field is required.",
    },

    ({getFieldValue}) => ({
      validator(_, value) {
        if (!value) {
          return Promise.resolve();
        }
        if (value) {
          let accountNumber = value.length;
          if (accountNumber < 16 || accountNumber > 24) {
            return Promise.reject(new Error("Min 16 & max 24 length."));
          } else {
            return Promise.resolve();
          }
        }
      },
    }),
  ],
};
