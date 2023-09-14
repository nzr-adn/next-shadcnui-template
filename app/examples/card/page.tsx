import { Metadata } from "next";

import { cn } from "@/lib/utils";

import { CardCookieSettings } from "./components/cookie-settings";
import { CardCreateAccount } from "./components/create-account";
import { CardDatePicker } from "./components/date-picker";
import { CardGithub } from "./components/github-card";
import { CardNotifications } from "./components/notifications";
import { CardPaymentMethod } from "./components/payment-method";
import { CardReportIssue } from "./components/report-issue";
import { CardShareDocument } from "./components/share-document";
import { CardTeamMembers } from "./components/team-member";

export const metadata: Metadata = {
  title: "Cards",
  description: "Examples of cards built using the components.",
};

function CardContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}

export default function CardPage() {
  return (
    <>
      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <CardContainer>
            <CardCreateAccount />
          </CardContainer>
          <CardContainer>
            <CardPaymentMethod />
          </CardContainer>
        </div>

        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <CardContainer>
            <CardDatePicker />
          </CardContainer>
          <CardContainer>
            <CardShareDocument />
          </CardContainer>
          <CardContainer>
            <CardNotifications />
          </CardContainer>
          <CardContainer>
            <CardTeamMembers />
          </CardContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <CardContainer>
            <CardReportIssue />
          </CardContainer>
          <CardContainer>
            <CardCookieSettings />
          </CardContainer>
          <CardContainer>
            <CardGithub />
          </CardContainer>
        </div>
      </div>
    </>
  );
}
