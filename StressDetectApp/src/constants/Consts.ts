//GLOBAL INTERFACES
export interface SelectOption {
  value: string;
  label: string;
  fillColor?: string;
}

//GLOBAL DROP DOWNS
export const accessOptions: SelectOption[] = [
  {value: 'meetAgent', label: 'Meet Agent at Property'},
  {value: 'meetOccupant', label: 'Meet Occupant at Property'},
  {value: 'construction', label: 'Construction Lockbox'},
  {value: 'supra', label: 'Supra Lockbox'},
  {value: 'century', label: 'Century Lockbox'},
  {value: 'other', label: 'Other'},
];
export const OccupantOptions: SelectOption[] = [
  {value: 'occupied_owner', label: 'occupied-owner'},
  {value: 'occupied_Tenant', label: 'occupied-Tenant'},
  {value: 'vacant', label: 'Vacant'},
];
export const propTypeOptions: SelectOption[] = [
  {value: 'sfr', label: 'Sing Family'},
  {value: 'condo', label: 'Condo/Townhouse'},
  {value: 'land', label: 'Land/Lot'},
];
export const postColors: SelectOption[] = [
  {value: 'white', fillColor: '#dcdcdc', label: 'White'},
  {value: 'black', fillColor: 'black', label: 'Black'},
  // { value: "red", fillColor: "red", label: "Red" },
  {value: 'orange', fillColor: 'orange', label: 'Orange'},
  // { value: "green", fillColor: "green", label: "Green" },
  {value: 'blue', fillColor: 'blue', label: 'Blue'},
];
export const riderOptions = [
  {value: 'forSale', label: 'For Sale'},
  {value: 'forLease', label: 'For Lease'},
  {value: 'sold', label: 'Sold'},
  {value: 'comingSoon', label: 'Coming Soon'},
];
export const behalfOfOptions = [
  {value: 'agent', label: ' Agent'},
  {value: 'brokerage', label: 'Brokerage'},
  {value: 'owner', label: 'Owner'},
  {value: 'title-company', label: 'TitleCompany'},
];
export const primaryContactOptions = [
  {value: 'agent', label: ' Contact Agent'},
  {value: 'assistant', label: 'Contact Assistant/TC'},
  {value: 'occupant', label: 'Contact Occupant'},
  ,
];
export const yesNoOptions = [
  {value: 'yes', label: 'Yes'},
  {value: 'no', label: 'No'},
];
export const yesNoMapOptions = [
  {value: 'yes', label: ' Yes, the location above is correct'},
  {value: 'no', label: 'No, the location above is not correct'},
];

export const printOptions = [
  {value: 'yes', label: ' Printing Needed'},
  {value: 'no', label: 'No Printing Needed (Printable PDFs Emailed)'},
];

export const dayTimeOptions = [
  {value: '0', label: '8am-10am'},
  {value: '1', label: '10am-12pm'},
  {value: '2', label: '12pm-2pm'},
  {value: '3', label: '2pm-Dusk'},
];
export const appointmentConfirmationOptions = [
  {value: 'book_available_time', label: 'Book next available time'},
  {value: 'text', label: 'Text'},
  {value: 'email', label: 'Email'},
  {value: 'call', label: 'Call'},
];

export const acceptTerms = [
  {value: 'true', label: 'I agree to terms of use & service.'},
];

export const agentSignOptions = [{value: 'true', label: "Add Agent's Sign"}];
export const agentWillInstallSignOptions = [
  {value: 'true', label: 'Agent will install own sign'},
];

export const rentSaleOptions = [
  {value: 'rent', label: ' Rent'},
  {value: 'sale', label: 'Sale'},
];

export const riderOptionsRadio = [
  {
    value: 'top',
    label: 'On top of sign',
  },
  {value: 'below', label: 'Below sign'},
];

export const mslEntryOptions = [
  {value: 'myself', label: 'Myself'},
  {value: 'other', label: 'Other Agents'},
  {value: 'none', label: 'Do Not Enter my MLS'},
];

export const mslType = [
  {
    value: 'full',
    label: 'Full MLS Entry (Details, Description, Upload Photos)',
  },
  {value: 'description', label: 'Description Only'},
  {value: 'photo', label: 'Upload Photos Only'},
];
export const rememberPayment = [
  {value: 'true', label: 'Remember payment method for future use'},
];

export const creditCardOptions = [
  {value: false, label: ' Existing Credit Card'},
  {value: true, label: 'New Credit Card'},
];
export const creditCardOptionsModal = [{value: false, label: ''}];

export const serviceChargeTypesOptions = [
  {value: 'sqftRange', label: 'Sq Ft Range'},
  {value: 'flatRate', label: 'Flat Rate'},
  {value: 'perPhoto', label: 'Per Photo'},
];
export const onBehalfTypesOptions = [
  {value: 'brokerage', label: 'Brokerage'},
  {value: 'agent', label: 'Agent'},
  {value: 'title-company', label: 'Title Company'},
];
export const onBehalfTypesOptionsWithoutTC = [
  {value: 'brokerage', label: 'Brokerage'},
  {value: 'agent', label: 'Agent'},
];
export const onBehalfTypesOptionsDistanceCharge = [
  {value: 'brokerage', label: 'Brokerage'},
  {value: 'agent', label: 'Agent'},
];

export const refByOptions = [
  {value: 'agent', label: 'Another Agent'},
  {value: 'broker', label: 'Broker'},
  {value: 'empireWestTitleAgency', label: 'Empire West Title Agency'},
  {value: 'facebook', label: 'Facebook'},
  {value: 'instagram', label: 'Instagram'},
  {value: 'officePresentation', label: 'Office Presentation'},
  {value: 'otherTitleCompany', label: 'Other Title Company'},
  {value: 'magnusTitleCompany', label: 'Magnus Title Company'},
  {value: 'securityTitleCompany', label: 'Security Title Company'},
  {value: 'chicagoTitleOfColorado', label: 'Chicago Title of Colorado'},
  {value: 'other', label: 'Other'},
];

export const serviceTypeOptions = [
  {value: 1, label: 'Photography'},
  {value: 2, label: 'Videography'},
  {value: 3, label: 'Luxury'},
  {value: 4, label: 'Other'},
  {value: 5, label: 'Drone'},
];

export const intentTypeOptions = [
  {value: 'billing', label: 'Billing'},
  {value: 'service_completion', label: 'Service Completion'},
  {value: 'order_status', label: 'Order Status'},
  {value: 'web_leads', label: 'Web Leads'},
  {value: 'announcements', label: 'Announcements'},
];

export const notificationTypeOptions = [
  {value: 'primary', label: 'Primary'},
  {value: 'alternate', label: 'Alternate'},
  {value: 'home', label: 'Home'},
  {value: 'other', label: 'Other'},
];

export const postSignLockBoxDateOptions = [
  {value: 'postSign', label: 'Install Post/Sign on Different Date'},
  {
    value: 'postSignAndLockbox',
    label: 'Install Post/Sign and Lockbox on Different Date',
  },
  {value: 'lockBox', label: 'Install LockBox on Different Date'},
];

export const productViewType: SelectOption[] = [
  {value: 'image', label: 'Gallery'},
  {value: 'count', label: 'Incremental'},
  {value: '3d-matterport', label: '3-D Matterport'},
  {value: 'community_form', label: 'Community Form'},
  {value: 'virtual_twilight', label: 'Virtual Twilight'},
];
