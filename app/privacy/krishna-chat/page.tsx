import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy for Krishna Chat",
  description:
    "Privacy Policy for Krishna Chat, a mobile app that provides AI-powered spiritual guidance inspired by Hindu texts.",
  robots: {
    index: true,
    follow: true,
  },
};

const effectiveDate = "May 25, 2026";
const developerName = "Tresis Labs";
const contactEmail = "shashwatbansaldev@gmail.com";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "If you create an account for Krishna Chat, we may collect account information such as your email address, login identifiers, and related authentication details.",
      "We collect chat messages, prompts, responses, and conversation history that you submit in the app so Krishna Chat can provide and, where supported, save the guidance experience.",
      "We may collect limited technical information, such as device type, app version, usage data, crash logs, diagnostics, or analytics, to operate, secure, troubleshoot, and improve the app.",
      "If Krishna Chat offers paid subscriptions or in-app purchases through Google Play or another payment provider in the future, we may receive limited purchase or subscription status information needed to manage access. Payment details are handled by the payment provider.",
    ],
  },
  {
    title: "How We Use Information",
    content: [
      "We use information to provide, maintain, personalize, and improve Krishna Chat.",
      "We use messages and conversation context to generate AI responses and provide AI-powered spiritual guidance inspired by Hindu texts such as the Bhagavad Gita.",
      "If conversation saving is available, we use your information to save and restore your conversations across sessions.",
      "We also use information to manage accounts, subscriptions, customer support, safety, abuse prevention, debugging, analytics, and troubleshooting.",
    ],
  },
  {
    title: "AI Processing",
    content: [
      "User messages may be processed by third-party AI model providers or backend services that help Krishna Chat generate responses.",
      "AI-generated responses are for spiritual reflection and informational purposes. Please avoid submitting highly sensitive personal information, private financial details, medical information, or other information you would not want processed by service providers.",
    ],
  },
  {
    title: "Data Sharing",
    content: [
      "We may share information with service providers needed to operate Krishna Chat, including hosting, authentication, database, analytics, payment, customer support, security, and AI infrastructure providers.",
      "These providers are expected to use information only as needed to provide services to Krishna Chat or comply with applicable law.",
      "We do not sell personal information.",
    ],
  },
  {
    title: "Data Retention and Deletion",
    content: [
      "We may retain account information, conversation history, support records, technical logs, and related service data while your account is active or as needed to operate, secure, and improve Krishna Chat.",
      `You can request deletion of your account or conversation data by contacting ${contactEmail}. We may retain certain information where required by law, for security, dispute resolution, or legitimate business purposes.`,
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Krishna Chat is not intended for children under 13. We do not knowingly collect personal information from children under 13.",
      `If you believe a child under 13 has provided personal information through Krishna Chat, please contact us at ${contactEmail} so we can review and take appropriate action.`,
    ],
  },
  {
    title: "Security",
    content: [
      "We use reasonable administrative, technical, and organizational safeguards designed to protect information. However, no app, website, network, or storage system is perfectly secure.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. When we make material changes, we will update the effective date and post the revised policy on this page.",
    ],
  },
  {
    title: "Contact",
    content: [
      `If you have questions, requests, or concerns about this Privacy Policy or Krishna Chat's privacy practices, contact ${developerName} at ${contactEmail}.`,
    ],
  },
];

export default function KrishnaChatPrivacyPage() {
  return (
    <article className="max-w-3xl space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-medium">
          Krishna Chat
        </p>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Privacy Policy for Krishna Chat
          </h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Effective date: <span className="tabular-nums">{effectiveDate}</span>
          </p>
        </div>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
          Krishna Chat is a mobile app provided by {developerName} that offers AI-powered
          spiritual guidance inspired by Hindu texts such as the Bhagavad Gita. This Privacy
          Policy explains what information Krishna Chat may collect, how it is used, and the
          choices available to users.
        </p>
      </header>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section
            key={section.title}
            className="space-y-4 pt-8 border-t border-stone-200 dark:border-stone-800"
          >
            <h2 className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
              {index + 1}. {section.title}
            </h2>
            <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed">
              {section.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
