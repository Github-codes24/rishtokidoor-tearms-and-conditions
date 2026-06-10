import {
  AlertTriangle,
  Ban,
  Eye,
  FileText,
  Lock,
  MessageCircle,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export const introText =
  "Risto Ki Door is a matrimonial platform intended only for adults who are 18 years or older. We are committed to child safety, human safety, and preventing misuse of our platform.";

export const sections = [
  {
    number: "1",
    icon: UserCheck,
    title: "Age Restriction",
    points: [
      "The Platform is only for users who are 18 years or older.",
      "Children and minors are not allowed to create accounts or use matchmaking features.",
      "Accounts found to belong to minors may be removed immediately.",
    ],
  },
  {
    number: "2",
    icon: Ban,
    title: "Zero Tolerance for Child Exploitation",
    points: [
      "We strictly prohibit child sexual abuse material, child exploitation, grooming, trafficking, or any content that endangers children.",
      "Users must not upload, request, share, or promote any content involving minors in a sexual, abusive, unsafe, or exploitative manner.",
      "Any such activity may lead to account termination and reporting to the appropriate authorities where required by law.",
    ],
  },
  {
    number: "3",
    icon: ShieldCheck,
    title: "Profile Review and Safety Action",
    points: [
      "We may review profiles, photos, messages, reports, and account activity to detect unsafe or suspicious behavior.",
      "Profiles with false age details, suspicious identity claims, or child safety concerns may be restricted, suspended, or removed.",
      "We may ask for verification when needed to protect users and maintain platform safety.",
    ],
  },
  {
    number: "4",
    icon: MessageCircle,
    title: "Reporting Unsafe Behavior",
    points: [
      "Users should report any profile, message, image, or behavior that appears to involve a minor or child safety risk.",
      "Reports related to child safety are treated as high priority.",
      "Users can contact us directly using the email or phone number listed below.",
    ],
  },
  {
    number: "5",
    icon: Lock,
    title: "Privacy and Data Protection",
    points: [
      "We do not knowingly collect personal information from children.",
      "If we discover that a minor has submitted personal information, we may delete the account and related data, subject to legal and safety requirements.",
      "User information is handled according to our Privacy Policy and applicable laws.",
    ],
  },
  {
    number: "6",
    icon: Eye,
    title: "Human Safety Guidance",
    points: [
      "Users should be careful when sharing personal details, financial information, or location information with other users.",
      "Users should avoid sending money or gifts to people they have only met online.",
      "For in-person meetings, users should choose a public place, inform a trusted person, and use their own judgment.",
    ],
  },
  {
    number: "7",
    icon: FileText,
    title: "Legal Cooperation",
    points: [
      "We may preserve and share relevant information with law enforcement, regulators, or legal authorities when required by law.",
      "We cooperate with valid legal requests related to child safety, fraud prevention, abuse prevention, and user protection.",
    ],
  },
  {
    number: "8",
    icon: AlertTriangle,
    title: "Emergency Notice",
    points: [
      "If any person is in immediate danger, contact local emergency services first.",
      "Platform reports are not a replacement for emergency help or law enforcement support.",
    ],
  },
];

export const contactDetails = {
  email: "rishtonkidor18@gmail.com",
  phone: "9356352581",
};
