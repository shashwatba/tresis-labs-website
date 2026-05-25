import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Krishna Chat Account",
  description:
    "Instructions for requesting deletion of your Krishna Chat account and associated data from Tresis Labs.",
  robots: {
    index: true,
    follow: true,
  },
};

const appName = "Krishna Chat";
const developerName = "Tresis Labs";
const contactEmail = "shashwatbansaldev@gmail.com";

export default function KrishnaChatDeleteAccountPage() {
  return (
    <article className="max-w-3xl space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-medium">
          {appName}
        </p>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Delete Your Krishna Chat Account
          </h1>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
            This page explains how users of {appName}, provided by {developerName}, can request
            deletion of their account and associated data.
          </p>
        </div>
      </header>

      <section className="space-y-4 pt-8 border-t border-stone-200 dark:border-stone-800">
        <h2 className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          Steps to Request Account Deletion
        </h2>
        <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed">
          <p>
            To request deletion of your {appName} account, email {contactEmail} from the email
            address associated with your account, or include enough information for us to identify
            the account.
          </p>
          <p>
            Use the subject line &quot;Delete Krishna Chat Account&quot; and include a brief statement
            that you want your {appName} account and associated data deleted.
          </p>
          <p>
            We may ask you to verify ownership of the account before completing the deletion
            request.
          </p>
        </div>
      </section>

      <section className="space-y-4 pt-8 border-t border-stone-200 dark:border-stone-800">
        <h2 className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          What We Delete
        </h2>
        <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed">
          <p>
            After verifying your request, we will delete or de-identify account information tied to
            your {appName} account, such as your email address or login identifiers.
          </p>
          <p>
            We will also delete or de-identify associated conversation history, chat messages, and
            app data that are linked to your account where deletion is technically available.
          </p>
        </div>
      </section>

      <section className="space-y-4 pt-8 border-t border-stone-200 dark:border-stone-800">
        <h2 className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          What We May Keep
        </h2>
        <div className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed">
          <p>
            We may keep limited records where needed for legal, security, fraud prevention, dispute
            resolution, or tax purposes.
          </p>
          <p>
            We may also retain backup copies, server logs, or de-identified technical data for a
            limited period before they are deleted through normal retention cycles.
          </p>
        </div>
      </section>

      <section className="space-y-4 pt-8 border-t border-stone-200 dark:border-stone-800">
        <h2 className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          Contact
        </h2>
        <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
          For account deletion requests or questions about {appName} data deletion, contact{" "}
          {developerName} at {contactEmail}.
        </p>
      </section>
    </article>
  );
}
