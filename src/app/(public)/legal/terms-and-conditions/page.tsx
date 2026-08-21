import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | ASMS",
  description:
    "Read the Terms and Conditions governing the use of the Apartment & Society Management System.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <article className="
          *:mb-5

          [&_h1]:text-3xl
          [&_h1]:font-bold
          [&_h1]:tracking-tight
          [&_h1]:text-brand-700

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
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Terms and Conditions</h1>

            <p className="text-sm text-muted-foreground">
              Last updated: August 15, 2026
            </p>
          </header>

          <p>
            These Terms and Conditions govern your use of ASMS (Apartment &
            Society Management System), a platform designed to help
            residential societies manage residents, apartments, visitors,
            complaints, notices, and other society operations.
          </p>

          <p>
            By accessing or using ASMS, you agree to these Terms and
            Conditions. If you do not agree with these terms, you should not
            use the platform.
          </p>

          <h2 className="text-lg text-brand-600">1. About ASMS</h2>

          <p>
            ASMS provides software tools for residential societies and their
            authorized users.
          </p>

          <p>The platform may provide features including:</p>

          <ul>
            <li>Resident account management.</li>
            <li>Apartment and society management.</li>
            <li>Visitor management.</li>
            <li>Visitor approval workflows.</li>
            <li>Complaint management.</li>
            <li>Society notices.</li>
            <li>User invitations.</li>
            <li>
              Administrative tools for authorized society administrators.
            </li>
          </ul>

          <p>
            Features may change, be added, or be removed as the platform
            develops.
          </p>

          <h2 className="text-lg text-brand-600">2. User Accounts</h2>

          <p>
            You must provide accurate information when creating or using an
            ASMS account.
          </p>

          <p>
            Accounts are intended for the individual to whom they are
            assigned. You should not:
          </p>

          <ul>
            <li>Share your account credentials with another person.</li>
            <li>Create an account using another person's identity.</li>
            <li>Attempt to access another user's account.</li>
            <li>Use the platform to impersonate another person.</li>
          </ul>

          <p>
            You are responsible for activity performed through your account
            and for maintaining the security of your authentication
            credentials.
          </p>

          <h2 className="text-lg text-brand-600">3. Society and User Roles</h2>

          <p>
            ASMS supports different roles within a society, including
            administrators, residents, and guards.
          </p>

          <p>
            Permissions are determined by the ASMS backend based on the
            user's account, role, and society association.
          </p>

          <p>
            Users must only perform actions that they are authorized to
            perform.
          </p>

          <p>
            Society administrators are responsible for managing their
            society's users and ensuring that people are assigned appropriate
            roles and access.
          </p>

          <h2 className="text-lg text-brand-600">4. Society-Managed Information</h2>

          <p>
            Society administrators and authorized users may enter and manage
            information relating to residents, apartments, visitors,
            complaints, notices, and other society operations.
          </p>

          <p>
            If you provide information about another person, you should have
            the appropriate authority to provide that information.
          </p>

          <p>
            Society administrators are responsible for using ASMS
            appropriately when managing information belonging to their
            residents, guards, visitors, or other individuals.
          </p>

          <h2 className="text-lg text-brand-600">5. Visitor Management</h2>

          <p>
            ASMS may allow guards to create visitor records and request
            approval from residents.
          </p>

          <p>
            Residents may approve or reject visitor requests through the
            functionality provided by ASMS.
          </p>

          <p>
            ASMS provides the software workflow for visitor management but
            does not independently verify the identity, intentions, or
            actions of visitors.
          </p>

          <p>
            The society and its authorized users remain responsible for their
            own visitor-management decisions and physical security
            procedures.
          </p>

          <h2 className="text-lg text-brand-600">6. Complaints and Notices</h2>

          <p>
            ASMS may provide tools for submitting, managing, and displaying
            complaints and society notices.
          </p>

          <p>Users are responsible for the information they submit.</p>

          <p>
            You must not use these features to submit content that is:
          </p>

          <ul>
            <li>False or intentionally misleading.</li>
            <li>Abusive, threatening, or harassing.</li>
            <li>Illegal.</li>
            <li>Intended to damage another person's reputation.</li>
            <li>Unrelated to legitimate society operations.</li>
            <li>Designed to disrupt or misuse the platform.</li>
          </ul>

          <p>
            Society administrators may manage complaints and notices
            according to their society's operational requirements.
          </p>

          <h2 className="text-lg text-brand-600">7. Acceptable Use</h2>

          <p>
            You agree to use ASMS only for legitimate society-management
            purposes.
          </p>

          <p>You must not:</p>

          <ul>
            <li>Attempt to bypass authentication or authorization.</li>
            <li>
              Access data belonging to another society or unauthorized user.
            </li>
            <li>
              Reverse engineer or attempt to compromise the platform.
            </li>
            <li>Introduce malicious software or harmful code.</li>
            <li>Abuse APIs or intentionally overload the service.</li>
            <li>
              Attempt to obtain unauthorized access to databases or
              infrastructure.
            </li>
            <li>Use ASMS to conduct fraudulent or illegal activities.</li>
            <li>Interfere with the normal operation of the platform.</li>
            <li>
              Use information obtained through ASMS for unauthorized
              purposes.
            </li>
          </ul>

          <p>
            We may restrict or suspend access when reasonably necessary to
            protect the platform, its users, or society data.
          </p>

          <h2 className="text-lg text-brand-600">8. User Content</h2>

          <p>
            Users may submit information such as complaints, notices, visitor
            details, and other operational information.
          </p>

          <p>
            You remain responsible for the content and information you submit
            through ASMS.
          </p>

          <p>
            By submitting information to ASMS, you grant ASMS the limited
            permission necessary to store, process, display, and transmit
            that information as required to provide the relevant platform
            functionality.
          </p>

          <p>
            ASMS does not claim ownership of user-provided content merely
            because it is submitted through the platform.
          </p>

          <h2 className="text-lg text-brand-600">9. Platform Availability</h2>

          <p>
            We aim to keep ASMS reliable and available, but we do not
            guarantee that the service will always be available without
            interruption.
          </p>

          <p>
            The platform may occasionally be unavailable because of:
          </p>

          <ul>
            <li>Maintenance.</li>
            <li>Software updates.</li>
            <li>Infrastructure problems.</li>
            <li>Network failures.</li>
            <li>Security incidents.</li>
            <li>Third-party service failures.</li>
            <li>
              Circumstances outside our reasonable control.
            </li>
          </ul>

          <p>
            We may modify or discontinue specific features as the product
            evolves.
          </p>

          <h2 className="text-lg text-brand-600">10. Third-Party Services</h2>

          <p>
            ASMS may depend on third-party services for certain functionality,
            including authentication, infrastructure, database hosting,
            notifications, or other technical services.
          </p>

          <p>
            The availability and operation of those services may affect ASMS.
          </p>

          <p>
            Your use of third-party services may also be subject to their own
            terms and policies.
          </p>

          <h2 className="text-lg text-brand-600">11. Security</h2>

          <p>
            We take reasonable measures to protect ASMS and the information
            processed through it.
          </p>

          <p>
            However, no online service can guarantee complete security.
          </p>

          <p>
            You must not attempt to exploit security vulnerabilities or gain
            unauthorized access to ASMS or its underlying infrastructure.
          </p>

          <p>
            If you discover a security issue, you should report it through
            the appropriate ASMS contact channel rather than exploiting or
            publicly distributing the vulnerability.
          </p>

          <h2 className="text-lg text-brand-600">12. Suspension and Termination</h2>

          <p>
            We may suspend or terminate access to ASMS when necessary,
            including when a user:
          </p>

          <ul>
            <li>Violates these Terms.</li>
            <li>Attempts unauthorized access.</li>
            <li>Misuses the platform.</li>
            <li>Creates a security or operational risk.</li>
            <li>Uses the platform for illegal activities.</li>
          </ul>

          <p>
            A society administrator may also manage or deactivate users
            belonging to their society according to their administrative
            responsibilities.
          </p>

          <h2 className="text-lg text-brand-600">13. Intellectual Property</h2>

          <p>
            ASMS, including its software, interface, branding, design,
            documentation, and underlying technology, is owned by or licensed
            to ASMS unless otherwise stated.
          </p>

          <p>
            You may use the platform only for its intended purpose.
          </p>

          <p>
            These Terms do not transfer ownership of ASMS software or
            intellectual property to you.
          </p>

          <p>
            User-provided information remains subject to the rights and
            permissions applicable to that information.
          </p>

          <h2 className="text-lg text-brand-600">14. No Guarantee of Society Decisions</h2>

          <p>
            ASMS is a software platform and does not make decisions on behalf
            of societies, residents, guards, or administrators.
          </p>

          <p>For example, ASMS does not guarantee:</p>

          <ul>
            <li>The identity or behavior of a visitor.</li>
            <li>The accuracy of information entered by users.</li>
            <li>The outcome of a complaint.</li>
            <li>The correctness of a society notice.</li>
            <li>
              The actions of a resident, guard, administrator, visitor, or
              other user.
            </li>
          </ul>

          <p>
            Societies and their authorized users remain responsible for
            decisions made using information or workflows provided through
            ASMS.
          </p>

          <h2 className="text-lg text-brand-600">15. Limitation of Responsibility</h2>

          <p>
            ASMS is provided as a software service to support society
            operations.
          </p>

          <p>
            To the extent permitted by applicable law, ASMS is not
            responsible for losses resulting from:
          </p>

          <ul>
            <li>Incorrect information submitted by users.</li>
            <li>
              Unauthorized actions performed using a user's account.
            </li>
            <li>
              Decisions made by society administrators or other users.
            </li>
            <li>Visitor behavior or physical security incidents.</li>
            <li>Temporary service interruptions.</li>
            <li>Failures of third-party services.</li>
            <li>Events outside our reasonable control.</li>
          </ul>

          <p>
            Nothing in these Terms is intended to exclude or limit any
            liability that cannot legally be excluded or limited.
          </p>

          <h2 className="text-lg text-brand-600">16. Privacy</h2>

          <p>
            Your use of ASMS is also subject to our{" "}
            <a
              href="/privacy-policy"
              className="font-medium underline underline-offset-4"
            >
              Privacy Policy
            </a>
            , which explains how information is collected, used, stored, and
            handled.
          </p>

          <h2 className="text-lg text-brand-600">17. Changes to These Terms</h2>

          <p>
            We may update these Terms as ASMS evolves or when changes are
            required by operational or legal requirements.
          </p>

          <p>
            Updated Terms will be published on this page with a revised
            "Last updated" date.
          </p>

          <p>
            If you continue using ASMS after the updated Terms become
            effective, you agree to the updated Terms.
          </p>

          <h2 className="text-lg text-brand-600">18. Contact</h2>

          <p>
            If you have questions about these Terms and Conditions or need
            assistance with ASMS, please contact the ASMS team through the
            support or contact channel provided by the platform.
          </p>

          <hr />

          <p>
            <strong>ASMS — Apartment &amp; Society Management System</strong>
          </p>

          <p className="text-sm text-muted-foreground">
            These Terms are intended to describe the current ASMS MVP and
            should be reviewed and updated as the platform introduces new
            functionality, payments, subscriptions, integrations, or other
            services.
          </p>
        </article>
      </div>
    </main>
  );
}