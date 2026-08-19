import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Gate-G",
  description:
    "Learn how Gate-G collects, uses, stores, and protects information when you use the Apartment & Society Management System.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <article className="
          *:mb-5
          
          [&_h1]:text-3xl
          [&_h1]:font-bold
          [&_h1]:tracking-tight

          [&_h2]:text-xl
          [&_h2]:font-semibold
          [&_h2]:tracking-tight
          [&_h2]:text-brand-600

          [&_p]:text-base
          [&_p]:leading-7
          [&_p]:text-foreground/90

          [&_ul]:list-disc
          [&_ul]:pl-6

          [&_li]:leading-7
        ">
          <header className="">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Privacy Policy</h1>

            <p className="text-sm text-muted-foreground">
              Last updated: August 15, 2026
            </p>
          </header>

          <p>
            Gate-G (Apartment &amp; Society Management System) is a platform
            designed to help residential societies manage residents,
            apartments, visitors, complaints, notices, and other day-to-day
            society operations.
          </p>

          <p>
            This Privacy Policy explains what information Gate-G collects, why
            we use it, and how that information is handled when you use the
            Gate-G platform.
          </p>

          <h2>1. Information We Collect</h2>

          <p>
            Depending on how you use Gate-G, we may collect information such as:
          </p>

          <ul>
            <li>Your name and email address.</li>
            <li>Your Gate-G account and authentication information.</li>
            <li>
              Your role within a society, such as resident, admin, or guard.
            </li>
            <li>Your society and apartment association.</li>
            <li>Apartment information required to operate the society.</li>
            <li>
              Visitor information entered through the visitor management
              system.
            </li>
            <li>Complaint information submitted through the platform.</li>
            <li>
              Notices and other information created or managed within the
              platform.
            </li>
            <li>Invitation and account-related information.</li>
            <li>
              Information required to maintain the security and proper
              operation of the service.
            </li>
          </ul>

          <p>
            Authentication is handled through our authentication provider,
            while Gate-G maintains the application-level user and society
            information required to operate the platform.
          </p>

          <h2>2. How We Use Your Information</h2>

          <p>We use collected information to operate and improve Gate-G.</p>

          <p>This includes:</p>

          <ul>
            <li>Creating and managing user accounts.</li>
            <li>
              Connecting users with the correct society and apartment.
            </li>
            <li>Enforcing roles and permissions.</li>
            <li>Managing visitors and visitor approvals.</li>
            <li>Managing complaints and their status.</li>
            <li>Publishing and displaying society notices.</li>
            <li>
              Sending account, operational, and relevant service notifications.
            </li>
            <li>Processing invitations to join a society.</li>
            <li>Maintaining the security and reliability of the platform.</li>
            <li>Troubleshooting and improving the service.</li>
          </ul>

          <p>
            Gate-G uses information primarily to provide the functionality
            requested by the society and its users.
          </p>

          <h2>3. Society-Scoped Information</h2>

          <p>
            Gate-G is designed around a society-based data boundary.
          </p>

          <p>
            Information belonging to one society is associated with that
            society and is not intended to be available to users of another
            society.
          </p>

          <p>
            Access to information is determined by the user's authenticated
            account and application permissions. The backend is responsible
            for enforcing these authorization rules.
          </p>

          <p>
            For example, a resident should only be able to access information
            that their role and society membership permit, while society
            administrators may have broader management access.
          </p>

          <h2>4. User-Provided Information</h2>

          <p>
            Some information displayed in Gate-G is entered directly by users or
            society administrators.
          </p>

          <p>
            For example, a society administrator may create or invite a
            resident account, a guard may enter visitor information, or a
            resident may submit a complaint.
          </p>

          <p>
            When you provide this information, you are responsible for
            ensuring that the information you submit is appropriate and
            accurate and that you have the necessary authority to provide
            information about other individuals.
          </p>

          <h2>5. Authentication and Account Security</h2>

          <p>
            Gate-G uses Clerk for user authentication and account management.
          </p>

          <p>
            Gate-G does not use the authentication system as a replacement for
            its own application authorization. After authentication, the Gate-G
            backend determines the user's application identity, society
            association, role, and permitted actions.
          </p>

          <p>
            We use reasonable technical measures to protect accounts and
            application data. However, no internet-based system can guarantee
            absolute security.
          </p>

          <h2>6. Data Storage</h2>

          <p>
            Application data is stored and processed using infrastructure used
            by Gate-G, including MongoDB for application data.
          </p>

          <p>
            The information stored may include user, society, apartment,
            visitor, complaint, notice, and invitation-related records
            necessary for operating the platform.
          </p>

          <p>
            We retain information only for as long as it is reasonably
            necessary for operating the service, maintaining records,
            fulfilling legitimate operational requirements, or meeting
            applicable legal obligations.
          </p>

          <p>
            Specific retention periods may vary depending on the type of
            information and how Gate-G is being used.
          </p>

          <h2>7. Service Providers</h2>

          <p>
            Gate-G may use third-party service providers to provide
            infrastructure and functionality required to operate the
            platform.
          </p>

          <p>
            These providers may process limited information on behalf of Gate-G,
            depending on the service being provided.
          </p>

          <p>
            For example, authentication services may process account-related
            information, while infrastructure and database providers may
            process application data required to operate Gate-G.
          </p>

          <p>
            We do not give third parties unrestricted access to Gate-G data
            simply because they provide infrastructure or services.
          </p>

          <h2>8. Sharing of Information</h2>

          <p>
            Gate-G may make information available to authorized users within the
            relevant society when that information is necessary for the
            operation of society features.
          </p>

          <p>
            For example, a society administrator may need access to resident
            or apartment information, while a guard may need access to visitor
            information required for visitor management.
          </p>

          <p>We may also disclose information when necessary to:</p>

          <ul>
            <li>Provide and maintain the Gate-G service.</li>
            <li>Protect the security and integrity of the platform.</li>
            <li>Comply with applicable law or a valid legal request.</li>
            <li>Investigate misuse, fraud, or security incidents.</li>
            <li>
              Protect the rights, safety, and property of Gate-G, its users, or
              others.
            </li>
          </ul>

          <p>
            Gate-G does not use personal information for purposes unrelated to
            providing and operating the platform unless permitted by
            applicable law or otherwise disclosed to you.
          </p>

          <h2>9. Notifications</h2>

          <p>
            Gate-G may send notifications required for application
            functionality.
          </p>

          <p>
            For example, visitor management may require notifying a resident
            when a visitor is waiting for approval.
          </p>

          <p>
            Notifications are used to provide the relevant Gate-G functionality
            and may contain limited information necessary for the notification
            to be useful.
          </p>

          <h2>10. Data Security</h2>

          <p>
            We take reasonable measures to protect information against
            unauthorized access, modification, disclosure, or destruction.
          </p>

          <p>
            Security measures may include authenticated access, backend
            authorization, controlled database access, secure communication,
            and application-level permission checks.
          </p>

          <p>
            However, no software, database, or internet transmission is
            completely secure. Users should also take reasonable steps to
            protect their own accounts and authentication credentials.
          </p>

          <h2>11. Children's Privacy</h2>

          <p>
            Gate-G is designed for residential society management and is not
            specifically directed toward children.
          </p>

          <p>
            Users should not provide information belonging to children unless
            they have the appropriate authority to do so and the information
            is necessary for the intended use of the platform.
          </p>

          <h2>12. Your Data and Account</h2>

          <p>
            Depending on your role and the way Gate-G is provided to your
            society, you may be able to request access to, correction of, or
            deletion of information associated with your account.
          </p>

          <p>
            Some information may be controlled or maintained by the society
            because the society is responsible for managing its residents and
            operational records.
          </p>

          <p>
            Requests relating to society-managed information may therefore
            need to be handled by the relevant society administrator.
          </p>

          <h2>13. Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy when Gate-G changes its
            functionality, data practices, or legal requirements.
          </p>

          <p>
            When changes are made, the updated version will be published on
            this page with a revised "Last updated" date.
          </p>

          <p>
            Your continued use of Gate-G after an updated policy becomes
            effective means that you acknowledge the updated policy.
          </p>

          <h2>14. Contact</h2>

          <p>
            If you have questions about this Privacy Policy, your personal
            information, or how Gate-G handles data, please contact the Gate-G
            team through the support or contact channel provided by the
            platform.
          </p>

          <hr />

          <p>
            <strong>Gate-G — Apartment &amp; Society Management System</strong>
          </p>

          <p className="text-sm text-muted-foreground">
            This Privacy Policy is intended to describe the current data
            practices of the Gate-G MVP. It should be reviewed and updated as
            the product, infrastructure, payment system, analytics,
            notifications, and applicable legal requirements evolve.
          </p>
        </article>
      </div>
    </main>
  );
}
