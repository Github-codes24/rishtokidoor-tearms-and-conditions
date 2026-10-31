import {
  User,
  ShieldCheck,
  CreditCard,
  Database,
  Camera,
  Mic,
  Contact,
  Image,
  Bell,
  Trash2,
  ExternalLink,
  PhoneCall,
  Server,
  HeartHandshake,
} from "lucide-react";

export const companyInfo = {
  appName: "Rishton Ki Dor",
  legalEntity: "Rishton Ki Dor Matrimony",
  email: "rishtonkidor18@gmail.com",
  phone: "+91 9356352581",
  address: "Nagpur, Maharashtra, India",
  deletionUrl: "https://rishtokidoor-deletion-page.netlify.app/",
};

export const introText =
  "Welcome to Rishton Ki Dor (“Platform,” “we,” “our,” or “us”), operated by Rishton Ki Dor Matrimony (“Company”). We deeply respect your privacy and are committed to protecting your personal data with utmost transparency and security. This Privacy Policy details how we collect, use, store, process, and protect your information when you access or use the Rishton Ki Dor mobile application and related services, designed in strict adherence to Google Play Developer Policies, the Information Technology Act 2000, the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021, and the Digital Personal Data Protection Act (DPDP Act) 2023.";

export const informationWeCollect = [
  {
    icon: User,
    title: "Personal Information",
    items: [
      "Full name, age, and date of birth",
      "Gender and marital status (Never Married, Divorced, Widowed, Awaiting Divorce)",
      "Contact details (verified mobile number and email address)",
      "Residential location, city, state, and address",
      "Educational qualifications, occupation, and employment details",
      "Profile photographs and self-authored bio",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Sensitive Matrimonial Data (Voluntary - DPDP Act 2023)",
    items: [
      "Religion, community, caste, sub-caste, and gotra",
      "Mother tongue and cultural background",
      "Horoscope / Kundali details (optional)",
      "Partner preferences regarding caste, religion, and lifestyle",
    ],
    note: "Notice under Indian IT Rules & DPDP Act 2023: Caste, gotra, community, and religious information is classified as Sensitive Personal Data. You provide this information strictly on a voluntary basis solely for the purpose of matrimonial matchmaking. You may update, modify, or delete this information at any time from your profile settings.",
  },
  {
    icon: ShieldCheck,
    title: "Identity Verification Information",
    items: [
      "Government-issued ID documents (if profile verification badge is requested)",
      "Real-time selfie/photo verification to prevent impersonation",
      "Documents submitted voluntarily to confirm authenticity and credibility",
    ],
    note: "Verification documents are used solely to validate profile identity and protect users from fraudulent actors.",
  },
  {
    icon: Database,
    title: "Usage & Device Diagnostics Information",
    items: [
      "IP address, device model, manufacturer, and operating system version",
      "Firebase installation identifiers and unique device tokens",
      "App launch history, page visits, search filters, and interaction logs",
      "Error logs and performance metrics for app stability",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Information",
    items: [
      "Subscription plan details, purchase date, and transaction IDs",
      "Payment receipt and billing status",
    ],
    note: "Payment Security: All payments are processed through Razorpay, a PCI-DSS certified payment gateway. Rishton Ki Dor does NOT store credit/debit card numbers, CVVs, net-banking credentials, or UPI PINs on its servers.",
  },
];

export const devicePermissions = [
  {
    icon: Camera,
    permission: "CAMERA (android.permission.CAMERA)",
    purpose:
      "Used solely to capture live profile photographs and facilitate real-time video calling with prospective matrimonial matches. Video streams during calls are peer-to-peer and are never recorded, tapped, or stored on our servers.",
  },
  {
    icon: Mic,
    permission: "MICROPHONE (android.permission.RECORD_AUDIO)",
    purpose:
      "Used exclusively for live voice and video calling between matched users. Rishton Ki Dor does not record, tap, intercept, or archive any audio conversations.",
  },
  {
    icon: Contact,
    permission: "CONTACTS (android.permission.READ_CONTACTS)",
    purpose:
      "Used exclusively when you explicitly choose to share an individual contact with another user within the in-app chat. We do NOT sync, upload, harvest, or store your entire phone contact list or address book on our servers.",
  },
  {
    icon: Image,
    permission: "PHOTOS & MEDIA (android.permission.READ_MEDIA_IMAGES)",
    purpose:
      "Used to allow you to select and upload profile pictures from your photo gallery and send picture attachments to matched users within chat conversations.",
  },
  {
    icon: Bell,
    permission: "PUSH NOTIFICATIONS (android.permission.POST_NOTIFICATIONS)",
    purpose:
      "Used via Google Firebase Cloud Messaging (FCM) to deliver instant real-time alerts for incoming voice/video calls, connection requests, and in-app chat messages.",
  },
];

export const callingDisclosure = {
  icon: PhoneCall,
  title: "Real-Time Audio and Video Calling (Agora.io RTC)",
  description:
    "Voice and video calls in Rishton Ki Dor are powered by the industry-standard Agora Real-Time Engagement (RTC) Engine. All calling sessions are transmitted in real time directly between peers. Rishton Ki Dor does not record, wiretap, intercept, or retain audio or video call streams or conversation content on our servers. All call signaling and media packets are encrypted during transmission.",
};

export const thirdPartyProviders = [
  {
    name: "Agora.io",
    category: "Real-Time Audio & Video Calling",
    purpose:
      "Powers peer-to-peer live voice and video communications between matched matrimonial users without recording streams.",
    privacyUrl: "https://www.agora.io/en/privacy-policy/",
  },
  {
    name: "Google Firebase Cloud Messaging (FCM)",
    category: "Push Notifications & Infrastructure",
    purpose:
      "Delivers instant push notifications for incoming calls, match requests, and chat alerts using device tokens.",
    privacyUrl: "https://policies.google.com/privacy",
  },
  {
    name: "Razorpay",
    category: "Payment Gateway",
    purpose:
      "Provides secure, PCI-DSS compliant processing of subscription payments without storing sensitive banking or card credentials on our servers.",
    privacyUrl: "https://razorpay.com/privacy/",
  },
  {
    name: "Cloudinary",
    category: "Media Storage & CDN",
    purpose:
      "Provides high-security cloud media storage, image optimization, and CDN delivery for user profile photographs.",
    privacyUrl: "https://cloudinary.com/privacy",
  },
];

export const accountDeletionPolicy = {
  title: "Account & Data Deletion Policy",
  description:
    "In compliance with Google Play Developer Data Safety requirements and Indian data protection laws, every user of Rishton Ki Dor has the absolute right to request deletion of their account and all associated personal data at any time.",
  channels: [
    {
      title: "1. In-App Deletion",
      description:
        "You can request account deletion directly from the mobile app by navigating to Settings / Help & Support or Privacy Settings > Delete Account.",
    },
    {
      title: "2. Public Web Deletion Portal (No Reinstall Required)",
      description:
        "You can submit an account deletion request directly through our official web portal without needing to reinstall the app:",
      linkText: "Rishton Ki Dor Account Deletion Page",
      url: "https://rishtokidoor-deletion-page.netlify.app/",
    },
    {
      title: "3. Direct Email Request",
      description:
        "You can email our compliance team directly at rishtonkidor18@gmail.com with the subject line 'Account Deletion Request' including your registered mobile number and profile ID.",
    },
  ],
  whatHappens: [
    "Immediate Delisting: Your profile, photographs, bio, and contact cards will be immediately removed from public view and search results within 1 hour.",
    "Permanent Database Wipe: All personal biodata, uploaded media, chat history, and match preferences are permanently purged from our active databases within 30 days.",
    "Statutory Exception: Financial transaction records (for subscription purchases) may be retained for longer only as strictly mandated by statutory accounting and tax regulations under Indian law.",
    "Routine Backups: Any residual backup archives are systematically overwritten and cleared during standard rotation cycles.",
  ],
};

export const howWeUseInfo = [
  "To create, authenticate, and administer your matrimonial account",
  "To deliver intelligent matchmaking recommendations based on your preferences",
  "To display your profile to relevant prospective matches on the platform",
  "To verify profile authenticity and curb duplicate or fraudulent accounts",
  "To facilitate encrypted peer-to-peer audio and video calls via Agora.io",
  "To process premium subscription purchases securely through Razorpay",
  "To deliver real-time notifications for calls, matches, and messages via Firebase",
  "To investigate safety complaints, harassment, or violations of platform guidelines",
  "To comply with legal obligations, court orders, and applicable Indian regulations",
];

export const profileVisibility = [
  "Certain profile details (such as your photos, bio, education, community, and general location) are visible to registered users seeking matrimonial alliances.",
  "You maintain granular privacy settings to manage who can view your contact information or connect with you.",
  "Sensitive verification identity documents are strictly confidential and are NEVER displayed publicly to other users.",
  "Users should exercise prudence and avoid sharing personal financial credentials or sensitive private information with other users.",
];

export const sharingOfInformation = [
  "With trusted third-party service providers (Agora for calling, Firebase for push notifications, Razorpay for payments, Cloudinary for photo CDN) bound by strict confidentiality and data protection obligations.",
  "With law enforcement authorities or government agencies when strictly required by a valid legal process, court order, or statutory summons under Indian law.",
  "To investigate fraud, severe abuse, harassment, or imminent security threats endangering any individual.",
  "In the event of a merger, acquisition, or restructuring, where personal data transfers will remain protected under this policy.",
];

export const userCommunication = [
  "Ensuring user safety, fraud detection, and anti-scam surveillance",
  "Investigating harassment, impersonation, or offensive conduct complaints",
  "Enforcing platform terms of service and child safety policies",
];

export const dataSecurity = [
  "All data transmission between the app and our servers is secured using SSL/TLS encryption (HTTPS / WSS).",
  "Live audio and video communications are handled directly in real-time between peers without server recording.",
  "Industry-standard access controls, database firewalls, and token-based authentication protect user databases.",
  "Users are strongly urged to keep their login credentials and OTPs strictly confidential.",
];

export const dataRetention = [
  "Your personal data is retained for as long as your account remains active and in good standing.",
  "Upon account deletion, all personal profile data, media, and chat interactions are permanently purged from active systems within 30 days.",
  "Statutory financial transaction records may be retained longer solely to satisfy taxation, audit, and legal mandates.",
];

export const yourRights = [
  "Access and review your stored personal information",
  "Correct, update, or rectify any inaccurate or incomplete details",
  "Request permanent deletion of your account and associated personal data",
  "Withdraw consent for processing optional sensitive community/gotra data",
  "Download a copy of your personal matrimonial biodata",
  "Lodge a grievance with our designated Grievance Officer",
];

export const cookiesTracking = [
  "Manage secure user authentication sessions",
  "Enhance application performance and cache key assets",
  "Analyze anonymous usage patterns to optimize matchmaking algorithms",
  "Remember user language and search preference settings",
];

export const grievanceOfficer = {
  name: "Grievance Officer / Support Team",
  designation: "Grievance & Compliance Officer",
  company: "Rishton Ki Dor Matrimony",
  email: "rishtonkidor18@gmail.com",
  phone: "+91 9356352581",
  address: "Nagpur, Maharashtra, India",
  responseWindow: "Acknowledgment within 24 hours; resolution within 15 business days",
};

export const contactDetails = {
  email: "rishtonkidor18@gmail.com",
  phone: "+91 9356352581",
  company: "Rishton Ki Dor Matrimony",
  address: "Nagpur, Maharashtra, India",
};
