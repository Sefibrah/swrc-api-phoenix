const USER_GROUP_FIELD_EXTENSIONS = {
  cars: {
    type: "relation",
    relation: "oneToMany",
    target: "api::car.car",
    mappedBy: "userGroup",
  },
  carContracts: {
    type: "relation",
    relation: "oneToMany",
    target: "api::car-contract.car-contract",
    mappedBy: "userGroup",
  },
  carGroups: {
    type: "relation",
    relation: "oneToMany",
    target: "api::car-group.car-group",
    mappedBy: "userGroup",
  },
  carMaintenances: {
    type: "relation",
    relation: "oneToMany",
    target: "api::car-maintenance.car-maintenance",
    mappedBy: "userGroup",
  },
  carReservations: {
    type: "relation",
    relation: "oneToMany",
    target: "api::car-reservation.car-reservation",
    mappedBy: "userGroup",
  },
  contacts: {
    type: "relation",
    relation: "oneToMany",
    target: "api::contact.contact",
    mappedBy: "userGroup",
  },
  customers: {
    type: "relation",
    relation: "oneToMany",
    target: "api::customer.customer",
    mappedBy: "userGroup",
  },
  documents: {
    type: "relation",
    relation: "oneToMany",
    target: "api::document.document",
    mappedBy: "userGroup",
  },
  documentConnections: {
    type: "relation",
    relation: "oneToMany",
    target: "api::document-connection.document-connection",
    mappedBy: "userGroup",
  },
  flightNumbers: {
    type: "relation",
    relation: "oneToMany",
    target: "api::flight-number.flight-number",
    mappedBy: "userGroup",
  },
  guests: {
    type: "relation",
    relation: "oneToMany",
    target: "api::guest.guest",
    mappedBy: "userGroup",
  },
  individuals: {
    type: "relation",
    relation: "oneToMany",
    target: "api::individual.individual",
    mappedBy: "userGroup",
  },
  invoices: {
    type: "relation",
    relation: "oneToMany",
    target: "api::invoice.invoice",
    mappedBy: "userGroup",
  },
  invoicePlaceOfIssues: {
    type: "relation",
    relation: "oneToMany",
    target: "api::invoice-place-of-issue.invoice-place-of-issue",
    mappedBy: "userGroup",
  },
  locations: {
    type: "relation",
    relation: "oneToMany",
    target: "api::location.location",
    mappedBy: "userGroup",
  },
  organisations: {
    type: "relation",
    relation: "oneToMany",
    target: "api::organisation.organisation",
    mappedBy: "userGroup",
  },
  placeOfIssues: {
    type: "relation",
    relation: "oneToMany",
    target: "api::place-of-issue.place-of-issue",
    mappedBy: "userGroup",
  },
  serviceLocations: {
    type: "relation",
    relation: "oneToMany",
    target: "api::service-location.service-location",
    mappedBy: "userGroup",
  },
  typeOfServices: {
    type: "relation",
    relation: "oneToMany",
    target: "api::type-of-service.type-of-service",
    mappedBy: "userGroup",
  },
  mileages: {
    type: "relation",
    relation: "oneToMany",
    target: "api::mileage.mileage",
    mappedBy: "userGroup",
  },
  vehicleTypes: {
    type: "relation",
    relation: "oneToMany",
    target: "api::vehicle-type.vehicle-type",
    mappedBy: "userGroup",
  },
  users: {
    type: "relation",
    relation: "oneToMany",
    target: "plugin::users-permissions.user",
    mappedBy: "userGroup",
  },
  prices: {
    type: "relation",
    relation: "oneToMany",
    target: "api::price.price",
    mappedBy: "userGroup",
  },
  discounts: {
    type: "relation",
    relation: "oneToMany",
    target: "api::discount.discount",
    mappedBy: "userGroup",
  },
  recurringDiscounts: {
    type: "relation",
    relation: "oneToMany",
    target: "api::recurring-discount.recurring-discount",
    mappedBy: "userGroup",
  },
  temporaryDiscounts: {
    type: "relation",
    relation: "oneToMany",
    target: "api::temporary-discount.temporary-discount",
    mappedBy: "userGroup",
  },
  extras: {
    type: "relation",
    relation: "oneToMany",
    target: "api::extra.extra",
    mappedBy: "userGroup",
  },
  transactions: {
    type: "relation",
    relation: "oneToMany",
    target: "api::transaction.transaction",
    mappedBy: "userGroup",
  },
  rentalAgreementDetails: {
    type: "relation",
    relation: "oneToMany",
    target: "api::rental-agreement-detail.rental-agreement-detail",
    mappedBy: "userGroup",
  },
  agreementDetails: {
    type: "relation",
    relation: "oneToMany",
    target: "api::agreement-detail.agreement-detail",
    mappedBy: "userGroup",
  },
  rentalExtras: {
    type: "relation",
    relation: "oneToMany",
    target: "api::rental-extra.rental-extra",
    mappedBy: "userGroup",
  },
  organizationSkins: {
    type: "relation",
    relation: "oneToMany",
    target: "api::organization-skin.organization-skin",
    mappedBy: "userGroup",
  },
  organizationDetails: {
    type: "relation",
    relation: "oneToMany",
    target: "api::organization-detail.organization-detail",
    mappedBy: "userGroup",
  },
  paymentDetails: {
    type: "relation",
    relation: "oneToMany",
    target: "api::payment-detail.payment-detail",
    mappedBy: "userGroup",
  },
  addresses: {
    type: "relation",
    relation: "oneToMany",
    target: "api::address.address",
    mappedBy: "userGroup",
  },
  userSettings: {
    type: "relation",
    relation: "oneToMany",
    target: "api::user-setting.user-setting",
    mappedBy: "userGroup",
  },
  organizationEmailConfigs: {
    type: "relation",
    relation: "oneToMany",
    target: "api::organization-email-config.organization-email-config",
    mappedBy: "userGroup",
  },
  addressOfStays: {
    type: "relation",
    relation: "oneToMany",
    target: "api::address-of-stay.address-of-stay",
    mappedBy: "userGroup",
  },
  carContractFines: {
    type: "relation",
    relation: "oneToMany",
    target: "api::car-contract-fine.car-contract-fine",
    mappedBy: "userGroup",
  },
  fines: {
    type: "relation",
    relation: "oneToMany",
    target: "api::fine.fine",
    mappedBy: "userGroup",
  },
  radarNumbers: {
    type: "relation",
    relation: "oneToMany",
    target: "api::radar-number.radar-number",
    mappedBy: "userGroup",
  },
  policeStations: {
    type: "relation",
    relation: "oneToMany",
    target: "api::police-station.police-station",
    mappedBy: "userGroup",
  },
};

module.exports = {
  USER_GROUP_FIELD_EXTENSIONS,
};
